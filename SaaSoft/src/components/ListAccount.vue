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
    <div class="grid gap-3" id="listAccount">
      <div class="flex gap-3" v-for="(item, n) in store.accountArray">
        <div class="flex gap-3">
          <textarea maxlength="50" :value="Object.values(item.mark).join(';')"></textarea>
          <select v-model="item.typeRecord">
            <option v-for="option in options" :value="option.value">
              {{ option.text }}
            </option>
          </select>
          <div class="flex">
            <input @focusout="onsubmit" placeholder="login" type="text" maxlength="100" v-model="item.login" required>
            <input v-show="item.typeRecord === 'local'" placeholder="password" type="password" maxlength="100" v-model="item.password"  required>
          </div>
        </div>
        <button
            class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3 cursor-pointer"
            @click.prevent="store.deleteAccount(n)"
        >
          -
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from "../stores/userStore";


const store = useCounterStore()


const getMarkList = (n) => {
  const markList = []
  store.accountArray.forEach((account)=> {
    markList.push(account[n].mark[text])
  })

  return markList
}

const selected = ref('local')
const options = ref([
  { text: 'Локальный', value: 'local' },
  { text: 'LDAP', value: 'LDAP' },
])

</script>

<style scoped>

</style>