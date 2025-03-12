import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    const accountArray = ref([])

    const addNewAccount = () => {
        accountArray.value.push({
            'mark': [
                '',
            ],
            'typeRecord':'local',
            'login': '',
            'password': null
        })
    }

    const deleteAccount = (n:number) => {
        accountArray.value.splice(n, 1)
    }

    if (localStorage.getItem("accountArray")) {
        accountArray.value = JSON.parse(localStorage.getItem("accountArray"))
    }

    watch(accountArray, (accountArrayVal)=> {
        localStorage.setItem("accountArray", JSON.stringify(accountArrayVal))

    },
        {deep: true}
    )

    return { accountArray, addNewAccount, deleteAccount }
})
