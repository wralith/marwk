<script setup lang="ts">
import { ref } from 'vue'
import BookmarkUnit from '../components/Bookmark/BookmarkUnit.vue'
const dummyData = ref([
  {
    title: 'Wralith',
    link: 'http://twitter.com/wralith',
    description: "Wralith's Twitter Page",
    date: new Date(1653247775656)
  },
  {
    title: 'Wralith',
    link: 'http://github.com/wralith',
    description: "Wralith's Github Page",
    date: new Date(1653247764531)
  },
  {
    title: 'Google',
    link: 'http://google.com/',
    description: 'Just Google',
    date: new Date(1653393996112)
  },
  {
    title: 'Twitter',
    link: 'http://twitter.com/',
    description: 'Twitter Home Page',
    date: new Date(1653393996559)
  }
])

// To test auto animate! It is awesome!!
const removeLast = () => dummyData.value.pop()
</script>

<template>
  <ul v-auto-animate class="bookmarks">
    <li :key="item.title" v-for="item in dummyData">
      <BookmarkUnit :BookmarkData="item" />
    </li>
  </ul>
  <button style="margin-top: 3rem" v-on:click="removeLast">Test Auto Animate</button>
</template>

<style scoped lang="scss">
.bookmarks {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  li {
    width: calc(25% - 0.75rem);

    @media (max-width: 1400px) {
      width: calc(50% - 0.5rem);
    }
  }
}
</style>
