import Home from '../../src/views/Home.vue';
import Vuetify from 'vuetify';
import { createLocalVue, mount, shallowMount } from '@vue/test-utils';

describe('Home.vue', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuetify);

    wrapper = mount(Home, {
      localVue,
      propsData: {
        showMore: {
          showLoader: function() {}
        }
      }
    });
  });

  it('Renderização da instância Vue', () => {
    expect(shallowMount(Home).isVueInstance()).toBe(true);
  });
});