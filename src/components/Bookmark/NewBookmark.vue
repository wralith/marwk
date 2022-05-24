<script setup lang="ts">
import BackdropBlur from '../UI/BackdropBlur.vue'
const emits = defineEmits(['closeModal'])

const closeNewBookmarkModal = () => {
  emits('closeModal')
}
</script>

<template>
  <BackdropBlur />
  <div class="card new-bookmark">
    <form v-on:submit.prevent="">
      <h3>Add Bookmark</h3>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="http://example.com" />
      <select name="tag" id="tag">
        <option disabled selected value="">Tag</option>
        <option value="">#Social</option>
        <option value="">#News</option>
        <option value="">#Art</option>
        <option value="">#Programming</option>
        <option value="">#Education</option>
      </select>
      <textarea placeholder="Description" cols="5" rows="9"></textarea>
      <div class="button-group">
        <button class="btn">Add</button>
        <button @click="closeNewBookmarkModal" class="btn">Close</button>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.new-bookmark {
  position: absolute;
  text-align: center;
  top: 10%;
  left: 15%;
  margin: auto;
  width: 70%;
  z-index: 90;
  background-color: $neutral-gray;
  border: 1px solid rgba($primary, 0.5);
  border-radius: 0.5rem;
  form {
    display: flex;
    flex-direction: column;

    textarea {
      resize: vertical;
    }
  }

  .button-group {
    display: flex;
    flex-direction: row;
    justify-content: center;
    .btn {
      width: 40%;
      margin: 1rem;
    }
  }

  @media (min-width: 1200px) {
    left: 30%;
    margin: auto;
    width: 40%;
  }
}
</style>
