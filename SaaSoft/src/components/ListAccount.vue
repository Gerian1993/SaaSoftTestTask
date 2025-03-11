<template>
  <form>
    <div class="grid grid-cols-4 gap-3">
      <div class="">Метки</div>
      <div class="">Тип записи</div>
      <div class="flex">
        <div class="">Логин</div>
        <div class="">Пароль</div>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-3" id="listAccount">
      <div class="" v-for="item in store.accountArray">+</div>
      <textarea maxlength="50"></textarea>
      <select v-model="selected">
        <option v-for="option in options" :value="option.value">
          {{ option.text }}
        </option>
      </select>
      <div class="flex">
        <input placeholder="login" type="text" maxlength="100">
        <input v-show="selected === 'local'" placeholder="password" type="password" maxlength="100">
      </div>
    </div>
  </form>
  <div>Selected: {{ selected }}</div>
</template>

<script setup>
import {ref, onMounted, watchEffect} from 'vue'
import { useCounterStore } from "../stores/userStore";


const store = useCounterStore()
console.log(store)

const selected = ref('local')
const options = ref([
  { text: 'Локальный', value: 'local' },
  { text: 'LDAP', value: 'LDAP' },
])

onMounted(() => {
  console.log(selected)
})

watchEffect(()=> {
  console.log(selected)
})



</script>

<style scoped>

</style>