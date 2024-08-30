import { clientFetch } from '../clientFetch'

type RegisterBody = { name: string; password: string; email: string }
type LoginBody = { email: string; password: string }

export const login = (body: LoginBody) => clientFetch.post('/user/login', body)
export const registerUser = (body: RegisterBody) => clientFetch.post('/user/register', body)
export const logout = () => clientFetch.get('/user/logout')
export const refresh = () => clientFetch.post('/user/refresh')
