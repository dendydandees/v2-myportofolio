<template>
  <article
    v-if="true"
    id="portofolio"
    class="bg-gray-200 dark:bg-gray-800 px-4 py-10 lg:px-6 lg:py-12"
  >
    <div class="container mx-auto">
      <!-- section title -->
      <div class="my-24">
        <h2 class="text-5xl text-gray-800 dark:text-gray-200 font-bold mb-6">
          Portofolio
        </h2>
        <p class="text-gray-700 dark:text-gray-300 w-full md:w-8/12 lg:w-6/12">
          This is a side project I'm working on. I work on this project when I get stuck, confused about what to do, and when I want to learn a tool or technology. but apart from that there are also projects that I worked on when I was taking certification, and there was also a system that I worked on when I was working on my thesis from the end of my college term.
        </p>
      </div>

      <!-- loading -->
      <LoadingFetch v-if="$fetchState.pending" />

      <!-- if error -->
      <ErrorFetch v-else-if="$fetchState.error" />

      <!-- if success -->
      <div
        v-for="project in projects"
        v-else
        :key="project.id"
        class="group relative z-20 my-24 grid grid-cols-12 gap-x-4 gap-y-10 place-items-center place-content-center rounded-lg hover:shadow-xl"
        @mouseover="hoverEvent(project.id)"
        @mouseleave="hover = null"
      >
        <div
          :class="[hover === project.id ? 'h-3/4 w-10/12' : 'h-0 w-0']"
          class="absolute left-0 right-0 top-0 bottom-0 my-auto mx-auto bg-gradient-to-tl from-yellow-600 dark:from-yellow-800 to-purple-600 dark:to-purple-800 filter blur-3xl animate-pulse opacity-30"
        />

        <div
          class="relative col-span-12 lg:col-span-5 py-4 space-y-12 px-4 md:px-6"
        >
          <div class="space-y-6">
            <div class="space-y-3">
              <div class="flex flex-wrap items-center">
                <span
                  v-for="(lang, langIndex) in project.language"
                  :key="langIndex"
                  class="p-1 bg-yellow-500 dark:bg-yellow-400 text-gray-800 text-sm text-center mr-2 my-2 rounded-md"
                >
                  {{ lang }}
                </span>
              </div>

              <h3 class="text-4xl font-bold text-gray-800 dark:text-gray-200">
                {{ project.name }}
              </h3>
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
          class="relative col-span-12 lg:col-span-7 px-6 py-4"
        >
          <img
            :src="project.image"
            :alt="project.name"
            loading="lazy"
            class="ml-auto shadow-md w-full lg:w-10/12 group-hover:transform group-hover:scale-110"
          >
        </div>
      </div>

      <!-- load more button -->
      <div v-if="showLoadButton" class="text-center">
        <button
          class="btn text-xl p-3 md:p-4 w-full md:w-auto"
          @click="setItem()"
        >
          View More Portofolio
        </button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return {
      projects: [],
      error: null,
      item: 2,
      count: 0,
      hover: null,
      showLoadButton: true
    }
  },
  async fetch () {
    try {
      const { data: projects, error, count } = await this.$supabase
        .from('projects')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false })
        .range(0, this.item)

      this.projects = projects
      this.count = count

      throw error
    } catch (error) {
      this.error = error
    }
  },
  watch: {
    async item (newItem, oldItem) {
      await this.$router.push({ name: 'index', hash: '' })
      await this.$fetch()
      await this.$router.push({ name: 'index', hash: '#portofolio' })

      if (newItem >= this.count) { this.showLoadButton = false }
    }
  },
  mounted () {
    this.subscribeProjects()
  },
  methods: {
    hoverEvent (id) {
      this.hover = id
    },
    setItem () {
      this.item += 3
    },
    subscribeProjects () {
      this.$supabase
        .from('projects')
        .on('*', (payload) => {
          this.projects = this.projects.filter(project => project.id !== payload.new.id)
          this.projects.unshift(payload.new)
        })
        .subscribe()
    }
  }
}
</script>

<style></style>
