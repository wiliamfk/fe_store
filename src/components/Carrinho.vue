<script setup>
import { useCartStore } from '@/stores/cartStore';
import CardCart from './CardCart.vue';
import { useRouter } from 'vue-router';

const cartStore = useCartStore();

const closeCart = () => {
  cartStore.showCart(false);
};

const router = useRouter();
const goToHome = () => {
  closeCart();
  router.push('/');
};
</script>

<template>
  <transition name="fade">
    <div @click="closeCart" v-if="cartStore.isCartVisible" class="backdrop"></div>
  </transition>
  <transition name="slide">
    <div v-if="cartStore.isCartVisible" class="cart-modal">
      <div class="c-header">
        <div class="rotulo">
          <fa-icon class="fa-icon" icon="cart-shopping" />
          <p class="title">Meu Carrinho</p>
        </div>
        <div class="pn-close">
          <fa-icon @click="closeCart" class="btn-close" icon="circle-xmark" />
        </div>
      </div>
      <div class="c-section">
        <div class="pn-produtos">
          <transition-group name="tr-cart" tag="div" class="cart-items-container">
            <CardCart v-for="(item, i) in cartStore.cartItems" :key="item.id" :product="item" />
          </transition-group>
        </div>
        <button @click="goToHome" class="btn-add">Adicionar Mais Produtos</button>
      </div>
      <div class="c-footer">
        <div class="fl">
          <p>{{ cartStore.totalQtd }} itens</p>
          <p>R$ {{ cartStore.totalVlr.toFixed(2).replace('.', ',') }}</p>
        </div>
        <div class="fr">
          <button @click="() => cartStore.checkout()" class="btn-finalizar">Finalizar</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 199;
}

.cart-modal {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 31vw;
  height: 100%;
  background-color: #dcdcdc;
  top: 0;
  right: 0;
  justify-content: start;
  z-index: 200;
}

.c-header {
  background-color: #ffffff;
  height: 3.5rem;
  width: 100%;
  border-bottom: #787878 1px solid;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
}

.rotulo {
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.title,
.fa-icon {
  color: #575757;
  font-size: 14pt;
}

.pn-close {
  width: 3.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn-close {
  padding: 0;
  margin: 0;
  font-size: 28pt;
  color: #787878;
  cursor: pointer;
}

.btn-close:hover {
  color: #575757;
}

.c-section {
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 0.75rem;
  gap: 0.75rem;
  overflow-y: auto;
}

.c-section::-webkit-scrollbar {
  width: 8px;
}

.c-section::-webkit-scrollbar-track {
  background: #a9a9a9;
  border-radius: 10px;
}

.c-section::-webkit-scrollbar-thumb {
  background-color: #878787;
  border-radius: 10px;
}

.pn-produtos {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 0.75rem;
}

.cart-items-container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

.tr-cart-enter-active,
.tr-cart-leave-active {
  transition: all 0.3s ease;
}

.tr-cart-enter-from,
.tr-cart-leave-to {
  opacity: 0;
  transform: translateX(50%);
}

.btn-add {
  width: 100%;
  padding: 0.25rem;
  border-radius: 50px;
  border: none;
  background-color: #787878;
  color: #ffffff;
  font-size: 12pt;
  cursor: pointer;
}

.btn-add:hover {
  background-color: #575757;
}

.c-footer {
  width: 100%;
  height: 4.5rem;
  background-color: #787878;
  box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: row;
}

.c-footer p {
  color: #ffffff;
  font-size: 12pt;
  margin: 0;
  padding: 0;
}

.fl,
.fr {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0.75rem;
  gap: 0.5rem;
}

.btn-finalizar {
  width: 75%;
  border: none;
  background-color: #ffffff;
  color: #575757;
  padding: 0.25rem;
  font-size: 12pt;
  border-radius: 40px;
  cursor: pointer;
}

.btn-finalizar:hover {
  box-shadow: inset 0px 0px 4px 1px rgba(0, 0, 0, 0.35);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>