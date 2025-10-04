import type { RestaurantMenu } from '~/types'

export const availableMenus = ref<RestaurantMenu[]>([
  {
    id: 1,
    name: 'Big Formule',
    description: 'Hamburgé, Fernandines, Breuvage et Dessert',
    price_post_tax: 15.99,
    main_product: {
      name: 'Le Barnabé',
      doneness: {
        meat: {
          name: 'Beef',
          required: true
        }
      },
      custom_options: [
        {
          custom_name: "Le gras c'esrt la vie",
          categories: [
            {
              name: 'Lard',
              price_post_tax: 5,
              add_quantity: 0
            },
            {
              name: 'Oignons frits',
              price_post_tax: 5,
              add_quantity: 0
            }
          ]
        }
      ]
    },
    additional_options: [
      {
        name: 'Boissons',
        category: 'Drink',
        single_choice: true,
        choices: [
          {
            name: 'Coca-Cola',
            price_post_tax: 2.5,
            disabled: false
          },
          {
            name: 'Fanta',
            price_post_tax: 2.5,
            disabled: false
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Petit Formule',
    description: 'Hamburgé, Fernandines et Breuvage',
    price_post_tax: 10.99,
    main_product: {
      name: 'Le Barnabé',
      custom_options: [
        {
          custom_name: "Le gras c'esrt la vie",
          categories: [
            {
              name: 'Lard',
              price_post_tax: 5,
              add_quantity: 0
            },
            {
              name: 'Oignons frits',
              price_post_tax: 5,
              add_quantity: 0
            }
          ]
        }
      ]
    }
  },
  {
    id: 3,
    name: 'Menu Enfant',
    description: 'Petit Hamburgé, Fernandines et Breuvage',
    price_post_tax: 7.99,
    main_product: {
      name: 'Le Barnabé',
      custom_options: [
        {
          custom_name: "Le gras c'esrt la vie",
          categories: [
            {
              name: 'Lard',
              price_post_tax: 5,
              add_quantity: 0
            },
            {
              name: 'Oignons frits',
              price_post_tax: 5,
              add_quantity: 0
            }
          ]
        }
      ]
    }
  }
])
