export function useSelectMenuComposable() {
  const [ showDetailsModal, toggleModal ] = useToggle(false)
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
