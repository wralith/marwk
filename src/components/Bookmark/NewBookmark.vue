<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import { object, string } from 'yup'
import { injectStrict, AxiosKey } from '@/utils/InjectAxios'
import BackdropBlur from '../UI/BackdropBlur.vue'
import { useUserStore } from '@/stores/userStore'

const http = injectStrict(AxiosKey)
const emits = defineEmits(['closeModal'])
const userStore = useUserStore()

const bookmarkSchema = object({
  title: string().required('Username is required'),
  url: string().required('URL is required'),
  description: string().required('Description is required'),
  tag: string()
})

const { handleSubmit, errors, isSubmitting } = useForm({ validationSchema: bookmarkSchema })
const { value: title } = useField<string>('title')
const { value: url } = useField<string>('url')
const { value: description } = useField<string>('description')
const { value: tag } = useField<string>('tag')

// Tag input does not have initial value!!

const dateNow = () => {
  const date = new Date()
  return date.getTime()
}

const additionalPayload = {
  likes: 0,
  date: dateNow(),
  userID: userStore.id
}

const onSubmit = handleSubmit(async (values) => {
  try {
    await http.post('bookmarks', { ...values, ...additionalPayload })
    closeNewBookmarkModal()
    alert('Bookmark Added!')
  } catch (e) {
    console.log(e)
  }
})

const closeNewBookmarkModal = () => {
  emits('closeModal')
}
</script>

<template>
  <BackdropBlur @click="closeNewBookmarkModal" />
  <div class="card new-bookmark">
    <form v-on:submit.prevent="onSubmit">
      <h3>Add Bookmark</h3>
      <input v-model="title" type="text" placeholder="Title" />
      <small class="error" v-if="errors.title">{{ errors.title }}</small>
      <input v-model="url" type="text" placeholder="http://example.com" />
      <small class="error" v-if="errors.url">{{ errors.url }}</small>
      <select v-model="tag" name="tag" id="tag">
        <option selected value="#general">#general</option>
        <option value="#social">#social</option>
        <option value="#news">#news</option>
        <option value="#art">#art</option>
        <option value="#programming">#programming</option>
        <option value="#education">#education</option>
      </select>
      <small class="error" v-if="errors.tag">{{ errors.tag }}</small>
      <textarea v-model="description" placeholder="Description" cols="5" rows="9"></textarea>
      <small class="error" v-if="errors.description">{{ errors.description }}</small>
      <div class="button-group">
        <button :disabled="isSubmitting" class="btn">Add</button>
        <button type="button" @click="closeNewBookmarkModal" class="btn">Close</button>
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

    label {
      margin: 1rem 0 0 0;
      align-self: start;
    }

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

  small {
    color: $primary;
    text-align: right;
    margin: 0 0.3rem;
  }
}
</style>
