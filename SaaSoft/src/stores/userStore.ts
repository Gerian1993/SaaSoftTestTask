import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    const accountArray = ref([])
    //const doubleCount = computed(() => count.value * 2)
    function addNewAccount() {
        accountArray.value.push({})
    }

    return { accountArray, addNewAccount }
})
