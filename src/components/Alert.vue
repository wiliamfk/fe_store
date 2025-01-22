<script setup>
import { useAlertStore } from '@/stores/alertStore';
const alertStore = useAlertStore();
const alerts = alertStore.alerts;
</script>

<template>
  <TransitionGroup name="alert" tag="div" class="alert-container">
    <div v-for="alert in alertStore.alerts" :key="alert.id" class="alert">
      {{ alert.message }}
    </div>
  </TransitionGroup>
</template>

<style scoped>
.alert-container {
  position: fixed;
  top: 4rem;
  right: 3rem;
  display: flex;
  flex-direction: column-reverse;
  gap: 0.5rem;
}

.alert {
  background-color: #575757;
  color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}

.alert-enter-active,
.alert-leave-active {
  transition: all 0.3s ease-in-out;
}

.alert-enter-from,
.alert-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>