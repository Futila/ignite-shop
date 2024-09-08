import * as Dialog from "@radix-ui/react-dialog"
import { CartButton } from "../CartButton";
import { CartClose, CartContent, CartFinalization, CartProduct, CartProductDetails, CartProductImage, FinalizationDetails } from "./styles";
import { X } from "phosphor-react";
import Image from "next/image";
import { useCart } from "../../hooks/useCart";



export function Cart () {

  const {cartItems} = useCart()

  console.log(cartItems)

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
         <CartButton/>
      </Dialog.Trigger>

      <Dialog.Portal>
      <CartContent>
        <CartClose>
          <X size={24} weight="bold"/>
        </CartClose>
        <h2>Sacola de compras</h2>


        <section>
          <p>Parece que seu carrinho está vazio 😌</p>

          <CartProduct>
            <CartProductImage>
              <Image width={100} height={93} alt=""/>
            </CartProductImage>

            <CartProductDetails>
              <p>Nome camiseta</p>
              <strong>R$ 69</strong>
              <button>Remover</button>
            </CartProductDetails>
          </CartProduct>
        </section>


        <CartFinalization>
            <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>

                  2 itens
                  {/* {cartQuantity} {cartQuantity > 1 ? "itens" : "item"} */}
                </p>
              </div>
              <div>
                <span>Valor total</span>
                <p>
                  679
                  {/* {formattedCartTotal} */}
                  </p>
              </div>
            </FinalizationDetails>
            <button
              // onClick={handleCheckout}
              // disabled={isCreatingCheckoutSession || cartQuantity <= 0}
            >
              Finalizar compra
            </button>
          </CartFinalization>
      </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}