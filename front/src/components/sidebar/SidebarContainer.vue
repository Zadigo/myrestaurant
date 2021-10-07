<script>
// import Navigation from './Navigation.vue'

export default {
  name: 'SidebarContainer',
  render: (t) => {
    return t('div', { class: 'wrapper', ref: 'link' }, [
      t('nav', { class: 'sidebar' }, this.$slots),
      t('div', { class: 'content' }, this.$slots)
    ])
  }
}
</script>
