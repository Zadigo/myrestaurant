import { mount } from '@vue/test-utils'

const MessageComponent = {
    template: '<p>{{ msg }}</p>',
    props: ['msg']
}


test('Menus view', () => {
    const wrapper = mount(MessageComponent, {
        propsData: 'Google'
    })
    expect(wrapper.text()).toContain('Google')
})
