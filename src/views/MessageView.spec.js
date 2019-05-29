import { shallowMount } from '@vue/test-utils'
import { mergeWith } from 'lodash'
import MessageView from '@/views/MessageView'
import MessageInput from '@/components/message/input/MessageInput'
import { getAllMessages, postMessage } from '@/services/apis/message/message-api'
import MessageList from '@/components/message/list/MessageList'
import flushPromises from 'flush-promises'

jest.mock('@/services/apis/message/message-api', () => ({
  postMessage: jest.fn(),
  getAllMessages: jest.fn()
}))

describe('MessageView.vue', () => {
  function createWrapper (overrides) {
    const defaultOptions = {
      propsData: {}
    }

    return shallowMount(
      MessageView,
      mergeWith(defaultOptions, overrides))
  }

  afterEach(() => {
    getAllMessages.mockClear()
    postMessage.mockClear()
  })

  it('can handle user submit', async () => {
    let messageFromJay = { 'message': 'Hello', 'sender': 'Jay ', 'time': '2019-05-18T14:42:18.796Z' }
    let messageFromKen = { 'message': 'hi', 'sender': 'Ken', 'time': '2019-05-18T14:42:25.100Z' }
    let requestPayload = { 'message': '   Hello', 'sender': 'Jay' }

    // noinspection JSCheckFunctionSignatures
    getAllMessages.mockResolvedValue({ data: [messageFromJay, messageFromKen] })

    // noinspection JSCheckFunctionSignatures
    postMessage.mockResolvedValueOnce({})

    let wrapper = shallowMount(MessageView)

    wrapper.find(MessageInput).vm.$emit('submit', requestPayload)

    await flushPromises()

    expect(postMessage).toHaveBeenCalledTimes(1)
    expect(postMessage).toHaveBeenCalledWith(requestPayload)
    expect(getAllMessages).toHaveBeenCalledTimes(2)

    expect(wrapper.find(MessageList).props('data')).toMatchObject([
      { 'message': 'Hello', 'sender': 'Jay ', 'time': new Date('2019-05-18T14:42:18.796Z') },
      { 'message': 'hi', 'sender': 'Ken', 'time': new Date('2019-05-18T14:42:25.100Z') }
    ])
  })

  it('should call api to send message and reload after user clicking submit button', async () => {
    let messageFromJay = { 'message': 'Hello', 'sender': 'Jay ', 'time': '2019-05-18T14:42:18.796Z' }
    let messageFromKen = { 'message': 'hi', 'sender': 'Ken', 'time': '2019-05-18T14:42:25.100Z' }
    let requestPayload = { 'message': 'Hello', 'sender': 'Jay' }

    // noinspection JSCheckFunctionSignatures
    getAllMessages
      .mockResolvedValueOnce({ data: [messageFromKen] })
      .mockResolvedValueOnce({ data: [messageFromJay, messageFromKen] })

    // noinspection JSCheckFunctionSignatures
    postMessage
      .mockResolvedValueOnce({})

    let wrapper = createWrapper()

    wrapper.find(MessageInput).vm.$emit('submit', requestPayload)

    await flushPromises()

    expect(postMessage).toHaveBeenCalledTimes(1)
    expect(postMessage).toHaveBeenCalledWith(requestPayload)
    expect(getAllMessages).toHaveBeenCalledTimes(2)

    expect(wrapper.find(MessageList).props('data')).toMatchObject([
      { 'message': 'Hello', 'sender': 'Jay ', 'time': new Date('2019-05-18T14:42:18.796Z') },
      { 'message': 'hi', 'sender': 'Ken', 'time': new Date('2019-05-18T14:42:25.100Z') }
    ])
  })
})
