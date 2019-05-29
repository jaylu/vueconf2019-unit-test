<template>
  <div class="message-list">
    <h4>{{title}}</h4>
    <div class="content">
      <message-row v-for="(item, index) in sortedData"
                   :key="index"
                   :sender="item.sender"
                   :message="item.message"
                   :time="item.time"
      ></message-row>
    </div>
  </div>
</template>

<script>
import MessageRow from '@/components/message/list/row/MessageRow'
import { orderBy } from 'lodash'

export default {
  name: 'MessageList',
  components: { MessageRow },
  props: {
    title: {
      type: String,
      default: 'Message List'
    },
    data: {
      type: Array,
      default: () => ([])
    }
  },
  computed: {
    sortedData () {
      return orderBy(this.data, ['time'], ['desc'])
    }
  }
}
</script>

<style lang="stylus">
  .message-list
    width 500px
    margin: 0 auto
</style>
