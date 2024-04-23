import React, { useState } from "react";
import styled from 'styled-components';
import ListProducts from "../listproduct/listaproduct";
import { useProductsQuery } from "@/pages/services/queryClient";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-50%")};
  width: 38%;
  height: 100%;
  background-color: blue;
  transition: right 0.3s ease-in-out;
  z-index: 999;
`;

const CartHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid #ccc;
`;

const CartTitle = styled.h3`
  margin: 20;
  color: black;
  font-size: 27px;
  color: #FFFF;
  width:180px;
  height:56px;
`;

const Btnclose = styled.h3`
  color: black;
  color: #FFFF;
  cursor: pointer;
`;


const CartItems = styled.div`
  color: black;
  background-color: white;
  padding:45px;
  border-radius: 8px;
  margin-left:47px;
  margin-right:47px;
  margin-top:70px;
`;

const CartItems2 = styled.div`
  color: black;
  background-color: white;
  padding:45px;
  border-radius: 8px;
  margin-left:47px;
  margin-right:47px;
  margin-top:22px;
`

const Cartimage = styled.img`
`
const Carttext = styled.p`
`

const cartprice = styled.h1`
`


const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const addProductToCart = (product: any) => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      // Se o produto já está no carrinho, aumente a quantidade
      setCartItems(prevItems => prevItems.map(item =>
        item.id === existingItem.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // Se o produto ainda não está no carrinho, adicione-o
      setCartItems(prevItems => [...prevItems, { ...product, quantity: 1 }]);
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, isLoading, isError } = useProductsQuery(1, 8, 'id', 'DESC');
  

    // Atualize o contador de itens no carrinho
    setCartCount(prevCount => prevCount + 1);

    console.log("Produto adicionado ao carrinho:", product);
  };

  return (
    <CartContainer className="fixed" isOpen={isOpen}>
      
      <CartHeader className="flex justify-between">
        <CartTitle>Carrinho de Compras</CartTitle>
        <Btnclose onClick={onClose}>Fechar</Btnclose>
      </CartHeader>
      <CartItems>
        <Cartimage />
      </CartItems>
      <CartItems2>

      </CartItems2>
    </CartContainer>
  );
};

export default Cart;