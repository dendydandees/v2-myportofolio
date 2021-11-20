<template>
  <article
    id="portofolio"
    ref="portofolio"
    class="bg-gray-200 dark:bg-gray-800 px-4 py-10 lg:px-6 lg:py-12"
  >
    <div class="container mx-auto">
      <!-- section title -->
      <div class="my-24">
        <h2 class="section-header text-left mb-6">
          Portofolio
        </h2>
        <p class="text-gray-700 dark:text-gray-300 w-full md:w-8/12 lg:w-6/12">
          This is a side project I'm working on. I work on this project when I
          get stuck, confused about what to do, and when I want to learn a tool
          or technology. but apart from that there are also projects that I
          worked on when I was taking certification, and there was also a system
          that I worked on when I was working on my thesis from the end of my
          college term.
        </p>
      </div>

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

      <!-- load more button -->
      <div v-if="showLoadButton" class="text-center my-24">
        <!-- <button
          class="btn text-xl p-3 md:p-4 w-full md:w-auto"
          @click="setItem()"
        >
          View More Portofolio
        </button> -->
        <nuxt-link
          class="btn text-xl p-3 md:p-4 w-full md:w-auto"
          to="/portofolio"
        >
          View More Portofolio
        </nuxt-link>
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
      showLoadButton: true
    }
  },
  async fetch () {
    await this.getProjects()
  },
  // watch: {
  //   async item (newItem, oldItem) {
  //     await this.$fetch()
  //     // await this.$refs.portofolio.scrollIntoView()
  //     const scrollTo = document.querySelector(`#project${this.item - 2}`)
  //     await scrollTo.scrollIntoView()

  //     if (newItem >= this.count) {
  //       this.showLoadButton = false
  //     }
  //   }
  // },
  mounted () {
    this.subscribeProjects()
    // this.intersectingFooter()
  },
  methods: {
    // setItem () {
    //   this.item += 3
    // },
    async getProjects () {
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
    subscribeProjects () {
      this.$supabase
        .from('projects')
        .on('*', (payload) => {
          this.projects = this.projects.filter(
            project => project.id !== payload.new.id
          )
          this.projects.unshift(payload.new)
        })
        .subscribe()
    }
    // intersectingFooter () {
    //   const footer = document.querySelector('#footer')
    //   const options = {
    //     root: null,
    //     rootMargin: '0px'
    //   }
    //   const handler = (entries) => {
    //     if (entries[0].isIntersecting && this.showLoadButton) {
    //       this.setItem()
    //     }
    //   }

    //   const observer = new IntersectionObserver(handler, options)
    //   observer.observe(footer)
    // }
  }
}
</script>
