import Cart from "@/components/cart/cart";
import Header from "@/components/header/header";
import Prodlist from "@/components/listproduct/listaproduct";
import { Container } from "postcss";

export default function Home() {
  const addProductToCart = (product: any) => {
    console.log("Produto adicionado ao carrinho:", product);
  };

  return (
    <main>
      <Header/>
      <Prodlist addProductToCart={addProductToCart} />
      <Cart isOpen={false} onClose={function (): void {
        throw new Error("Function not implemented.");
      } }/>
    </main>
  );
}