<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/stores/cartStore';
import { useProductsStore } from '@/stores/productsStore';

const searchQuery = ref('');
const cartStore = useCartStore();
const productsStore = useProductsStore();

function updateSearchQuery() {
  productsStore.setSearchQuery(searchQuery.value);
}
</script>

<template>
  <div class="header">
    <div class="navbar">
      <div class="nav">
        <router-link to="/"><fa-icon class="fa-icon icon-logo" icon="bag-shopping"></fa-icon></router-link>
        <div class="pn-search">
          <input class="i-text" type="text" placeholder="Busca" v-model="searchQuery" @input="updateSearchQuery">
          <fa-icon class="fa-icon icon-sm" icon="magnifying-glass" />
        </div>
        <router-link to="/about"><fa-icon class="fa-icon" icon="circle-question" /></router-link>
        <div class="cart-container">
          <fa-icon @click="() => cartStore.showCart(true)" class="fa-icon" icon="cart-shopping" />
            <span v-if="cartStore.totalQtd > 0" class="cart-count">{{ cartStore.totalQtd }}</span>
        </div>        
      </div>
      <div class="menu">
        <ul class="l-mn">
          <li @click="productsStore.toggleCategoryMenu">Categorias <fa-icon class="icon-li" icon="chevron-down" /></li>
          <li>Marcas <fa-icon class="icon-li" icon="chevron-down" /></li>
          <li>Promoções</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  height: 8.5vh;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-bottom: #767676 1px solid;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.35);
}

.navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 0 12vw;
}

.nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  height: 65%;
}

.pn-search {
  border: #898989 1px solid;
  padding: 0.35rem 1rem;
  margin: 0 3rem;
  border-radius: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  box-shadow: inset 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
}

.i-text {
  width: 100%;
  font-size: 12pt;
  border: none;
  outline: none;
  color: #575757;
}

.cart-container {
  position: relative;
  display: flex;
  align-items: center;
}

.cart-count {
  position: absolute;
  top: -0.35rem;
  right: -0.35rem;
  color: #ffffff;
  background-color: #de521f;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 9pt;
  font-weight: bold;
}

.menu {
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  padding-top: 0.25rem;
}

.l-mn {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: #767676;
  width: 100%;
  gap: 5rem;
}

.l-mn li:hover {
  text-decoration: underline;
  cursor: pointer;
  color: #676767;
}

.fa-icon {
  font-size: 25pt;
  color: #787878;
}

.icon-sm {
  font-size: 14pt;
}

.icon-logo {
  color: #de521f;
}

.fa-icon:hover {
  cursor: pointer;
  color: #676767;
}

.icon-logo:hover {
  color: #de521f;
}

.icon-li {
  color: #767676;
  font-size: 11pt;
}
</style>