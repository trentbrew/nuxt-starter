export const useGlobalStore = defineStore('global', {
  state: () => ({
    test: {
      greeting: 'Welcome 👋🏾'
    },
  }),
  getters: {
    greet: (state) => state.test.greeting,
  },
  actions: {
    updateGreeting: (state, payload) => {
      state.test.greeting = payload
    }
  }
})
