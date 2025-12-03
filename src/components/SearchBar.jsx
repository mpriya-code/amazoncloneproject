import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react'
import { useCategories } from '../context/CategoryContext';
import { useProducts } from '../context/ProductContext';

import { getProducts} from "../api/api"

import '../css/autocomplete.css';

export default function SearchBar () {

    // Get category state
    const { state: categoryState, dispatch: categoryDispatch } = useCategories();
    const { categories, loading: catLoading, error: catError } = categoryState;

    // Get product state
    const { state: productState, dispatch:productDispatch } = useProducts();    

    const [searchInput, setSearchInput] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [isSelecting, setIsSelecting] = useState(false); // prevent duplicate API calls

    {/* Category Change */} 
   const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    categoryDispatch({ type: "SET_CATEGORY", payload: newCategory });
    setSearchInput(""); // clear input
    productDispatch({ type: "SET_SELECTED_PRODUCT", payload: null }); // reset selected product
};


// Fetch suggestions while typing
    useEffect(() => {
        if (!searchInput || !showDropdown || isSelecting) {
        setSuggestions([]);
        return;
        }

        const fetchSuggestions = async () => {
        try {
            const categoryForSearch = productState.selectedProduct
            ? productState.selectedProduct.category
            : categoryState.category;

            const allProducts = await getProducts(categoryForSearch);
            const filtered = allProducts.filter((p) =>
            p.title.toLowerCase().includes(searchInput.toLowerCase())
            );
            setSuggestions(filtered);
        } catch (err) {
            console.error(err);
            setSuggestions([]);
        }
        };

        fetchSuggestions();
    }, [
        searchInput,
        categoryState.category,
        productState.selectedProduct,
        showDropdown,
        isSelecting,
    ]);



    const handleSearchButtonClick = async () => {  
           setIsSelecting(true);

            const categoryForSearch = productState.selectedProduct
                ? productState.selectedProduct.category
                : categoryState.category;

            // If input empty, show all products of category
            if (!searchInput) {
                productDispatch({ type: "SET_SELECTED_PRODUCT", payload: null });
                setShowDropdown(false);
                setIsSelecting(false);
                return;
            }

            try {
                //  Fetch products of current category
                const allProducts = await getProducts(categoryForSearch);

                //  Find a product with exact title match (case-insensitive)
                const matchingProduct = allProducts.find(
                (p) => p.title.toLowerCase() === searchInput.toLowerCase()
                );

                if (matchingProduct) {
                productDispatch({ type: "SET_SELECTED_PRODUCT", payload: matchingProduct });
                } else {
                alert("No matching product found in this category.");
                }
            } catch (err) {
                console.error("Search failed:", err);
            }

            setShowDropdown(false);
            setIsSelecting(false);
        };

        
     const handleSelectSuggestion = (product) => {
       setIsSelecting(true);
        setSearchInput(product.title);
        setSuggestions([]);
        setShowDropdown(false);
        productDispatch({ type: "SET_SELECTED_PRODUCT", payload: product });

        // Reset selection flag
        setTimeout(() => setIsSelecting(false), 0);
    };

    // Typing in input
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchInput(value);

        if (value) {
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
            productDispatch({ type: "SET_SELECTED_PRODUCT", payload: null });
        }
    };
    
    return (
        <div className="search-box">  
             <select id="search-dropdown-menu" 
                     className="search-dropdown" 
                     value={categoryState.category}
                     onChange={handleCategoryChange}

             >   
                <option value="" >All</option>
                 {categories.map((categoryData,index) => (
                    <option key={index} value={categoryData.slug}>
                        {categoryData.name}
                    </option>
                 ))}
            </select>
             
            
            <div className="autocomplete-container">
                 <input  type="text" 
                    id="search-text"
                    autoComplete="off"
                    placeholder="Search Amazon" 
                    value={searchInput}
                    onChange={handleInputChange}
            />

                 {loading && <div style={{ position: "absolute", top: "45px", left: "10px" }}>Searching...</div>}

               {suggestions.length > 0 && (
                    <ul className="autocomplete-suggestions">
                        {
                            suggestions.map((p) => (
                            <li key={p.id}
                                className="autocomplete-suggestion" 
                                onMouseDown={() => handleSelectSuggestion(p)}
                            >
                                {p.title}
                            </li>
                            ))}
                    </ul>
                    )
                }
           
                <div className="search-icon">
                    <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleSearchButtonClick}/>                    
                </div>
            </div>
        </div>
    )
}