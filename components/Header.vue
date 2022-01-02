<template>
  <header
    id="header"
    class="p-4 fixed top-0 z-50 min-w-full lg:p-6"
    :class="[
      $route.name !== 'index'
        ? 'bg-gray-200 dark:bg-gray-800 shadow-md'
        : isIntersectingElement
          ? 'bg-gray-200 dark:bg-gray-800 shadow-md'
          : 'bg-transparent'
    ]"
  >
    <!-- nav for large devices -->
    <div class="container flex justify-between items-center mx-auto">
      <nuxt-link
        :to="link.home"
        aria-label="Home"
        class="font-bold link"
        @click.native="scrollToTop()"
      >
        Dandees
      </nuxt-link>
      <client-only>
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
      </client-only>

      <nav class="hidden space-x-4 lg:flex lg:items-center">
        <nuxt-link
          :to="link.home"
          class="link"
          exact
          @click.native="scrollToTop()"
        >
          Home
        </nuxt-link>
        <nuxt-link :to="link.portofolio" class="link">
          Portofolio
        </nuxt-link>
        <nuxt-link :to="link.photography" class="link">
          Photography
        </nuxt-link>
        <a
          :href="link.resume"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-resume-large p-2"
        >
          Resume
        </a>
        <client-only>
          <button class="link-rounded" @click="toggleTheme()">
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
        </client-only>
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
          :to="link.home"
          aria-label="Home"
          class="font-bold link"
          @click.native="scrollToTop()"
        >
          Dandees
        </nuxt-link>
        <client-only>
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
        </client-only>
      </div>
      <nav class="my-10">
        <ul class="space-y-12">
          <li>
            <client-only>
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
            </client-only>
          </li>
          <li>
            <nuxt-link
              :to="link.home"
              exact
              class="link text-2xl"
              @click.native="scrollToTop()"
            >
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="link.portofolio" class="link text-2xl">
              Portofolio
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="link.photography" class="link text-2xl">
              Photography
            </nuxt-link>
          </li>
          <li>
            <a
              :href="link.resume"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-resume dark:btn-resume-dark p-2 text-2xl w-full block"
            >
              Resume
            </a>
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
      isIntersectingElement: false,
      link: {
        home: '/',
        portofolio: '/portofolio',
        photography: '/photography',
        resume:
          'https://tfjgyftazzpzzndywyan.supabase.in/storage/v1/object/public/dendyportofolio/cv/Resume-Dendy-Dharmawan.pdf'
      }
    }
  },
  computed: {
    ...mapState('theme', ['isDarkTheme'])
  },
  mounted () {
    if (this.$route.name === 'index') {
      this.intersectingHeader()
    }
  },
  methods: {
    ...mapActions('theme', ['toggleTheme', 'toggleButtonToTop']),
    sideNavClick () {
      this.isOpen = !this.isOpen
    },
    scrollToTop () {
      window.scrollTo(0, 0)
    },
    intersectingHeader () {
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
    }
  }
}
</script>

<style></style>
