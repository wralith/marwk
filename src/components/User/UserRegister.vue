<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import { object, string } from 'yup'
import { injectStrict, AxiosKey } from '@/utils/InjectAxios'
import { useUserStore } from '@/stores'
import router from '@/router'

const http = injectStrict(AxiosKey)
const userStore = useUserStore()

const registerSchema = object({
  username: string()
    .required('Username is required')
    .min(3, 'Minimum 3 characters needed for username'),
  email: string()
    .email('Please enter a valid e-mail')
    .required('Email is required')
    .min(7, 'Please enter a valid e-mail'),
  password: string()
    .required('Password is required')
    .min(7, 'Minimum 7 characters needed for password'),
  passwordConfirmation: string()
    .required('Password is required')
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value
    })
})

const { handleSubmit, errors, isSubmitting } = useForm({ validationSchema: registerSchema })
const { value: username } = useField('username')
const { value: email } = useField('email')
const { value: password } = useField('password')
const { value: passwordConfirmation } = useField('passwordConfirmation')
const onSubmit = handleSubmit(async (values) => {
  try {
    // Should not send password 2 times, TODO deal with it when implement backend
    // TODO Check if username and email taken -possibly api
    await http.post('/users', values)
    router.push({ name: 'login' })
  } catch (e) {
    console.log(e)
  }
})
</script>

<template>
  <template v-if="!userStore.loggedIn">
    <h1 class="center">Register</h1>
    <form @submit.prevent="onSubmit" class="card input-group">
      <input
        :class="{ 'error-border': errors.username }"
        v-model="username"
        type="text"
        placeholder="Username"
      />
      <small class="error" v-if="errors.username">{{ errors.username }}</small>
      <input
        :class="{ 'error-border': errors.email }"
        v-model="email"
        type="email"
        placeholder="Example@mail.com"
      />
      <small class="error" v-if="errors.email">{{ errors.email }}</small>
      <input
        :class="{ 'error-border': errors.password }"
        v-model="password"
        type="password"
        placeholder="Password"
      />
      <small class="error" v-if="errors.password">{{ errors.password }}</small>
      <input
        :class="{ 'error-border': errors.passwordConfirmation }"
        v-model="passwordConfirmation"
        type="password"
        placeholder="Password Confirmation"
      />
      <small class="error" v-if="errors.passwordConfirmation">{{
        errors.passwordConfirmation
      }}</small>

      <button :disabled="isSubmitting" class="btn">Register</button>
    </form>
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
</style>
