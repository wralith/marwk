<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
const userStore = useUserStore()
//TODO Button to toggle in small screens
</script>

<template>
  <nav>
    <RouterLink :active-class="`active`" to="/"
      ><span class="material-icons-outlined">home</span> Home</RouterLink
    >
    <RouterLink :active-class="`active`" to="/about"
      ><span class="material-icons-outlined">info</span>About</RouterLink
    >
    <RouterLink v-if="!userStore.loggedIn" :active-class="`active`" to="/login"
      ><span class="material-icons-outlined"> person </span>Login</RouterLink
    >
    <RouterLink v-if="!userStore.loggedIn" :active-class="`active`" to="/register"
      ><span class="material-icons-outlined"> person_add </span>Register</RouterLink
    >
    <RouterLink v-if="userStore.loggedIn" :active-class="`active`" to="/profile"
      ><span class="material-icons-outlined"> person </span>Profile</RouterLink
    >
    <RouterLink :active-class="`active`" to="/bookmarks"
      ><span class="material-icons-outlined"> book </span>Bookmarks</RouterLink
    >
  </nav>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: flex-end;

  a {
    width: 10rem;
    display: flex;
    background-color: transparent;
    padding: 0.5rem;
    transition: 300ms ease;
    align-items: flex-end;
    gap: 1rem;
    &:hover {
      background-color: darken($light, 10%);
    }
  }

  .active {
    background-color: lighten($neutral-gray, 10%);
    border-right: solid 5px $primary;
  }
}
</style>
