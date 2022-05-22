<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps(['BookmarkData'])

// Didn't like how it looks when hided, initially open for now
const isFullDate = ref(true)
</script>

<template>
  <section class="card bookmark">
    <h3 class="title">{{ props.BookmarkData.title }}</h3>
    <div class="button-group">
      <a><span class="material-icons-outlined"> hotel_class </span></a>
      <a><span class="material-icons-outlined"> note_add </span></a>
      <a><span class="material-icons-outlined"> share </span></a>
      <a :href="props.BookmarkData.link"
        ><span class="material-icons-outlined"> double_arrow </span></a
      >
    </div>
    <hr />
    <p>{{ props.BookmarkData.description }}</p>

    <small class="date" @click="isFullDate = !isFullDate"
      ><a v-if="!isFullDate"> Show Date</a
      ><span v-if="isFullDate"
        >Added in {{ props.BookmarkData.date.toLocaleTimeString() }}</span
      ></small
    >
  </section>
</template>

<style scoped lang="scss">
.bookmark {
  // text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;

  h3 {
    width: 100%;
    word-wrap: break-word;
  }

  hr {
    border: none;
    border-top: rgba($light, 20%) dashed 1px;
    width: 100%;
  }
}
.button-group {
  display: flex;
  justify-content: start;
  margin-bottom: 1rem;
  // padding: 0 1rem;

  a span {
    cursor: pointer;
    padding: 0.4rem;
    margin-right: 0.5rem;
    background-color: lighten($neutral-gray, 5%);
    border-radius: 5px;
    transition: 300ms ease;

    &:hover {
      background-color: darken($neutral-gray, 5%);
    }
  }
}

.date {
  text-align: right;
  position: relative;
  left: 1rem;
  align-items: start;
  padding: 0.2rem;
  width: 100%;
  bottom: -1rem;
  color: gray;
}
</style>
