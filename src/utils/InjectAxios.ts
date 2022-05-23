import { inject } from 'vue'
import type { InjectionKey } from 'vue'
import axios, { type AxiosInstance } from 'axios'

export const AxiosKey: InjectionKey<AxiosInstance> = Symbol('http')

export const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3004',
  headers: {
    'Content-type': 'application/json'
  }
})

export function injectStrict<T>(key: InjectionKey<T>, fallback?: T) {
  const resolved = inject(key, fallback)
  if (!resolved) {
    throw new Error(`Could not resolve ${key}`)
  }
  return resolved
}
