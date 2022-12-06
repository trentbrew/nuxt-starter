export const useGlobalStore = defineStore('global', {
  state: () => ({
    theme: 'black',
  }),
  getters: {
    getTheme: state => state.theme,
  },
  actions: {
    setTheme(theme) {
      this.theme = theme
    },
  },
})
