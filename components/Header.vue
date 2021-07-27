<template>
  <header
    class="p-4 fixed top-0 bg-transparent z-20 min-w-full text-white lg:p-6"
  >
    <!-- nav for large devices -->
    <div class="container flex justify-between items-center mx-auto">
      <button
        class="transition-custom-300 font-bold link"
        @click="scrollToTop()"
      >
        Dandees
      </button>
      <button
        class="transition-custom-300 inline-block link-rounded lg:hidden"
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
      <nav class="hidden lg:inline-block">
        <button class="transition-custom-300 link" @click="scrollToTop()">
          Home
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
      class="transition-custom-300 absolute bg-gradient-to-b from-purple-600 to-purple-800 w-3/4 min-h-screen p-4 lg:p-6"
      :class="[isOpen ? 'top-0 left-0' : 'top-0 -left-full']"
    >
      <div class="flex justify-between items-center">
        <button
          class="transition-custom-300 font-bold link"
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
            <button class="transition-custom-300 link-rounded" @click="toggleTheme()">
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
              class="transition-custom-300 link text-2xl font-bold"
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
export default {
  data () {
    return {
      isOpen: true,
      isDarkTheme: true
    }
  },
  methods: {
    sideNavClick () {
      this.isOpen = !this.isOpen
    },
    scrollToTop () {
      window.scrollTo(0, 0)
    },
    toggleTheme () {
      this.isDarkTheme = !this.isDarkTheme
    }
  }
}
</script>

<style></style>
