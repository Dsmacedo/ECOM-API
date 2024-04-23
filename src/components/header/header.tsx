import React, { useState } from "react";
import styled from 'styled-components';

import carrinho from "../../components/header/img/Vector.png"

import Cart from "../cart/cart";


const StyledHeader = styled.header`
    width: 100%;
    height: 101px;
    background-color: blue;
    color: white;
    display: flex;
    align-items: center; /* Centralizar verticalmente */
`;

const Logo = styled.div`
    display: flex;
    align-items: baseline; /* Alinhar as linhas de base dos textos */
    margin-left: 65px;
`;

const MK = styled.h1`
    font-size: 40px; /* Ajuste o tamanho do texto para a primeira parte do logo */
    margin-right: 10px; /* Adicionado espaço entre as duas partes do logo */
`;

const Sistemas = styled.h2`
    font-size: 20px; /* Ajuste o tamanho do texto para a segunda parte do logo */
    height: 44px;
    width: 200px;
`;

const OptionNav = styled.nav`
    margin-left: auto; /* Move o carrinho para a direita */
    margin-right: 88px; /* Adiciona espaço entre o carrinho e o restante do conteúdo */
`;

const CartButton = styled.button`
    background-color: white;
    color: black;
    height: 45px;
    width: 90px;
    border-radius: 8px;
    display: flex;
    align-items: center; /* Centralizar verticalmente */
`;

const CartIcon = styled.img`
    width: 20px; /* Largura do ícone */
    height: 18px; /* Altura do ícone */
    margin-right: 16px; /* Espaço entre o ícone e o contador */
    margin-left:15px
`;

const CartCount = styled.span`
    color: black;
    font-weight: bold; 
`;

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); // Estado para armazenar a contagem de produtos no carrinho

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <StyledHeader>
      <Logo>
        <MK>MKS</MK>
        <Sistemas>Sistemas</Sistemas>
      </Logo>
      <OptionNav>
        <CartButton onClick={toggleCart}>
          <CartIcon src={carrinho.src} alt="Icone Carrinho" />
          <CartCount>{cartCount}</CartCount>
        </CartButton>
      </OptionNav>
      <Cart isOpen={isCartOpen} onClose={toggleCart} />
    </StyledHeader>
  );
}

export default Header;
