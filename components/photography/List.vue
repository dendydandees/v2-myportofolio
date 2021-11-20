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
      <div class="container mx-auto">
        <PhotoGrid :items="stateOfPhotography" />
      </div>
    </template>
  </article>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
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
