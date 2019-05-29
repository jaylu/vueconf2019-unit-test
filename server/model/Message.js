class Message {
  constructor ({ message, sender, time = new Date() }) {
    this.message = message
    this.sender = sender
    this.time = time
  }
}

module.exports = Message
