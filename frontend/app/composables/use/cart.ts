import type { Cart, CartItem } from '~/types';

/**
 * Composable for managing the shopping cart
 */
export const useCart = createSharedComposable(<I = unknown>() => {
  const newCartItem = reactive<CartItem<I>>({
    product_id: undefined,
    menu_id: undefined,
    quantity: 1,
    menu_options: {}
  })

  const cart = useState<Cart>('cart')

  function add() {
    cart.value.items.push({ ...newCartItem })
    console.log('cart', cart.value)
  }
  
  function reset() {
    newCartItem.product_id = undefined
    newCartItem.menu_id = undefined
    newCartItem.quantity = 1
    newCartItem.menu_options = {}
  }

  return {
    cart,
    newCartItem,
    reset,
    add
  }
})
