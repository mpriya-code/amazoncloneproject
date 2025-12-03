import axiosClient from './axiosClient';

//Retrieve categories from dummyjson
export const retrieveCategories = async() => {
    const response = await axiosClient.get('/products/categories')
    return response.data
}



export const getProducts = async (category = '') => {
  const url = category === ''
    ? '/products'
    : `/products/category/${category}`;
  const res = await axiosClient.get(url);
  return res.data.products;
};




export const fetchProductsByCategory = async (category = "") => {
  try {
    let url = "https://dummyjson.com/products";
    if (category) {
      url = `https://dummyjson.com/products/category/${encodeURIComponent(category)}`;
    }
  } catch (err) {
    console.error("Error fetching search:", err);
    return [];
  }
}






    

  

