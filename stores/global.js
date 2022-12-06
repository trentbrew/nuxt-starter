export const useGlobalStore = defineStore('global', {
  state: () => ({
    greet: '👋🏾',
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
