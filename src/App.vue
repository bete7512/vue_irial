<template>
  <Nav>
  </Nav>
<Body>
  <router-view></router-view>
</Body>
  <Footer></Footer>
</template>
<script setup>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import Body from './components/Body.vue'

import { ref,reactive } from 'vue';

</script>


<style scoped>

</style>
