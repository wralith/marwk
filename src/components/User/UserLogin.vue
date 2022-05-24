<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import { object, string } from 'yup'
import { injectStrict, AxiosKey } from '@/utils/InjectAxios'
import { useUserStore } from '@/stores'
import router from '@/router'
import { ref } from 'vue'

const http = injectStrict(AxiosKey)
const userStore = useUserStore()

const loginSchema = object({
  username: string().required('Username is required'),
  password: string().required('Password is required')
})

const { handleSubmit, errors, isSubmitting } = useForm({ validationSchema: loginSchema })
const { value: username } = useField('username')
const { value: password } = useField('password')
let isLoginFailed = ref(false)

const onSubmit = handleSubmit(async (values) => {
  try {
    // Password on url :)))
    // TODO maybe wrote fetch as store action
    const response = await http.get(
      `/users/?username=${values.username}&password=${values.password}`
    )
    if (response?.data?.length > 0) {
      userStore.setUser(response.data[0])
      router.push({ name: 'profile' })
    } else {
      isLoginFailed.value = true
    }
  } catch (e) {
    console.log(e)
  }
})
</script>

<template>
  <template v-if="!userStore.loggedIn">
    <h1 class="center">Login</h1>
    <form @submit.prevent="onSubmit" class="card input-group">
      <input
        v-model="username"
        :class="{ 'error-border': errors.username }"
        type="text"
        placeholder="Username"
      />
      <small class="error" v-if="errors.username">{{ errors.username }}</small>
      <input
        v-model="password"
        :class="{ 'error-border': errors.password }"
        type="password"
        placeholder="Password"
      />
      <small class="error" v-if="errors.password">{{ errors.password }}</small>
      <button :disabled="isSubmitting" class="btn">Login</button>
    </form>
    <p class="login-error" v-if="isLoginFailed">Username or password is wrong!</p>
  </template>
  <template v-else>
    <h1 class="center">You already logged in {{ userStore.username }}!</h1>
  </template>
</template>

<style scoped lang="scss">
small {
  color: $primary;
  text-align: right;
  margin: 0 0.3rem;
}

.login-error {
  text-align: center;
  color: $primary;
  margin-top: 2rem;
}
</style>
