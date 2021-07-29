<template>
  <main :class="[isDarkTheme ? 'dark' : '']">
    <Header />
    <Nuxt />
    <Footer />
  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
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

<style></style>
