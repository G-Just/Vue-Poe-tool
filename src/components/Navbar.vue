<template>
  <div class="flex flex-col items-center w-full h-screen py-0 lg:py-10 bg-slate-800">
    <Logo class="hidden lg:flex" />

    <!-- Default UL -->
    <ul class="flex-col hidden gap-8 mt-20 text-2xl lg:flex">
      <li
        class="flex gap-2 text-white rounded-lg hover:text-gray-400 underline-offset-8 hover:underline"
      >
        <img class="w-8 h-8" src="../assets/price.svg" alt="" /><a href="/">Prices</a>
      </li>
      <li
        class="flex gap-2 text-white rounded-lg hover:text-gray-400 underline-offset-8 hover:underline"
      >
        <img class="w-8 h-8" src="../assets/calc.svg" alt="" /><a href="/calculator">Calculator</a>
      </li>
      <li
        class="flex gap-2 text-white rounded-lg hover:text-gray-400 underline-offset-8 hover:underline"
      >
        <img class="w-8 h-8" src="../assets/tracker.svg" alt="" /><a href="/tracker">Tracker</a>
      </li>
    </ul>

    <button class="flex pt-10 lg:hidden" @click="navbarExpand()">
      <img class="w-10 h-10" src="../assets/hamburger.svg" alt="Hamburger-button" />
    </button>
  </div>
</template>

<script>
import Logo from './Logo.vue'

export default {
  name: 'Nav-bar',
  components: { Logo },
  methods: {
    navbarExpand() {
      const menu = document.getElementById('responsive')
      menu.classList.contains('hidden')
        ? (menu.classList.remove('hidden'), menu.classList.add('translate-x-0'))
        : menu.classList.add('hidden')
    }
  }
}
</script>
