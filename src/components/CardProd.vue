<script setup>
import { useCartStore } from '@/stores/cartStore';
import { useAlertStore } from '@/stores/alertStore';

const props = defineProps({
  product: {type: Object, required: true}
});
const cartStore = useCartStore();
const alertStore = useAlertStore();

function addProduct() {
  cartStore.addItem(props.product);
  alertStore.addAlert('Produto adicionado ao carrinho!');
}
</script>

<template>
  <div class="card">
    <div class="pn-img">
      <img class="thumbnail" :src="product.thumbnail" alt="product">
    </div>
    <div class="pn-content">
      <h5>{{ product.title }}</h5>
      <div class="pn-info">
        <p>{{ product.description }}</p>
        <p class="vlr">R$ {{ product.price.toString().replace('.', ',') }}</p>
      </div>
    </div>
    <div @click="addProduct" class="pn-footer">
      <p><fa-icon class="fa-icon" icon="cart-shopping" /> Add ao Carrinho</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.pn-img {
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pn-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.pn-content h5 {
  text-align: center;
  background-color: #de521f;
  color: #ffffff;
  padding: 0.5rem;
  margin: 0;
  font-size: 12pt;
}

.pn-info {
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  gap: 1.5rem;
}

.pn-info p {
  margin: 0;
  text-align: justify;
  color: #545454;
  font-size: 11pt;
}

.vlr {
  color: #de521f !important;
  font-size: 13pt !important;
  font-weight: bold;
}

.pn-footer {
  height: 2.5rem;
  background-color: #545454;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: #ffffff;
  cursor: pointer;
}

.pn-footer p {
  font-size: 12pt;
  transition: font-size 0.2s;
}

.pn-footer:hover p {
  font-size: 13pt;
  cursor: pointer;
  transition: font-size 0.2s;
}
</style>