export const state = () => ({
  isDarkTheme: true,
  showButtonToTop: false
})

export const mutations = {
  setTheme (state) {
    state.isDarkTheme = !state.isDarkTheme
  },
  setShowButtonToTop (state, value) {
    state.showButtonToTop = value
  }
}

export const actions = {
  toggleTheme ({ state, commit }) {
    commit('setTheme')
  },
  toggleButtonToTop ({ state, commit }, value) {
    commit('setShowButtonToTop', value)
  }
}
