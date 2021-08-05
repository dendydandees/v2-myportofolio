export const state = () => ({
  projects: [],
  error: null
})

export const mutations = {
  setProjects (state, value) {
    state.projects = value
  },
  setError (state, value) {
    state.error = value
  }
}

export const actions = {
  async getProjects ({ state, commit }, value) {
    try {
      const { data: projects, error } = await this.$supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })
        .range(0, value)

      commit('setProjects', projects)
      throw error
    } catch (error) {
      commit('setError', error)
    }
  }
}
