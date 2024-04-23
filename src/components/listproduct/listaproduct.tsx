import React, { useState } from "react";
import styled from 'styled-components';
import { useProductsQuery } from '@/pages/services/queryClient';

import icone_compra from "../../components/listproduct/img/Group 2.png"

interface ListProductsProps {
  addProductToCart: (product: any) => void;
}

const Contain = styled.div`
    background-color: #FFFF;
    color: white;
    width: 938px;
    height: 601px;
    margin-top: 116px;
    margin-left: 247px;
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 colunas */
`

const ProductCard = styled.div`
    width: 218px;
    height: 285px;
    background-color: #FFFF;
    gap: 31px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Alinha os itens verticalmente */
`
const ProductImage = styled.img`
  width: 111px;
  height: 138px;
  margin: auto;
`;

const Productname = styled.h2`
  width: 124px;
  height: 38px;
  font-size: 16px;
  color: #2C2C2C;
`

const Boxprice = styled.p`
  background-color: #2C2C2C;
  Width: 64px;
  Height: 26px;
  text-align: center;
  border-radius: 5px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Boxflexprice = styled.div`
  display: flex;
  justify-content: center;
`

const Description = styled.p`
  display: flex;
  justify-content: center;
  font-size: 10px;
  padding: 8px 14px;
  color: #2C2C2C;
`

const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ButtonProduct = styled.button`
  background-color: blue;
  width: 218px;
  height: 32px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  align-self: center; /* Centraliza o botão horizontalmente */
  margin-top: -50px;
`
const Iconebutton = styled.img`
  margin: auto;
`

const ListProducts: React.FC<ListProductsProps> = ({ addProductToCart }) => {
  const [cartCount, setCartCount] = useState(0); // Estado para armazenar a contagem de produtos no carrinho

  //React Query loading API
  const { data, isLoading, isError } = useProductsQuery(1, 8, 'id', 'DESC');
  
  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Erro ao carregar os produtos</div>;
  
  return (
    <Contain>
      {data?.products.map((product: any) => (
        <ProductCard key={product.id}>
          <ProductContent>
            <ProductImage src={product.photo} alt={product.name}/>
            <Boxflexprice>
              <Productname>{product.name}</Productname>
              <Boxprice>R${parseFloat(product.price).toFixed(2).replace(/\.00$/, '')}</Boxprice>
            </Boxflexprice>
            <Description>{product.description}</Description>  
          </ProductContent>
          <ButtonProduct  onClick={() => addProductToCart(product)}>
            <Iconebutton src={icone_compra.src} />
          </ButtonProduct>
        </ProductCard>
      ))}
    </Contain>
  );
};

export default ListProducts;

