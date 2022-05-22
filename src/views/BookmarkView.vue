<script setup lang="ts">
import BookmarkUnit from '../components/Bookmark/BookmarkUnit.vue'
const dummyData = {
  title: 'Wralith',
  link: 'http://twitter.com/wralith',
  description: "Wralith's Twitter Page",
  date: new Date(1653247775656)
}
</script>

<template>
  <div class="bookmarks">
    <BookmarkUnit :BookmarkData="dummyData" />
    <BookmarkUnit :BookmarkData="dummyData" />
    <BookmarkUnit :BookmarkData="dummyData" />
    <BookmarkUnit :BookmarkData="dummyData" />
    <BookmarkUnit :BookmarkData="dummyData" />
    <BookmarkUnit :BookmarkData="dummyData" />
    <BookmarkUnit :BookmarkData="dummyData" />
  </div>
</template>

<style scoped lang="scss">
.bookmarks {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  section {
    width: calc(25% - 0.75rem);

    @media (max-width: 1400px) {
      width: calc(50% - 0.5rem);
    }
  }
}
</style>
