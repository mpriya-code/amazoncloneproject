import React, { createContext, useReducer, useEffect, useContext } from 'react';
import { getProductById } from '../api/productApi';

const SingleProductContext = createContext();

const initialState = { product: null, loading: false, error: null };

function singleProductReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, product: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function SingleProductProvider({ children, productId }) {
  const [state, dispatch] = useReducer(singleProductReducer, initialState);

  useEffect(() => {
    if (!productId) return;
    const loadProduct = async () => {
      dispatch({ type: 'FETCH_START' });
      try {
        const data = await getProductById(productId);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_ERROR', payload: err.message });
      }
    };
    loadProduct();
  }, [productId]);

  return (
    <SingleProductContext.Provider value={{ state }}>
      {children}
    </SingleProductContext.Provider>
  );
}

export const useSingleProduct = () => useContext(SingleProductContext);

