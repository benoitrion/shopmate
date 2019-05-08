import axios from 'axios';

const productsAPI = '/api/products';

export const fetchProducts = async () => {
  return await axios
    .get(productsAPI)
    .then(res => {
      let products = res.data;
      return Promise.resolve(products);
    })
    .catch(err => {
      console.log('Could not fetch products. Try again later.');
      return Promise.reject(err);
    });
};
