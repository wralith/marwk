<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="top-header">
    <h3>M<span>arw</span>k</h3>
    <div class="header-buttons">
      <RouterLink :active-class="`active`" to="/login"
        ><span class="material-icons-outlined"> person </span>Login</RouterLink
      >
      <RouterLink :active-class="`active`" to="/register"
        >Register<span class="material-icons-outlined"> person_add </span></RouterLink
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
      align-items: center;
      border: 1px solid $primary;
      padding: 0.3rem;
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
