export const useGlobalStore = defineStore('global', {
  state: () => ({
    greet: '👋🏾 Welcome',
    theme: 'black',
  }),
  getters: {
    getTheme: state => state.theme,
    sayHi: state => state.greet,
  },
  actions: {
    setTheme(theme) {
      this.theme = theme
    },
  },
})
