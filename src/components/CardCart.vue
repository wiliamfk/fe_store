<script setup>
import { useCartStore } from '@/stores/cartStore';

const props = defineProps({
  product: {type: Object, required: true}
});
const cartStore = useCartStore();
</script>

<template>
  <div class="cr-card">
    <div class="pn-img">
      <img :src="product?.thumbnail" alt="Produto">
    </div>
    <div class="pn-section">
      <div class="pn-title">
        <p>{{ product?.title }}</p>
      </div>
      <div class="pn-content">
        <div class="pn-price">
          <p>R$ {{ product?.price.toString().replace('.', ',') }}</p>
        </div>
        <div class="pn-actions">
          <fa-icon @click="() => cartStore.updateQuantity(product?.id, false)" class="btn-rmv" icon="circle-minus" />
          <p>{{ product?.quantity }}</p>
          <fa-icon @click="() => cartStore.updateQuantity(product?.id, true)" class="btn-add" icon="circle-plus" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

p {
  margin: 0;
  padding: 0;
}

.cr-card {
  background-color: #ffffff;
  width: 100%;
  height: 6rem;
  border-radius: 5px;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.pn-img {
  /* border: red 1px solid; */
  height: 100%;
  width: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pn-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pn-section {
  /* border: yellowgreen 1px solid; */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.pn-title {
  height: 1.75rem;
  background-color: #de521f;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 0.75rem;
}

.pn-title p {
  color: #ffffff;
  font-size: 12pt;
}

.pn-content {
  height: 100%;
  display: flex;
  flex-direction: row;
}

.pn-price {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 0.75rem;
}

.pn-price p {
  color: #de521f;
  font-size: 13pt;
  font-weight: bold;
}

.pn-actions {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  padding: 0.75rem;
  align-items: end;
  justify-content: end;
}

.btn-rmv, .btn-add {
  margin: 0;
  padding: 0;
  font-size: 17pt;
  cursor: pointer;
  transition: transform 0.2s;
}

.btn-rmv:hover, .btn-add:hover {
  transform: scale(1.2);
}

.btn-rmv {
  color: #d10e0e;
}

.btn-add {
  color: #2d9e00;
}

.pn-actions p {
  font-size: 14pt;
  color: #575757;
  font-weight: bold;
}
</style>