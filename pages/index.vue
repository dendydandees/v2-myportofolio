<template>
  <section>
    <article
      id="home"
      class="p-4 min-h-screen bg-gradient-to-tl from-yellow-500 to-purple-500 lg:p-6 z-0"
    >
      <div class="relative container pt-20 mx-auto space-y-6 z-10 text-white">
        <div class="text-center">
          <p class="mb-2">
            Hello there <span class="hand-emoji">👋</span>, I'm
          </p>
          <h1 class="mb-6 text-4xl mx-auto font-bold lg:text-7xl lg:w-1/2 lg:mb-8">
            Dendy Dharmawan
          </h1>
          <button class="bg-gray-800 rounded-full p-2 w-28 h-28">
            <img src="~/assets/img/dendy_pp.jpg" alt="" class="hand-emoji h-full w-full rounded-full object-cover object-center" loading="lazy">
          </button>
        </div>
        <div
          class="bubble relative p-4 mx-auto bg-gray-800 rounded-xl md:w-1/2 lg:p-6"
        >
          <p>
            I am a Front-End Web Developer from Jakarta, Indonesia. In love with
            building a websites, slicing designs into code, making them user
            friendly, and also talk about politics 🤭.
          </p>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {}
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
  border-bottom-color: rgb(31, 41, 55);
  border-top: 0;
  margin-left: -1rem;
  margin-top: -1rem;
}
</style>
