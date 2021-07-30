<template>
  <nuxt-link
    to="/"
    aria-label="Back to top"
    class="btn-to-top fixed flex items-center px-3 py-2 text-xs md:text-sm"
    :class="[showButtonToTop ? 'bottom-4 right-4' : '-bottom-full -right-full']"
    @click.native="scrollToTop()"
  >
    Back to top
    <span
      class="iconify ml-2"
      data-icon="heroicons-outline:arrow-sm-up"
      data-inline="false"
      data-width="24px"
      data-height="24px"
    />
  </nuxt-link>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('theme', ['showButtonToTop'])
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style></style>
