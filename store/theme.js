export const state = () => ({
  isDarkTheme: true
})

export const mutations = {
  setTheme (state) {
    state.isDarkTheme = !state.isDarkTheme
  }
}

export const actions = {
  toggleTheme ({ state, commit }) {
    commit('setTheme')
  }
}
