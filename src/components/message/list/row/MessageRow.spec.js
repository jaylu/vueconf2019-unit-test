import { shallowMount } from '@vue/test-utils'
import MessageRow from '@/components/message/list/row/MessageRow'
import { mergeWith } from 'lodash'

describe('MessageRow.vue', () => {
  function createWrapper (overrides) {
    const defaultOptions = {
      propsData: {
        sender: '',
        time: new Date(),
        message: ''
      }
    }

    return shallowMount(
      MessageRow,
      mergeWith(defaultOptions, overrides))
  }

  describe(':props', () => {
    it(':sender - should render sender', () => {
      let wrapper = createWrapper({
        propsData: {
          sender: 'Jay'
        }
      })
      expect(wrapper.text()).toContain('Jay')
    })

    it(':message - should render message', () => {
      let wrapper = createWrapper({
        propsData: {
          message: 'Jay message'
        }
      })
      expect(wrapper.text()).toContain('Jay message')
    })

    it(':time - should render time', () => {
      let wrapper = createWrapper({
        propsData: {
          time: new Date('Tue May 07 2019 09:00:43 GMT+0800 (China Standard Time)')
        }
      })
      expect(wrapper.text()).toContain('2019-05-07 09:00')
    })
  })
})
