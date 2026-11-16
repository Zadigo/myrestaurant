export type Nullable <T> = T | null

export interface _DatabaseItem {
  id: number
}

export type MeatCategory = 'Beef' | 'Chicken' | 'Pork' | 'Lamb' | 'Fish' | 'Vegetarian'

export type MeatDoneness = 'Well Done' | 'Medium' | 'Rare' | 'Blue Rare'

export * from './restaurant_menu'
export * from './cart'
