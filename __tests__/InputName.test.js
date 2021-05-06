import { shallowMount } from '@vue/test-utils'
import InputName from '../src/components/InputName.vue'

test('Hello', async () => {
  // restitue le composant
  const wrapper = shallowMount(InputName)

  // n'accepte pas un `username` de moins de 7 caractères, exclut les espaces
 await wrapper.setData({ username: " ".repeat(7) });

  // vérifie que `error` est restituée
  expect(wrapper.find(".error").exists()).toBe(true);

  // met à jour `username` afin qu'il soit suffisamment long
  await wrapper.setData({ username: 'Lachlan' })

  // vérifie que `error` n'est plus restituée
  expect(wrapper.find(".error").exists()).toBe(false);
});