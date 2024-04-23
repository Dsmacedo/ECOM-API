import { QueryClient } from "react-query";

export const queryClient = new QueryClient()

import { useQuery } from 'react-query';

export const fetchProducts = async (page: number, rows: number, sortBy: string, orderBy: string) => {
  const response = await fetch(`https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar os produtos');
  }
  return response.json();
};

export const useProductsQuery = (page: number, rows: number, sortBy: string, orderBy: string) => {
  return useQuery(['products', page, rows, sortBy, orderBy], () => fetchProducts(page, rows, sortBy, orderBy));
};