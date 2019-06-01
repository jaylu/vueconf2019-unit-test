import MessageRow from '@/components/message/list/row/MessageRow'
import MessageList from '@/components/message/list/MessageList'
import { mergeWith } from 'lodash'
import { shallowMount } from '@vue/test-utils'

describe('MessageList.vue', () => {

  function createWrapper (overrides) {
    const defaultOptions = {
      propsData: {
        title: 'My Title',
        data: []
      }
    }

    return shallowMount(
      MessageList,
      mergeWith(defaultOptions, overrides))
  }

  let aMessageRowWith = (time, sender, message) => (row) => {
    expect(row.props('time')).toEqual(time)
    expect(row.props('sender')).toEqual(sender)
    expect(row.props('message')).toEqual(message)
  }

  describe(':props', () => {
    it(':title - should render title', () => {
      let wrapper = createWrapper({
        propsData: {
          title: 'Test Title'
        }
      })
      expect(wrapper.text()).toContain('Test Title')
    })

    it(':message - should render data list in time desc order', () => {
      const dateEarlier = new Date(2019, 4, 7, 9)
      const dateLater = new Date(2019, 4, 7, 10)

      const wrapper = shallowMount(
        MessageList,
        {
          propsData: {
            data: [
              { time: dateEarlier, sender: 'Ken', message: 'You looks good today' },
              { time: dateLater, sender: 'Jay', message: 'Only today ?' }
            ]
          }
        })

      const allMessageRows = wrapper.findAll(MessageRow)
      expect(allMessageRows.length).toEqual(2)

      expect(allMessageRows.at(0)).toSatisfy(
        aMessageRowWith(dateLater, 'Jay', 'Only today ?'))
      expect(allMessageRows.at(1)).toSatisfy(
        aMessageRowWith(dateEarlier, 'Ken', 'You looks good today'))
    })
  })
})
