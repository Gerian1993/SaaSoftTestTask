<template>
  <button class="bg-gray-200 p-1 border-inherit rounded-sm cursor-pointer" @click="store.addNewAccount()">+</button>
</template>

<script setup>
import { useCounterStore } from "../stores/userStore";


const store = useCounterStore()
console.log(store.addNewAccount)


</script>

<style scoped>

</style>