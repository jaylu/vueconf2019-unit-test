function log (message) {
  //process.stdout.write(message + '\n')
}

describe('Outer describe', () => {
  beforeAll(() => {
    log('beforeAll: Outer')
  })

  beforeEach(() => {
    log('\tbeforeEach: Outer')
  })

  afterEach(() => {
    log('\tafterEach; Outer')
  })

  afterAll(() => {
    log('afterAll: Outer')
  })

  describe('Inner describe One', () => {
    beforeEach(() => {
      log('\tbeforeEach: Inner')
    })

    afterEach(() => {
      log('\tafterEach: Inner')
    })

    test('should run test A', () => {
      log('\t\tRun test A')
      expect('A').toBe('A')
    })

    test('should run test B', () => {
      log('\t\tRun test B')
      expect('B').toBe('B')
    })
  })
})
