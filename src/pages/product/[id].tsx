import Head from "next/head";
import Image from "next/image"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import Stripe from "stripe"
import { stripe } from "../../lib/stripe"
import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/router";
import { useCart } from "../../hooks/useCart";
import { IProduct } from "../../contexts/CartContext";



interface ProductProps {
  product: IProduct
}

export const getStaticPaths: GetStaticPaths = async() => {
  return {
    paths: [
      {
        params: {id: "prod_Ql1QA5dHoGqopq"}
      }
    ], 
    fallback: "blocking"
  }
}


export default function Product({product}: ProductProps) {
    const {isFallback} = useRouter()

    const {addToCart, checkIfItemAlreadyExists} = useCart()

    if(isFallback) {
      return <p>Loading...</p>
    }

    //  async function handleBuyButton() {
    //     try {
    //       setIsCreatingCheckoutSession(true)
    //       const response = await axios.post("/api/checkout", {
    //           priceId: product.defaultPriceId
    //       })

    //       const {checkoutUrl} = response.data

    //       window.location.href = checkoutUrl

    //     }catch(error) {

    //       setIsCreatingCheckoutSession(false)
    //       alert("Erro a redirecionar ao!")
    //     }
    //   }

  const itemAlreadyInCart = checkIfItemAlreadyExists(product.id)  

  return(
    <>
    <Head>
      <title>{product.name} | Ignite Shop</title>
    </Head>

    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button disabled={itemAlreadyInCart} onClick={() => addToCart(product)}>
          {
            itemAlreadyInCart ? "Produto já no carrinho" : "Colocar na sacola" 
          }
        </button>
      </ProductDetails>
    </ProductContainer>
  </>
  )
}




export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount / 100),
        description: product.description, 
        defaultPriceId: price.id,
        numberPrice: price.unit_amount / 100,
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}