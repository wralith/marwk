<script setup lang="ts">
import SideBar from './components/UI/SideBar.vue'
import MainHeader from './components/UI/MainHeader.vue'
import UserBar from './components/UI/UserBar.vue'
</script>

<template>
  <MainHeader />
  <main class="layout">
    <aside class="left-div">
      <SideBar />
    </aside>
    <article class="center-div">
      <RouterView />
    </article>
    <aside class="right-div">
      <UserBar />
    </aside>
  </main>
</template>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: row;
  justify-content: center;

  article {
    height: calc(100vh - 4rem);
    width: 50%;
    border-left: 1px solid darken($neutral-gray, 5%);
    border-right: 1px solid darken($neutral-gray, 5%);
    padding: 1rem;
  }

  aside {
    width: 25%;
    padding: 1rem;
  }

  @media (max-width: 720px) {
    article {
      width: 95%;
      border: none;
    }

    aside {
      display: none;
    }
  }
}
</style>
