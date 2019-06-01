<template>
  <div class="message-row">
    <div class="header font message-header">
      <span>{{sender}}</span>
      <span>{{time | displayTime}}</span>
      <span>said:</span>
    </div>
    <div class="body font message-body">
      {{message}}
    </div>
  </div>
</template>

<script>

import { format } from 'date-fns'
export default {
  name: 'MessageRow',
  props: {
    sender: {
      type: String,
      default: null
    },
    time: {
      type: Date,
      default: null
    },
    message: {
      type: String,
      default: null
    }
  },
  filters: {
    displayTime (time) {
      return time ? format(time, 'YYYY-MM-DD HH:mm') : time
    }
  }
}
</script>

<style lang="stylus">
  .message-row
    padding-top 10px
    margin 10px
    border-top 1px solid lightgray
    text-align left
    .header
      padding-left 10px
      span
        margin-right 10px
    .body
      font-weight bold
      padding-left 10px

</style>
