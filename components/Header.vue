<template>
  <header
    class="p-4 fixed top-0 bg-transparent z-20 min-w-full text-white lg:p-6"
  >
    <!-- nav for large devices -->
    <div class="container flex justify-between items-center mx-auto">
      <button
        class="font-bold link"
        @click="scrollToTop()"
      >
        Dandees
      </button>
      <button
        class="inline-block link-rounded lg:hidden"
        aria-label="Side Nav"
        @click="sideNavClick()"
      >
        <span
          class="iconify"
          data-icon="heroicons-outline:menu-alt-2"
          data-inline="false"
          style="color: #fff;"
          data-width="24px"
          data-height="24px"
        />
      </button>
      <nav class="hidden space-x-3 lg:flex lg:items-center">
        <button class="link" @click="scrollToTop()">
          Home
        </button>
        <button
          class="link-rounded"
          @click="toggleTheme()"
        >
          <div v-show="isDarkTheme">
            <span
              class="iconify"
              data-icon="heroicons-outline:sun"
              data-inline="false"
              style="color: #fff;"
              data-width="32px"
              data-height="32px"
            />
          </div>
          <div v-show="!isDarkTheme">
            <span
              class="iconify"
              data-icon="heroicons-outline:moon"
              data-inline="false"
              style="color: #fff;"
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
      class="absolute bg-gradient-to-b from-yellow-500 dark:from-purple-600 to-yellow-700 dark:to-purple-800 w-3/4 min-h-screen p-4 lg:p-6"
      :class="[isOpen ? 'top-0 left-0' : 'top-0 -left-full']"
    >
      <div class="flex justify-between items-center">
        <button
          class="font-bold link"
          @click="scrollToTop()"
        >
          Dandees
        </button>
        <button
          class="link-rounded"
          aria-label="Side Nav"
          @click="sideNavClick()"
        >
          <span
            class="iconify"
            data-icon="heroicons-outline:x"
            data-inline="false"
            style="color: #fff;"
            data-width="24px"
          />
        </button>
      </div>
      <nav class="my-10">
        <ul class="space-y-8">
          <li>
            <button
              class="link-rounded"
              @click="toggleTheme()"
            >
              <div v-show="isDarkTheme">
                <span
                  class="iconify"
                  data-icon="heroicons-outline:sun"
                  data-inline="false"
                  style="color: #fff;"
                  data-width="32px"
                  data-height="32px"
                />
              </div>
              <div v-show="!isDarkTheme">
                <span
                  class="iconify"
                  data-icon="heroicons-outline:moon"
                  data-inline="false"
                  style="color: #fff;"
                  data-width="32px"
                  data-height="32px"
                />
              </div>
            </button>
          </li>
          <li>
            <button
              class="link text-2xl font-bold"
              @click="scrollToTop()"
            >
              Home
            </button>
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
      isOpen: false
    }
  },
  computed: {
    ...mapState('theme', ['isDarkTheme'])
  },
  methods: {
    ...mapActions('theme', ['toggleTheme']),
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
