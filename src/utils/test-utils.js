import { shallowMount } from '@vue/test-utils'
import { mergeWith } from 'lodash'

export function createWrapperWithShallowMount (vueComponent, defaultOptions, overrides) {
  return shallowMount(
    vueComponent,
    mergeWith(defaultOptions, overrides))
}
