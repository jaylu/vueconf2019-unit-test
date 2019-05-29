<template>
  <div class="">
    <message-input @submit="onSubmit"></message-input>
    <message-list :data="data"></message-list>
  </div>

</template>

<script>
import MessageList from '@/components/message/list/MessageList'
import MessageInput from '@/components/message/input/MessageInput'
import { convertToMessageObject } from '@/services/converters/message-converter'
import { postMessage, getAllMessages } from '@/services/apis/message/message-api'

export default {
  name: 'MessageView',
  components: { MessageInput, MessageList },
  data () {
    return {
      data: []
    }
  },
  methods: {
    async onSubmit (payload) {
      await postMessage(payload)
      await this.reload()
    },
    async reload () {
      let { data } = await getAllMessages()
      this.data = data.map(msg => convertToMessageObject(msg))
    }
  },
  async created () {
    await this.reload()
  }
}
</script>

<style scoped>

</style>
