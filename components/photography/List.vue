<template>
  <article class="p-4 pt-40 lg:px-6 z-0 bg-gray-200 dark:bg-gray-800">
    <div class="container mx-auto">
      <h2
        class="section-header mb-14"
      >
        Photography
      </h2>
    </div>

    <!-- loading -->
    <LoadingFetch v-if="$fetchState.pending" />

    <!-- if error -->
    <ErrorFetch v-else-if="$fetchState.error" />

    <!-- if success -->
    <template v-else>
      <VueMasonryWall :items="stateOfPhotography" :options="options" :ssr="{columns: 2}">
        <template #default="{item}">
          <nuxt-img
            :src="`https://tfjgyftazzpzzndywyan.supabase.in/storage/v1/object/public/dendyportofolio/photos/${item.name}`"
            :alt="item.name"
            quality="75"
            format="webp"
            loading="lazy"
            width="100%"
            height="100%"
            class="rounded"
          />
        </template>
      </VueMasonryWall>
    </template>
  </article>
</template>

<script>
import VueMasonryWall from 'vue-masonry-wall'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    VueMasonryWall
  },
  data () {
    return ({
      options: { width: 500, padding: { 2: 8, default: 16 } }
    })
  },
  async fetch () {
    await this.getPhotography()
  },
  computed: {
    ...mapState('photography', { stateOfPhotography: 'photography' })
  },
  methods: {
    ...mapActions('photography', ['getPhotography'])
  }
}
</script>
