<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import PgFooter from './components/PgFooter.vue';
import Carrinho from './components/Carrinho.vue';
import MnCategory from './components/MnCategory.vue';
import Alert from './components/Alert.vue';
</script>

<template>
  <div class="container">
    <Navbar />
    <div class="main">
      <div class="router">
        <RouterView />
      </div>
      <PgFooter />
    </div>
    <Carrinho />
    <MnCategory />
    <Alert />
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    min-height: 99vh;
  }

  .main {
    /* border: red 1px solid; */
    flex-grow: 1;
    max-height: 91.5vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .router {
    flex-grow: 1;
    min-height: 83vh;
    padding: 0.5rem 12vw;
  }
</style>
