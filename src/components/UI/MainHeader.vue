<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores'

let userStore = useUserStore()
</script>

<template>
  <div class="top-header">
    <h3>M<span>arw</span>k</h3>
    <div class="header-buttons">
      <RouterLink v-if="!userStore.loggedIn" :active-class="`active`" to="/login"
        ><span class="material-icons-outlined"> person </span>Login</RouterLink
      >
      <RouterLink v-if="!userStore.loggedIn" :active-class="`active`" to="/register"
        >Register<span class="material-icons-outlined"> person_add </span></RouterLink
      >
      <RouterLink v-if="userStore.loggedIn" :active-class="`active`" to="/profile"
        ><span class="material-icons-outlined"> person </span>Profile</RouterLink
      >
      <a v-on:click="userStore.logOut" v-if="userStore.loggedIn"
        ><span class="material-icons-outlined"> logout </span>Logout</a
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20%;
  height: 4rem;
  align-items: center;
  border-bottom: solid 1px darken($neutral-gray, 5%);

  h3 span {
    color: $primary;
  }

  .header-buttons {
    display: flex;
    gap: 1rem;
    a {
      display: flex;
      gap: 0.5rem;
      align-items: flex-end;
      border: 1px solid $primary;
      padding: 0.3rem;
      cursor: pointer;
      &:hover {
        background-color: $light;
      }
    }
  }

  @media (max-width: 720px) {
    padding: 0 1rem;
  }
}
</style>
