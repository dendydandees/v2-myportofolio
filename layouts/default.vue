<template>
  <main :class="[isDarkTheme ? 'dark' : '']">
    <Header />
    <Nuxt keep-alive />
    <Footer />

    <cursor-fx
      :config="baseCursor"
      :color="isDarkTheme ? '#818CF8' : '#4F46E5'"
      :color-hover="isDarkTheme ? '#4F46E5' : '#818CF8'"
      delay="30"
      outside-size="80px"
      inside-size="16px"
    />
  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      baseCursor: {
        lerps: {
          dot: 1,
          circle: 1,
          custom: 1,
          opacity: 0.5
        },
        scale: {
          ratio: 0.01,
          min: 0.7,
          max: 1
        },
        opacity: 0.1
      }
    }
  },
  computed: {
    ...mapState('theme', ['isDarkTheme'])
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  }
}
</script>

<style>
.nuxt-link-active {
  font-weight: bold;
}
.nuxt-link-exact-active {
  font-weight: bold;
}
</style>
