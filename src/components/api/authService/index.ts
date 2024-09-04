import { clientFetch } from '../clientFetch'
import { router } from '../../../router'
import type { AxiosResponse, AxiosRequestHeaders } from 'axios'

export const TOKEN_KEY = import.meta.env.VITE_APP_TOKEN_KEY

type RegisterBody = { name: string; password: string; email: string }
type LoginBody = { email: string; password: string }
type TokenResponse = { accessToken: string }

class AuthService {
  #token: string | null = null

  isLoggedIn(): boolean {
    return Boolean(this.#token)
  }

  getToken(): string | null {
    return this.#token
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token)
    this.#token = token
  }

  clearToken(): void {
    this.#token = null
    localStorage.removeItem(TOKEN_KEY)
  }

  async loginUser(body: LoginBody): Promise<void> {
    const { data }: AxiosResponse<TokenResponse> = await clientFetch.post('/user/login', body)
    this.setToken(data.accessToken)
  }

  async registerUser(body: RegisterBody): Promise<void> {
    const { data }: AxiosResponse<TokenResponse> = await clientFetch.post('/user/register', body)
    this.setToken(data.accessToken)
  }

  async logout(): Promise<void> {
    await clientFetch.get('/user/logout')
    this.clearToken()
  }

  async refresh(): Promise<void> {
    const { data }: AxiosResponse<TokenResponse> = await clientFetch.get('/user/refresh')
    this.setToken(data.accessToken)
  }
}

export const authService = new AuthService()

clientFetch.interceptors.request.use((request) => {
  const token = authService.getToken()

  if (token && request.headers) {
    ;(request.headers as AxiosRequestHeaders).Authorization = `Bearer ${token}`
  }

  return request
})

clientFetch.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        await authService.refresh()
        return clientFetch.request(error.config)
      } catch (e) {
        router.push('/auth/login')
        return Promise.reject(e)
      }
    }

    return Promise.reject(error)
  }
)
