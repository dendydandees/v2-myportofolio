<template>
  <article
    id="social-media"
    class="relative bg-gray-200 dark:bg-gray-800 px-4 py-10 lg:px-6 lg:py-20"
  >
    <div
      class="absolute left-0 right-0 top-0 bottom-0 mx-auto my-auto h-20 z-0 filter blur-3xl animate-pulse bg-gradient-to-r from-purple-800 dark:from-purple-600 to-yellow-800 dark:to-yellow-600 w-full md:w-1/3"
    />
    <div
      class="relative flex flex-wrap justify-center items-center mx-auto z-10 py-6 w-full md:w-8/12 lg:w-6/12 xl:w-4/12"
    >
      <a
        v-for="(socialMedia, index) in socialMediaList"
        :key="index"
        :href="socialMedia.link"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-social-media p-4 my-2 mx-2 md:mx-4"
      >
        {{ socialMedia.name }}
      </a>
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return {
      socialMediaList: [
        { name: 'Github', link: 'https://github.com/dendydandees' },
        {
          name: 'Linkedin',
          link: 'https://www.linkedin.com/in/dendy-dharmawan/'
        },
        { name: 'Email', link: 'mailto:dendydharmawanq@gmail.com' },
        { name: 'Twitter', link: 'https://twitter.com/dendydandees' },
        { name: 'Instagram', link: 'https://www.instagram.com/dendydandees/' }
      ]
    }
  }
}
</script>

<style scoped></style>
