import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  it('renders button correctly', () => {
    const wrapper = shallowMount(App);
    const welcomeHeader = wrapper.findComponent('#main');
    expect(welcomeHeader.exists()).toBe(true);
  });
});
