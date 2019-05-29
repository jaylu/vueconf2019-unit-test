function toSatisfy (received, checkFunc) {
  checkFunc(received)
  return {
    pass: true,
    message: () => `Checking pass.`
  }
}

expect.extend({
  toSatisfy
})
