import "../css/price-range-slider.css"
import { useState, useContext } from "react"
import  { useProducts } from "../context/ProductContext"

export default function PriceRangeSlider() {

    const[minValue, setMinValue] = useState(0)
    const[maxValue, setMaxValue] = useState(1000)

    const[minInput, setMinInput] = useState(0)
    const[maxInput, setMaxInput] = useState(1000)

    const[width,setWidth] = useState("")
    const[left, setLeft] = useState("")

    const minGap = 50
    const sliderMaxValue = 1000;

     // Get product state
    const { state: productState, dispatch } = useProducts();
    const { products, loading: prodLoading, error: prodError } = productState;

    const handleMinChange = (e) =>  {
        let minVal = Number(e.target.value);
        if((maxValue - minVal) <= minGap ){
           minVal = maxValue - minGap
             setMinValue(minVal);
        } else {
             setMinValue(minVal);
        }
        setMinInput(minVal)
        // highlightOnFilterChange()
    }


    const handleMaxChange = (e) => {
        let  maxVal = Number(e.target.value);
        if((maxVal - minValue) <= minGap ) {
            maxVal = minValue + minGap
            setMaxValue(maxVal);
        } else {
            setMaxValue(maxVal);
        }
        setMaxInput(maxVal)
        // highlightOnFilterChange()
    }


    function highlightOnFilterChange() {
        const percentMin = (minValue / sliderMaxValue) * 100;
        const percentMax = (maxValue / sliderMaxValue) * 100;

        setLeft(percentMin);
        setWidth(percentMax - percentMin);
    }

    function handleSubmit(e) {
         e.preventDefault();  
         dispatch({ type: "SET_FILTERS", payload: 
            { minPrice: minValue, maxPrice: maxValue } });
    }


    return (

        <form id="priceFilterForm" onSubmit={handleSubmit}>
            <div className="price-indicator">
                <label className="price-label">&#8377;<span  id="minInput" >{minInput}</span></label>
                <span>-</span>
                <label className="price-label">&#8377;<span  id="maxInput" >{maxInput}</span></label>                                   
            </div>

            <div className="price-range-container">                    
                <div className="slider-container">
                    <div className="slider-track"></div>
                    
                    <input type="range"
                           id="minSlider" 
                           value={minValue}
                           onChange ={(e)=>handleMinChange(e)} 
                           min="0" 
                           max="1000" 
                           step="10"
                    />

                    <input  type="range"
                            id="maxSlider"
                            value={maxValue}
                            onChange ={(e)=>handleMaxChange(e)} 
                            min="0"
                            max="1000" 
                            step="10"
                    />  
                </div>             
                <button type="submit" className="filterButton">Go</button>
            </div> 

        </form>
    )
}