<template>
  <div class="message-input-new">
    <h4>New Message</h4>
    <form>
      <section class="name-input">
        <input type="text"
               v-model="userName"
               placeholder="Who"
               class="font message-header"/>
      </section>
      <section class="content-input">
        <textarea rows="3"
                  class="font message-body"
                  v-model="message"
                  placeholder="say something..."></textarea>
      </section>
      <section class="submit">
        <button @click="submit">Submit</button>
      </section>
    </form>
  </div>
</template>

<script>

export default {
  name: 'MessageInput',
  data () {
    return {
      userName: null,
      message: null
    }
  },
  methods: {
    submit () {
      this.$emit('submit', {
        message: this.message,
        sender: this.userName
      })
    }
  }
}
</script>

<style lang="stylus">
  .message-input-new
    form
      margin 0 auto
      width 480px

      section
        display flex
        justify-content flex-start
        margin-bottom 5px

        &.name-input
          input
            outline none
            font-size 16px
            border-top 0
            border-left 0
            border-right 0
            border-bottom 1px solid grey
            width 80px

          span
            margin-left 5px

        &.content-input
          textarea
            outline none
            font-size 16px
            width 100%

        &.submit
          justify-content flex-end

          button
            border 1px solid grey
            cursor pointer
            padding 5px 10px

            &:hover
              background lightseagreen

</style>
