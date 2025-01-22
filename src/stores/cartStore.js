import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useCartStore = defineStore('cart', () => {
    const cartData = JSON.parse(localStorage.getItem('cartData')) || {};
    const expiration = ref(cartData.expiration || null);

    const isCartVisible = ref(false);
    const cartItems = ref(cartData.cartItems || []);
    const totalVlr = ref(cartData.totalVlr || 0);
    const totalQtd = ref(cartData.totalQtd || 0);

    function addItem(item) {
        const existingItem = cartItems.value.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.value.push({...item, quantity: 1});
        }

        totalVlr.value += item.price;
        totalQtd.value += 1;
        updateLocalStorage();
    }

    function removeItem(itemId) {
        const index = cartItems.value.findIndex(i => i.id === itemId);

        if (index !== -1) {
            const auxItem = cartItems.value.splice(index, 1)[0];
            totalVlr.value -= auxItem.price;
            totalQtd.value -= 1;
            if (totalVlr.value <= 0) totalVlr.value = 0;
            if (totalQtd.value <= 0) totalQtd.value = 0;
            updateLocalStorage();
        }
    }

    function updateQuantity(itemId, addQtd) {
        const item = cartItems.value.find(i => i.id === itemId);
        if (item) {
            if (addQtd) {
                item.quantity += 1;
                totalVlr.value += item.price;
                totalQtd.value += 1;
            } else {
                item.quantity -= 1;
                if (item.quantity > 0) {
                    totalVlr.value -= item.price;
                    totalQtd.value -= 1;
                } else {
                    removeItem(itemId);
                }
            }
            updateLocalStorage();
        }
    }

    function checkout() {
        if (totalQtd.value > 0) {
            cartItems.value.splice(0, cartItems.value.length);
            totalVlr.value = 0;
            totalQtd.value = 0;
            isCartVisible.value = false;
            updateLocalStorage();

            alert('Compra finalizada!');
        }
    }

    function showCart(show) {
        isCartVisible.value = show;
    }

    function updateLocalStorage() {
        const now = new Date();
        now.setHours(now.getHours() + 2);
        expiration.value = now;

        localStorage.setItem('cartData', JSON.stringify({
            cartItems: cartItems.value,
            totalVlr: totalVlr.value,
            totalQtd: totalQtd.value,
            expiration: expiration.value
        }));
    }

    function checkExpiration() {
        const now = new Date();
        if (expiration.value && new Date(expiration.value) < now) {
            cartItems.value = [];
            totalQtd.value = 0;
            totalVlr.value = 0;
            expiration.value = null;
            localStorage.removeItem('cartData');
        }
    }

    checkExpiration();

    watch(cartItems, (newItems) => {
        updateLocalStorage();
    }, {deep: true});

    return {isCartVisible, cartItems, totalVlr, totalQtd, showCart, addItem, removeItem, updateQuantity, checkout};
});