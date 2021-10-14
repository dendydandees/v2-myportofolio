<template>
  <article class="p-4 pt-28 lg:px-6 z-0 bg-gray-200 dark:bg-gray-800">
    <div class="container mx-auto">
      <h2
        class="text-5xl text-center text-gray-800 dark:text-gray-200 font-bold mb-14"
      >
        Portofolio
      </h2>

      <!-- loading -->
      <LoadingFetch v-if="$fetchState.pending" />

      <!-- if error -->
      <ErrorFetch v-else-if="$fetchState.error" />

      <!-- if success -->
      <template v-for="(project, index) in projects" v-else>
        <div :key="project.id">
          <CardList :project="project" :index="index" />
        </div>
      </template>
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return {
      projects: [],
      error: null
    }
  },
  async fetch () {
    await this.getAllProject()
  },
  methods: {
    async getAllProject () {
      try {
        const { data, error } = await this.$supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) {
          throw error
        }

        this.projects = data
      } catch (error) {
        this.error = error
      }
    }
  }
}
</script>
