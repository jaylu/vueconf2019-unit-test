const user = {
  state: {
    basicInfo: {
      name: 'Jay LU'
    },
    permissions: [],
    isTokenValidated: false
  },
  mutations: {
    updateBasicInfo (state, payload = {}) {
      state.basicInfo.name = payload.name || ''
    }
  },
  actions: {
    async getPermission ({ commit }) {}
  },
  getters: {
    userName: state => state.basicInfo.name
  }
}

export default user
