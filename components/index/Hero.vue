<template>
  <article
    id="home"
    class="p-4 min-h-screen bg-gray-200 dark:bg-gray-800 lg:p-6 z-0"
  >
    <div class="absolute top-0 left-0 min-h-screen w-full bg-gradient-to-tl from-yellow-500 dark:from-yellow-600 to-purple-500 dark:to-purple-600 opacity-80 filter blur-3xl" />
    <div class="relative container pt-20 mx-auto space-y-6 z-20">
      <div class="text-center text-gray-800 dark:text-gray-200">
        <p class="mb-2">
          Hello there <span class="hand-emoji">👋</span>, I'm
        </p>
        <h1
          class="mb-6 text-4xl mx-auto font-bold lg:text-7xl lg:w-1/2 lg:mb-8"
        >
          Dendy Dharmawan
        </h1>
        <div
          class="mx-auto rounded-full p-2 w-28 h-28 bg-gray-200 dark:bg-gray-800"
        >
          <img
            src="~/assets/img/dendy_pp.jpg"
            alt=""
            class="hand-emoji h-full w-full rounded-full object-cover object-center"
            loading="lazy"
            width="100%"
            height="100%"
          >
        </div>
      </div>
      <div
        class="bubble relative p-4 mx-auto bg-gray-200 dark:bg-gray-800 rounded-xl md:w-1/2 lg:p-6 text-gray-800 dark:text-gray-200"
        :style="bubbleStyle"
      >
        <p>
          I am a Front-End Web Developer from Jakarta, Indonesia. In love with a
          websites, technology, design, and photography. Therefore I like to
          explain things with words, codes and photosets.
        </p>
      </div>
    </div>
  </article>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      bubbleStyle: {
        '--bg-color': '#1f2937'
      }
    }
  },
  computed: {
    ...mapState('theme', ['isDarkTheme'])
  },
  watch: {
    isDarkTheme (newTheme, oldTheme) {
      if (!newTheme) {
        return (this.bubbleStyle = {
          '--bg-color': '#e5e7eb'
        })
      }
      return (this.bubbleStyle = {
        '--bg-color': '#1f2937'
      })
    }
  },
  mounted () {
    if (!this.isDarkTheme) {
      return (this.bubbleStyle = {
        '--bg-color': '#e5e7eb'
      })
    }
    return (this.bubbleStyle = {
      '--bg-color': '#1f2937'
    })
  }
}
</script>

<style scoped>
@keyframes handshake {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(-20deg);
  }
  20% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(-20deg);
  }
  40% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.hand-emoji {
  display: inline-block;
  animation: handshake 1s infinite;
}

.bubble:before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 0;
  height: 0;
  border: 1rem solid transparent;
  border-bottom-color: var(--bg-color);
  border-top: 0;
  margin-left: -1rem;
  margin-top: -1rem;
}
</style>
