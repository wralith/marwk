<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import BookmarkUnit from '../components/Bookmark/BookmarkUnit.vue'
import NewBookmark from '../components/Bookmark/NewBookmark.vue'
import { useUserStore } from '@/stores/userStore'
import { injectStrict, AxiosKey } from '@/utils/InjectAxios'
import type { Bookmark } from '@/helpers/BookmarkHelper'

const http = injectStrict(AxiosKey)
const userStore = useUserStore()

const bookmarksData = ref<Bookmark[]>([])
const fetchBookmarksData = async () => {
  try {
    const response = await http.get('/bookmarks')
    if (response?.data?.length > 0) {
      bookmarksData.value = response.data
      console.log('fetched')
    }
  } catch (e) {
    console.log(e)
  }
}

onMounted(async () => await fetchBookmarksData())

const isAddBookmark = ref(false)
watch(isAddBookmark, async (value) => {
  if (value == false) fetchBookmarksData()
})
</script>

<template>
  <div v-show="isAddBookmark">
    <NewBookmark @closeModal="isAddBookmark = !isAddBookmark" />
  </div>
  <ul v-if="bookmarksData != undefined" v-auto-animate class="bookmarks">
    <li v-for="(bookmark, index) in bookmarksData" :key="index">
      <BookmarkUnit :BookmarkData="bookmark" />
    </li>
  </ul>
  <button v-if="userStore.loggedIn" class="btn" v-on:click="isAddBookmark = true">
    Add New Bookmark
    <span class="material-icons-outlined"> bookmark_add </span>
  </button>
  <button v-else disabled class="btn" v-on:click="isAddBookmark = true">
    Login to Add Bookmark
    <span class="material-icons-outlined"> bookmark_add </span>
  </button>
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
.btn {
  display: flex;
  align-items: flex-end;
  margin-top: 2rem;
  gap: 0.5rem;
}
</style>
