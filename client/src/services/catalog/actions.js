import axios from 'axios';

const productsAPI = '/api/products';

export const fetchProducts = async () => {
  return await axios
    .get(productsAPI)
    .then(res => {
      let products = res.data;
      console.log(products);
      return Promise.resolve(products);
    })
    .catch(err => {
      console.log('Could not fetch products. Try again later.');
      return Promise.reject(err);
    });
};

export const getProductById = async (productId) => {
  return await axios
    .get(productsAPI + `/${productId}`)
    .then(res => {
      let product = res.data;
      console.log(product);
      return Promise.resolve(product);
    })
    .catch(err => {
      console.log(`Could not fetch product with id : ${productId}. Try again later.`);
      return Promise.reject(err);
    });

};