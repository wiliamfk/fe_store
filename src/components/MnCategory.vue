<script setup>
import { useProductsStore } from '@/stores/productsStore';
import { onMounted } from 'vue';

const productsStore = useProductsStore();

onMounted(async () => {
  await productsStore.loadCategoryList();
});

function selectCategory(category) {
  productsStore.selectCategory(category);
}

function capitalize(word) {
  if (!word) return '';
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
</script>

<template>
  <div v-if="productsStore.mnCatVisible" class="backdrop" @click="productsStore.toggleCategoryMenu"></div>
  <transition name="mn-menu">
    <div v-if="productsStore.mnCatVisible" class="menu">
      <ul>
        <li @click="() => selectCategory()">Todos</li>
        <hr>
        <li v-for="(category, index) in productsStore.categoryList" :key="index" @click="() => selectCategory(category)">{{ capitalize(category) }}</li>
      </ul>
    </div>
  </transition>
</template>

<style scoped>
.backdrop {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 199;
}

.menu {
  position: fixed;
  top: 9vh;
  left: 25vw;
  background-color: #787878;
  color: #ffffff;
  height: 46vh;
  z-index: 200;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.35);
}

.menu::-webkit-scrollbar {
  width: 7px;
}

.menu::-webkit-scrollbar-track {
  background: #959595;
  border-radius: 10px;
}

.menu::-webkit-scrollbar-thumb {
  background-color: #bfbfbf;
  border-radius: 10px;
}

.menu ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.menu li {
  padding: 0.25rem 1rem;
  cursor: pointer;
  font-size: 12pt;
}

.menu li:hover {
  background-color: #575757;
  font-weight: bold;
}

.menu hr {
  padding: 0;
  margin: 0;
  border-color: #ababab;
}

.mn-menu-enter-active,
.mn-menu-leave-active {
  transition: all 0.15s ease;
}

.mn-menu-enter-from,
.mn-menu-leave-to {
  opacity: 0;
  transform: translateY(-8%);
}
</style>