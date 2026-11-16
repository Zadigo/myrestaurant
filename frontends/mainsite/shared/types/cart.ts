export interface CartItem<T = unknown> {
  product_id?: number
  menu_id?: number
  quantity: number
  menu_options: Record<string, T>
}

export interface Cart {
  items: CartItem[]
}
