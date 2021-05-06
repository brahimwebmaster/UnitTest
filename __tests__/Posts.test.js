import { shallowMount } from '@vue/test-utils'
import Posts from '../src/components/Posts.vue'

jest.mock("axios", () => ({
  get: () => Promise.resolve({ data: [{ val: 1 }] })
}));

describe("Posts.vue", () => {
  it("mocking the axios call to get posts should work", () => {
    var wrapper = shallowMount(Posts);
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.posts.length).toBe(1);
    });
  });
});