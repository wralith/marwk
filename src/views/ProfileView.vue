<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
const userStore = useUserStore()
</script>

<template>
  <template v-if="userStore.loggedIn"
    ><h3>Hello {{ userStore.username }}</h3>
    <p>
      This is going to be your profile page {{ userStore.username }}, but i am really not sure how
      to populate it. Favorites, activities maybe the right panel should be hidden in this page but
      i should change whole layout than. I don't know. 😢
    </p></template
  >
  <template v-if="!userStore.loggedIn"
    ><h3>You don't have access to this page</h3>
    <p>How you get here!!!, I will change this implementation later 😢</p></template
  >
</template>

<style scoped lang="scss"></style>
