<template>
  <footer class="p-4 z-20 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 lg:p-6">
    <div class="container mx-auto text-center">
      <span>Design with <span class="animate-pulse">💜</span> in <b>Jakarta</b></span>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('theme', ['isDarkTheme'])
  }
}
</script>

<style>

</style>
