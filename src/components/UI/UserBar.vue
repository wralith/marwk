<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { injectStrict, AxiosKey } from '@/utils/InjectAxios'
const http = injectStrict(AxiosKey)

let name = ref('')
onMounted(async () => {
  const resp = await http.get('/users')
  console.log(await resp.data)
  name.value = await resp.data[1]
})
</script>

<template>
  <h2>Hopefully Your Name</h2>
  <p>And again, hopefully last activities of yours.</p>
  <ul class="user-activities">
    <li>First Activity</li>
    <li>Second</li>
    <li>Hmmm</li>
    <li>Woow</li>
    <li>{{ name }}</li>
    <li>I am dummy text</li>
  </ul>
</template>

<style lang="scss">
.user-activities {
  list-style: circle;
  padding-left: 2rem;
  line-height: 2rem;
}
</style>
