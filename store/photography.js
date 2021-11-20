export const state = () => ({
  settings: {
    bucketName: 'dendyportofolio',
    folder: 'photos'
  },
  photography: []
})

export const mutations = {
  setPhotography (state, val) {
    state.photography = val
  }
}

export const actions = {
  async getPhotography ({ state, commit }) {
    try {
      const bucketName = state.settings.bucketName
      const folder = state.settings.folder
      const { data, error } = await this.$supabase
        .storage
        .from(bucketName)
        .list(folder, {
          sortBy: { column: 'created_at', order: 'desc' }
        })

      if (error) { throw error }

      commit('setPhotography', data)
      return data
    } catch (error) {
      return error
    }
  }
}
