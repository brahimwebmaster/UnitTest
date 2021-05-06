import App from '../src/App.vue'
import { mount } from '@vue/test-utils';
describe('Testing App component', () => {
    it('checks textcontent to Hello ', () => {
        const wrapper = mount(App); //returns instance of the component.
        //accessing dom element and checks textcontent
        expect(wrapper.element.textContent).toBe('props message'); 
      })

      // check test when we change data
      it('checks textcontent to Hi', () => {
        const wrapper = mount(App, {
          data: function () {
            return {
              msg:'Hi'
            }
          },
          // check propos
          propsData: {
            msgProps: 'props message 2'
          }
        })
        expect(wrapper.element.textContent).toBe('props message 2'); 
      })          
})