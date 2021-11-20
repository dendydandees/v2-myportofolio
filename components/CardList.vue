<template>
  <div
    :id="`project${index}`"
    class="group relative z-20 my-24 grid grid-cols-12 gap-x-4 gap-y-10 rounded-lg border-2 border-transparent hover:shadow-xl hover:border-purple-600 dark:hover:border-purple-400"
    @mouseover="hoverEvent(project.id)"
    @mouseleave="hover = null"
  >
    <div
      :class="[hover === project.id ? 'h-3/4 w-8/12' : 'h-0 w-0']"
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

          <h3
            class="text-4xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400"
          >
            {{ project.name }}
          </h3>
          <p
            class="text-gray-600 dark:text-gray-400 group-hover:text-purple-700 dark:group-hover:text-purple-500"
          >
            {{ $moment(project.created_at).format("LL") }}
          </p>
        </div>

        <div>
          <p
            class="text-gray-600 dark:text-gray-400 group-hover:text-purple-700 dark:group-hover:text-purple-500"
          >
            {{ project.description }}
          </p>
        </div>
      </div>

      <!-- Card button -->
      <div
        class="flex flex-col items-center md:flex-row space-y-4 md:space-y-0 md:space-x-4"
      >
        <a
          v-if="project.git_url"
          :href="project.git_url"
          target="_blank"
          rel="noopener noreferrer nofollow"
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
      <nuxt-img
        :src="project.image"
        :alt="project.name"
        quality="75"
        format="webp"
        class="lg:ml-auto shadow-md w-full lg:w-10/12 group-hover:transform group-hover:scale-110"
        loading="lazy"
        width="100%"
        height="100%"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      hover: null
    }
  },
  methods: {
    hoverEvent (id) {
      this.hover = id
    }
  }
}
</script>
