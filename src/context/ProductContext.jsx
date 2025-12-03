import React, { createContext, useReducer, useEffect , useContext} from "react";

import { useCategories } from "./CategoryContext";

import { getProducts } from "../api/api"

//  Create Context
const ProductContext = createContext();


const initialState = {
  allProducts: [],         // products for current dropdown category
  products: [],            // products shown in ProductContainer
  filters: { 
    category: "",
    minPrice: null,
    maxPrice: null,
  },
  selectedProduct: null,   // product clicked from autocomplete
  loading: false,
  error: null,
  };


  const filterByPrice = (products, minPrice, maxPrice) => {
        return products.filter((p) => {
          if (minPrice != null && p.price < minPrice) return false;
          if (maxPrice != null && p.price > maxPrice) return false;
          return true;
        });
  };

function productReducer(state, action) {
  switch (action.type) {

    // When products are fetched successfully
   case "SET_PRODUCTS":
      return {
        ...state,
        allProducts: action.payload,
        products: filterByPrice(
          action.payload,
          state.filters.minPrice,
          state.filters.maxPrice
        ),
        loading: false,
        error: null,
      };

    case "SET_FILTERS":
      const updatedFilters = { ...state.filters, ...action.payload };
      return {
        ...state,
        filters: updatedFilters,
        products: filterByPrice(
          state.allProducts,
          updatedFilters.minPrice,
          updatedFilters.maxPrice
        ),
      };

      // New case to handle selected product globally
    case "SET_SELECTED_PRODUCT":
       return {
        ...state,
        selectedProduct: action.payload,
        products: action.payload ? [action.payload] : state.allProducts,
      };

    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };   
    default:
      return state;
  }
}

//  Provider component 
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const { state: categoryState } = useCategories();  // get selected category

    // Fetch products whenever category changes in dropdown
 useEffect(() => {
    const loadProducts = async () => {
      dispatch({ type: "SET_LOADING", payload: true });
      try {
        const data = await getProducts(categoryState.category); // fetch by selected category
        dispatch({ type: "SET_PRODUCTS", payload: data });
      } catch (err) {
        dispatch({ type: "SET_ERROR", payload: err.message });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };

    loadProducts();
  }, [categoryState.category]); // refetch products whenever category changes

   // Provide the global state + dispatch
  return (
     <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};


//  Custom hook
export const useProducts = () => useContext(ProductContext);





/*
import React, { createContext, useReducer, useEffect , useContext} from "react";

import { getProducts } from "../api/api"

const ProductContext = createContext();

const initialState = {
  products: [],
  category: 'all',
  loading: false,
  error: null,
};

function productReducer(state, action) {
  switch (action.type) {
    case 'SET_CATEGORY':
      return { ...state, category: action.payload };

    case 'SET_PRODUCTS' :
      return { ...state, loading: false, products: action.payload };

    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, products: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const setCategory = (category) => {
    dispatch({ type :'SET_CATEGORY' , payload: category})
  }


  useEffect(() => {
    console.log("inside prod context",state.category)
      const loadProducts = async () =>{
         dispatch({ type: 'FETCH_START' });
           try {
              const data = await getProducts(state.category);
              console.log("data::",data.products)
              dispatch({ type: 'FETCH_SUCCESS', payload: data.products });
          } catch (err) {
              dispatch({ type: 'FETCH_ERROR', payload: err.message });
          }
      }
      loadProducts();
  },[state.category])

  return (
    <ProductContext.Provider value={{ state, setCategory, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);

*/
