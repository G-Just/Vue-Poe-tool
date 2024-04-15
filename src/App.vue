<template>
  <main class="grid h-screen grid-cols-6 bg-gray-300">
    <Navbar />
    <router-view />
  </main>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: { Navbar }
}
</script>
