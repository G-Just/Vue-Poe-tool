<template>
  <div
    class="sticky flex flex-col items-center w-full h-screen py-10 border-r-8 border-teal-700 bg-teal-950"
  >
    <Logo />
    <ul class="flex flex-col gap-8 mt-20 text-2xl">
      <li class="flex gap-2 text-white rounded-lg underline-offset-8 hover:underline">
        <img class="w-8 h-8" src="../assets/price.svg" alt="" /><a href="#">Prices</a>
      </li>
      <li class="flex gap-2 text-white rounded-lg underline-offset-8 hover:underline">
        <img class="w-8 h-8" src="../assets/calc.svg" alt="" /><a href="#">Calculator</a>
      </li>
      <li class="flex gap-2 text-white rounded-lg underline-offset-8 hover:underline">
        <img class="w-8 h-8" src="../assets/tracker.svg" alt="" /><a href="#">Tracker</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Logo from './Logo.vue'

export default {
  name: 'Nav-bar',
  components: { Logo }
}
</script>
