<template>
  <Nav></Nav>
  <input type="text" v-model="bed" class="w-full h-20 border-black">
  <Body :bed="bed"></Body>

  <Footer></Footer>
</template>
<script setup>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import Body from './components/Body.vue'

import { ref,reactive } from 'vue';
const bed = ref(20)

</script>


<style scoped>

</style>
