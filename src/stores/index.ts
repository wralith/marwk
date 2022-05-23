import { defineStore } from 'pinia'

interface User {
  username: string
  email: string
  id: number | null
}

export const useUserStore = defineStore('user', {
  state: (): User => ({
    username: '',
    email: '',
    id: null
  }),
  persist: true,
  actions: {
    async setUser(user: User) {
      this.username = user.username
      this.email = user.email
      this.id = user.id
    }
  },
  getters: {
    loggedIn: (state) => {
      return state.id != null
    },
    getCurrentUser: (state) => {
      const user = state
      return user
    }
  }
})
