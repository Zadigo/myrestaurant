<template>
  <section id="menus">
    <div class="relative">
      <div class="grid grid-cols-12 gap-4">
        <!-- Heading -->
        <div class="col-span-12 grid grid-cols-subgrid gap-4 bg-white shadow-sm p-10 rounded-lg">
          <div class="col-span-6 relative">
            <img src="/burger1.jpg" alt="Menus illustration" class="rounded-lg">
            <nuxt-button class="absolute top-1/24 m-3">
              <icon name="i-lucide-heart" />
            </nuxt-button>
          </div>

          <div class="col-span-6">
            <nuxt-breadcrumb :items="breadcrumbItems" />
            <h1 class="text-5xl font-bold">Notre carte</h1>
            <p class="m-0 text-muted">25 - 45 min · Burgers · Halal</p>

            <div class="space-x-2 my-4">
              <nuxt-button variant="soft">
                Information
              </nuxt-button>

              <nuxt-button variant="soft" color="error" @click="showDeliveryModal=true">
                Livraison
              </nuxt-button>
            </div>

            <div class="flex justify-left items-center bg-info/10 rounded-lg p-3 mt-4">
              <icon name="i-lucide-award" class="text-info me-3 fs-1" />

              <div>
                <p class="m-0 fw-normal text-info">Gagnez des récompenses</p>
                <p class="m-0 fw-light">15 € min. de commande • Passez 4 commandes et obtenez 8 €</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-8 py-2 mb-10">
          <nuxt-tabs v-model="currentSelection" :items="items" variant="link" color="neutral">
            <template #menus>
              <menu-iterator class="my-10" @select="selectMenu" />
            </template>

            <template #burger>
              <button @click="() => {}">Le burger braisé</button>
            </template>

            <template #starters>
              <button @click="() => {}">Starters</button>
            </template>

            <template #desserts>
              <button @click="() => {}">Desserts</button>
            </template>
          </nuxt-tabs>
        </div>

        <div class="col-span-4 py-2 mb-10">
          <nuxt-card>
            <template #header>
              <h3 class="font-bold">Votre panier</h3>
              <p class="text-muted">1 article · 15,90 €</p>
            </template>

            {{ cart }}
          </nuxt-card>
        </div>
      </div>
    </div>

    <!-- Modals -->
    <modals-menu-details v-model="showDetailsModal" :restaurant-menu="selectedMenu" />

    <!-- <details-modal :id="'details-modal'" :show="store.showDetailsModal" @close="store.toggleModal" />
    <delivery-modal :id="'details-modal'" :show="store.showDeliveryModal" /> -->
  </section>
</template>

<script lang="ts" setup>
import type { TabsItem, BreadcrumbItem } from '@nuxt/ui'
import type { Nullable, RestaurantMenu } from '~/types'

const breadcrumbItems = ref<BreadcrumbItem[]>([
  { text: 'Accueil', href: '/' },
  { text: 'Notre carte' }
])

const items = ref<TabsItem[]>([
  {
    label: 'Menus',
    icon: 'i-lucide-user',
    slot: 'menus' as const
  },
  {
    label: 'Le burger braisé',
    icon: 'i-lucide-lock',
    slot: 'burger' as const
  },
  {
    label: 'Starters',
    icon: 'i-lucide-lock',
    slot: 'starters' as const
  },
  {
    label: 'Desserts',
    icon: 'i-lucide-lock',
    slot: 'desserts' as const
  }
])

const currentSelection = ref<string>('0')

const showDeliveryModal = ref<boolean>(false)

function useSelectMenu() {
  const [showDetailsModal, toggleModal] = useToggle(false)
  const selectedMenu = ref<Nullable<RestaurantMenu>>(null)

  function selectMenu(item: RestaurantMenu) {
    selectedMenu.value = item
    toggleModal()
  }

  const isSelected = computed(() => selectedMenu.value !== null)

  return {
    selectedMenu,
    showDetailsModal,
    isSelected,
    toggleModal,
    selectMenu
  }
}

const { selectedMenu, selectMenu, showDetailsModal, isSelected } = useSelectMenu()
const { cart, newCartItem } = useCart()

watchTriggerable(isSelected, (newValue) => {
  if (newValue && selectedMenu.value) {
    newCartItem.menu_id = selectedMenu.value.id
    console.log('newCartItem', newCartItem)
  }
})

console.log('cart', useState('cart').value)
</script>
