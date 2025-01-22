<script setup>
import { computed, onMounted } from 'vue';
import { useProductsStore } from '@/stores/productsStore';
import CardProd from '@/components/CardProd.vue';

const productsStore = useProductsStore();

onMounted(async () => {
  await productsStore.loadProducts();
});

const filteredProducts = computed(() => productsStore.filteredProducts);
</script>

<template>
  <main>
    <div class="content">
      <CardProd  v-for="(prod, i) in filteredProducts" :key="i" :product="prod" />
    </div>
  </main>
</template>

<style scoped>
.content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 30rem;
  gap: 1.5rem;
  width: 100%;
  padding: 0.75rem 0.5rem;
}
</style>
