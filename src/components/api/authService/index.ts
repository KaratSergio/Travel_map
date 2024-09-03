import { clientFetch } from '../clientFetch'

export const TOKEN_KEY = import.meta.env.VITE_APP_TOKEN_KEY

type RegisterBody = { name: string; password: string; email: string }
type LoginBody = { email: string; password: string }
type TokenResponse = { accessToken: string }

class AuthService {
  #token: string | null = null

  isLoggedIn(): boolean {
    return Boolean(this.#token)
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token)
    clientFetch.defaults.headers.common = { Authorization: `Bearer ${token}` }
    this.#token = token
  }

  clearToken(): void {
    this.#token = null
    localStorage.removeItem(TOKEN_KEY)
    clientFetch.defaults.headers.common = {}
  }

  async loginUser(body: LoginBody): Promise<void> {
    const { data } = await clientFetch.post<TokenResponse>('/user/login', body)
    const { accessToken } = data

    this.setToken(accessToken)
  }

  async registerUser(body: RegisterBody): Promise<void> {
    const { data } = await clientFetch.post<TokenResponse>('/user/register', body)
    const { accessToken } = data

    this.setToken(accessToken)
  }

  async logout(): Promise<void> {
    await clientFetch.get('/user/logout')
    this.clearToken()
  }

  async refresh(): Promise<void> {
    return clientFetch.get('/user/refresh')
  }
}

export const authService = new AuthService()
