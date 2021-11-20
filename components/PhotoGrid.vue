<template>
  <VueMasonryWall :items="items" :options="options" :ssr="{columns: 2}">
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

<script>
import VueMasonryWall from 'vue-masonry-wall'

export default {
  components: {
    VueMasonryWall
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return ({
      options: { width: 500, padding: { 2: 8, default: 16 } }
    })
  }
}
</script>
