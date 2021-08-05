<template>
  <div
    v-if="true"
    id="project"
    class="bg-gray-200 dark:bg-gray-800 px-4 py-10 lg:px-6 lg:py-12"
  >
    <div
      v-for="project in projects"
      :key="project.id"
      class="group relative z-20 my-24 grid grid-cols-12 gap-x-4 gap-y-10 place-items-center rounded-lg hover:shadow-xl"
      @mouseover="hoverEvent(project.id)"
      @mouseleave="hover = null"
    >
      <div
        :class="[hover === project.id ? 'h-3/4 w-10/12' : 'h-0 w-0']"
        class="absolute left-0 right-0 top-0 bottom-0 my-auto mx-auto bg-gradient-to-tl from-yellow-600 dark:from-yellow-800 to-purple-600 dark:to-purple-800 filter blur-3xl animate-pulse opacity-30"
      />

      <div
        class="relative col-span-12 lg:col-span-4 py-4 space-y-12 px-4 md:px-6"
      >
        <div class="space-y-6">
          <div class="space-y-3">
            <div>
              <span
                v-for="(lang, langIndex) in project.language"
                :key="langIndex"
                class="p-1 bg-yellow-500 dark:bg-yellow-400 text-gray-800 text-sm mr-2 my-2 rounded-md"
              >
                {{ lang }}
              </span>
            </div>

            <h2 class="text-4xl font-bold text-gray-800 dark:text-gray-200">
              {{ project.name }}
            </h2>
            <p class="text-gray-600 dark:text-gray-400">
              {{ $moment(project.created_at).format("LL") }}
            </p>
          </div>

          <div>
            <p class="text-gray-600 dark:text-gray-400">
              {{ project.description }}
            </p>
          </div>
        </div>

        <div
          class="flex flex-col items-center md:flex-row space-y-4 md:space-y-0 md:space-x-4"
        >
          <a
            :href="project.git_url"
            target="_blank"
            rel="noopener noreferrer"
            class="btn text-lg p-2 md:p-3 w-full md:w-auto"
          >
            Read More
          </a>
          <a
            v-if="project.homepage"
            :href="project.homepage"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-outline text-lg p-2 md:p-3 w-full md:w-auto"
          >
            Visit Website
          </a>
        </div>
      </div>

      <div
        v-if="project.image != null"
        class="relative col-span-12 lg:col-span-8 px-6 py-4"
      >
        <img
          :src="project.image"
          :alt="project.name"
          loading="lazy"
          class="mx-auto shadow-md w-full lg:w-3/4 group-hover:transform group-hover:scale-110"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projects: [],
      error: null,
      hover: null
    }
  },
  async fetch () {
    const { data: projects, error } = await this.$supabase
      .from('projects')
      .select('*')
      .order('created_at')
      .range(0, 9)

    this.projects = projects
    this.error = error
  },
  methods: {
    hoverEvent (id) {
      this.hover = id
    }
  }
}
</script>

<style></style>
