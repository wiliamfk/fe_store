import { defineStore } from "pinia";
import { ref } from "vue";

export const useAlertStore = defineStore('alert', () => {
    const alerts = ref([]);

    const addAlert = (message) => {
        const id = Date.now();
        alerts.value.push({ id, message });
        setTimeout(() => {
            removeAlert(id);
        }, 2000);
        console.log(alerts.value);
    };

    const removeAlert = (id) => {
        alerts.value = alerts.value.filter(alert => alert.id !== id);
        console.log(alerts.value);
    };

    return { alerts, addAlert, removeAlert };
});