import { shallowMount } from '@vue/test-utils'
import { mergeWith } from 'lodash'
import MessageInputNew from '@/components/message/input/MessageInput'

describe('MessageInput.vue', () => {
  it('should emit a "submit" event when user click submit button', () => {
    let wrapper = shallowMount(MessageInputNew)
    wrapper.find('input').setValue('Jay')
    wrapper.find('textarea').setValue('Hello')
    wrapper.find('button').trigger('click')

    let emitted = wrapper.emitted('submit')

    expect(emitted.length).toBe(1)
    expect(emitted[0]).toEqual([
      {
        sender: 'Jay',
        message: 'Hello'
      }
    ])
  })

  function createWrapper (overrides) {
    const defaultOptions = {
      propsData: {}
    }

    return shallowMount(
      MessageInputNew,
      mergeWith(defaultOptions, overrides))
  }

  describe('@events', () => {
    it('@submit - should emit a "submit" event when user click submit button', () => {
      let wrapper = createWrapper()
      wrapper.find('input').setValue('Jay')
      wrapper.find('textarea').setValue('Hello')
      wrapper.find('button').trigger('click')

      let emitted = wrapper.emitted('submit')

      expect(emitted.length).toBe(1)
      expect(emitted[0]).toEqual([
        {
          sender: 'Jay',
          message: 'Hello'
        }
      ])
    })
  })
})
