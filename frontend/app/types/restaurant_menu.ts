import type { _DatabaseItem, MeatCategory } from '.'

export interface RestaurantMenuCustomOptionCategory {
  /**
   * The name of this option category
   * (e.g., Cheese, Toppings, Sauces)
   */
  name: string
  /**
   * The price of this option if selected
   * (e.g., $1.00 for cheese, $0.50 for toppings)
   * @default 0
   */
  price_post_tax?: number,
  /**
   * The quantity to add when this option is selected
   * (e.g., 1 for cheese, 2 for toppings)
   * @default 0
   */
  add_quantity: number
}

export interface RestaurantMenuCustomOption {
  /**
   * Custom name provided by the user, e.g., "Choose your cheese"
   */
  custom_name?: string,
  /**
   * Categories of options, e.g., Cheese, Toppings, Sauces
   */
  categories: RestaurantMenuCustomOptionCategory[]
}

export interface RestaurantMenuCRestaurantMenuAdditionalOptionsChoices {
  name: string,
  price_post_tax?: number,
  disabled: boolean
}

export interface RestaurantMenuAdditionalOptions {
  name: string,
  category: 'Drink' | 'Side' | 'Dessert' | 'Other',
  single_choice: boolean,
  choices: RestaurantMenuCRestaurantMenuAdditionalOptionsChoices[]
}

export interface RestaurantMenu extends _DatabaseItem {
  /**
   * The name of the menu,
   * e.g., "Big Formule - Hamburgé, Fernandines, Breuvage et Dessert"
   */
  name: string
  /**
   * A brief description of the menu,
   * e.g., "A delicious burger with fries and a drink."
   */
  description: string
  /**
   * The main product of the menu, 
   * e.g., a burger, steak, etc.
   */
  main_product: {
    /**
     * The name of the main product
     * (e.g., "Classic Burger", "Grilled Chicken")
     */
    name: string,
    /**
     * Optional doneness specification for meat products
     * (e.g., "Beef" with states like "Rare", "Medium", "Well Done")
     */
    doneness?: {
      meat: {
        /**
         * The category of meat
         * (e.g., Beef, Chicken, Pork, Lamb, Fish, Vegetarian)
         */
        name: MeatCategory,
        /**
         * Whether this doneness option is required
         * (e.g., true if the user must select a doneness level)
         * @default false
         */
        required: boolean
      }
    },
    /**
     * Custom options for the main product,
     * e.g., "Choose your cheese" with categories like Cheese, Toppings, Sauces
     */
    custom_options: RestaurantMenuCustomOption[]
  },
  price_post_tax: number,
  /**
   * Additional options for the menu,
   * e.g., "Choose a side" with choices like Salad, Fries, Soup
   */
  additional_options?: RestaurantMenuAdditionalOptions[]
}
