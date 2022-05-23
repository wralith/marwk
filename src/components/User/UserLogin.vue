<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import { object, string } from 'yup'

const loginSchema = object({
  username: string().required('Username is required'),
  password: string().required('Password is required')
})

const { handleSubmit, errors, isSubmitting } = useForm({ validationSchema: loginSchema })
const { value: username } = useField('username')
const { value: password } = useField('password')

const onSubmit = handleSubmit(async (values, { resetForm }) => {
  try {
    // post request
    console.log(values)
  } catch (e) {
    console.log(e)
  }
  resetForm()
})
</script>

<template>
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
</template>

<style scoped lang="scss">
small {
  color: $primary;
  text-align: right;
  margin: 0 0.3rem;
}
</style>
