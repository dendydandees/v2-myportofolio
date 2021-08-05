<template>
  <div class="text-center space-y-8">
    <p class="text-gray-800 dark:text-gray-200 text-xl">
      Failed to get data :(
    </p>
    <button class="btn text-xl p-3 md:p-4 w-full md:w-auto" @click="$fetch">
      Refresh
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
