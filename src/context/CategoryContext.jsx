
import React, { createContext,  useReducer,  useContext, useEffect } from "react";

import {  retrieveCategories } from "../api/api";

const CategoryContext = createContext();

const initialState = { 
    category : "",  // selected category
    categories: [], // list of all categories
    loading: false,
    error: null 
  };

function categoryReducer(state, action) {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export const  CategoryProvider = ({ children }) => {

   const [state, dispatch] = useReducer(categoryReducer, initialState);

    useEffect(() => {
      
    const fetchCategories = async () => {
        dispatch({ type: "SET_LOADING", payload: true });
        try {    
            const data = await retrieveCategories()
            dispatch({ type: "SET_CATEGORIES", payload: data });
         } catch (err) {
             dispatch({ type: "SET_ERROR", payload: err.message });
        } finally {
            dispatch({ type: "SET_LOADING", payload: false });
        }
    };

    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ state , dispatch}}>
      {children}
    </CategoryContext.Provider>
  );
}

export const useCategories = () => useContext(CategoryContext);