<script setup lang="ts">
import { useUserStore } from '@/stores'

const userStore = useUserStore()
</script>

<template>
  <h2 v-if="userStore.loggedIn">Welcome {{ userStore.username }}!</h2>
  <h2 v-else>Welcome!</h2>
  <ul class="user-activities">
    <li>Dummy Activity</li>
    <li>Dummy Activity Too</li>
  </ul>
</template>

<style scoped lang="scss">
.user-activities {
  list-style: circle;
  padding-left: 2rem;
  line-height: 2rem;
}

h2 {
  text-transform: capitalize;
}
</style>
