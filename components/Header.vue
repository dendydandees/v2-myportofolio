<template>
  <header
    class="p-4 fixed top-0 z-50 min-w-full lg:p-6"
    :class="[ isIntersectingElement ? 'bg-gray-200 dark:bg-gray-800 shadow-md' : 'bg-transparent' ]"
  >
    <!-- nav for large devices -->
    <div class="container flex justify-between items-center mx-auto">
      <nuxt-link
        to="/"
        aria-label="Home"
        class="font-bold link"
        @click.native="scrollToTop()"
      >
        Dandees
      </nuxt-link>
      <button
        class="inline-block link-rounded lg:hidden"
        aria-label="Side Nav"
        @click="sideNavClick()"
      >
        <span
          class="iconify text-gray-800 dark:text-gray-200"
          data-icon="heroicons-outline:menu-alt-2"
          data-inline="false"
          data-width="24px"
          data-height="24px"
        />
      </button>
      <nav class="hidden space-x-4 lg:flex lg:items-center">
        <nuxt-link to="/" class="link" exact @click.native="scrollToTop()">
          Home
        </nuxt-link>
        <nuxt-link to="#project" class="link">
          Project
        </nuxt-link>
        <button
          class="link-rounded"
          @click="toggleTheme()"
        >
          <div v-show="isDarkTheme">
            <span
              class="iconify text-gray-800 dark:text-gray-200"
              data-icon="heroicons-outline:sun"
              data-inline="false"
              data-width="32px"
              data-height="32px"
            />
          </div>
          <div v-show="!isDarkTheme">
            <span
              class="iconify text-gray-800 dark:text-gray-200"
              data-icon="heroicons-outline:moon"
              data-inline="false"
              data-width="32px"
              data-height="32px"
            />
          </div>
        </button>
      </nav>
    </div>

    <!-- nav for mobile -->
    <div
      v-if="isOpen"
      class="absolute min-h-screen w-screen"
      :class="[
        isOpen ? 'bg-black opacity-40 top-0 left-0' : 'top-0 -left-full'
      ]"
      @click="sideNavClick()"
    />
    <div
      class="absolute bg-gradient-to-b from-yellow-400 dark:from-purple-600 to-yellow-600 dark:to-purple-800 w-3/4 min-h-screen p-4 lg:p-6"
      :class="[isOpen ? 'top-0 left-0' : 'top-0 -left-full']"
    >
      <div class="flex justify-between items-center">
        <nuxt-link
          to="/"
          aria-label="Home"
          class="font-bold link"
          @click.native="scrollToTop()"
        >
          Dandees
        </nuxt-link>
        <button
          class="link-rounded"
          aria-label="Side Nav"
          @click="sideNavClick()"
        >
          <span
            class="iconify text-gray-800 dark:text-gray-200"
            data-icon="heroicons-outline:x"
            data-inline="false"
            data-width="24px"
          />
        </button>
      </div>
      <nav class="my-10">
        <ul class="space-y-12">
          <li>
            <button
              class="link-rounded"
              aria-label="Theme"
              @click="toggleTheme()"
            >
              <div v-show="isDarkTheme">
                <span
                  class="iconify text-gray-800 dark:text-gray-200"
                  data-icon="heroicons-outline:sun"
                  data-inline="false"
                  data-width="32px"
                  data-height="32px"
                />
              </div>
              <div v-show="!isDarkTheme">
                <span
                  class="iconify text-gray-800 dark:text-gray-200"
                  data-icon="heroicons-outline:moon"
                  data-inline="false"
                  data-width="32px"
                  data-height="32px"
                />
              </div>
            </button>
          </li>
          <li>
            <nuxt-link
              to="/"
              exact
              class="link text-2xl"
              @click.native="scrollToTop()"
            >
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#project" class="link text-2xl">
              Project
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      isOpen: false,
      isIntersectingElement: false
    }
  },
  computed: {
    ...mapState('theme', ['isDarkTheme'])
  },
  mounted () {
    const socialMediaElement = document.querySelector('#social-media')
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1
    }
    const handler = (entries) => {
      if (entries[0].boundingClientRect.top <= 0) {
        this.isIntersectingElement = true
        this.toggleButtonToTop(true)
      } else {
        this.isIntersectingElement = false
        this.toggleButtonToTop(false)
      }
    }

    const observer = new IntersectionObserver(handler, options)
    observer.observe(socialMediaElement)
  },
  methods: {
    ...mapActions('theme', ['toggleTheme', 'toggleButtonToTop']),
    sideNavClick () {
      this.isOpen = !this.isOpen
    },
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style></style>
