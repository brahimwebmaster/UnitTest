import Counter from '../src/components/Counter.vue'
import { mount } from '@vue/test-utils';



it('increments counter value on click', async () => {
  const wrapper = mount(Counter)
  const button = wrapper.find('button')
  const text = wrapper.find('p')

  expect(text.text()).toContain('Total clicks: 0')
  // manipuler data
   await wrapper.setData({ count: 5 })
  //
  await button.trigger('click')

  expect(text.text()).toContain('Total clicks: 6')
})


