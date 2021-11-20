<template>
  <article
    id="photography"
    ref="photography"
    class="bg-gray-200 dark:bg-gray-800 px-4 py-10 lg:px-6 lg:py-12"
  >
    <div class="container mx-auto">
      <!-- section title -->
      <div class="my-24">
        <h2 class="section-header text-left mb-6">
          Photography
        </h2>
        <p class="text-gray-700 dark:text-gray-300 w-full md:w-8/12 lg:w-6/12">
          These are some of the results of my photography shots when i was travelling. It started when I was in high school and until now I still do it. I like the flow of street, landscape, and human interest photography. The camera I use is Fujifilm Finepix S4800
        </p>
      </div>
    </div>

    <!-- loading -->
    <LoadingFetch v-if="$fetchState.pending" />

    <!-- if error -->
    <ErrorFetch v-else-if="$fetchState.error" />

    <!-- if success -->
    <template v-else>
      <div class="container mx-auto">
        <PhotoGrid :items="photography" />
      </div>
    </template>

    <!-- load more button -->
    <div v-if="showLoadButton" class="text-center my-24">
      <nuxt-link
        class="btn text-xl p-3 md:p-4 w-full md:w-auto"
        to="/photography"
      >
        View More Photography
      </nuxt-link>
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return ({
      photography: [],
      error: null,
      limit: 4,
      showLoadButton: true
    })
  },
  async fetch () {
    await this.getPhotography()
  },
  methods: {
    async getPhotography () {
      try {
        const { data, error } = await this.$supabase
          .storage
          .from('dendyportofolio')
          .list('photos', {
            limit: this.limit,
            sortBy: { column: 'created_at', order: 'desc' }
          })

        if (error) { throw error }

        this.photography = data
      } catch (error) {
        this.error = error
      }
    }
  }
}
</script>
