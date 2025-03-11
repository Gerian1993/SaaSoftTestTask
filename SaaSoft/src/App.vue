<script setup lang="ts">

import Header from './components/Header.vue'
import Button from './components/Button.vue'
import Helper from "./components/Helper.vue";
import ListAccount from './components/ListAccount.vue'


</script>

<template>
  <header>
    <h1 class="text-3xl font-bold underline">
      SaaSoft test Task
    </h1>
  </header>
  <main>
    <div class="flex gap-4">
      <Header></Header>
      <Button></Button>
    </div>
    <Helper></Helper>
    <ListAccount></ListAccount>
  </main>
</template>

<style scoped>

</style>
