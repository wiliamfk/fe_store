import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const useProductsStore = defineStore('productsStore', () => {
    const mnCatVisible = ref(false);
    const categoryList = ref([]);
    const products = ref([]);
    const selectedCat = ref('');
    const searchQuery = ref('');

    const loadProducts = async () => {
        try {
            const resp = await axios.get('https://dummyjson.com/products');
            products.value = resp.data.products;
        } catch (error) {
            console.error('Erro ao carregar os produtos. ' + error);
        }
    };

    const loadCategoryList = async () => {
        try {
            const resp = await axios.get('https://dummyjson.com/products/category-list');
            categoryList.value = resp.data;
        } catch (error) {
            
        }
    };

    const selectCategory = (category) => {
        selectedCat.value = category;
        mnCatVisible.value = false;
    };

    const toggleCategoryMenu = () => {
        mnCatVisible.value = !mnCatVisible.value;
    };

    const setSearchQuery = (query) => {
        searchQuery.value = query;
    };

    const filteredProducts = computed(() => {
        let prods = products.value;

        if (selectedCat.value) {
            prods = products.value.filter(product => product.category === selectedCat.value);
        }

        if (searchQuery.value) {
            const query = searchQuery.value.toLowerCase();
            prods = prods.filter(product => product.title.toLowerCase().includes(query));
        }

        return prods;
    });

    return {
        mnCatVisible,
        categoryList,
        products,
        selectedCat,
        searchQuery,
        loadProducts,
        loadCategoryList,
        selectCategory,
        toggleCategoryMenu,
        setSearchQuery,
        filteredProducts
    };
});