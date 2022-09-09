import axios from 'axios';

axios.defaults.baseURL = 'https://fakestoreapi.com/';

export type ProductResponseType = {
  "id": number,
  "title": string,
  "price": number,
  "description": string,
  "category": string,
  "image": string,
  "rating": {
    "rate": number,
    "count": number
  }
}

export async function getProducts () {
  return axios.get<ProductResponseType[]>('/products');
};
