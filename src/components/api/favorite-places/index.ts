import { clientFetch } from '../clientFetch'

const BASE_PLACES_URL = '/points'

type AddPoint = { title: string; description: string; img: string; coordinates: [number, number] }
type UpdatePoint = AddPoint & { id: string }
type FavoritePlace = UpdatePoint & { _id: string }

export const getFavoritePlaces = (): Promise<UpdatePoint[]> =>
  clientFetch.get<FavoritePlace[]>(BASE_PLACES_URL).then(({ data }) =>
    data.map((place) => ({
      ...place,
      id: place._id
    }))
  )

export const addFavoritePlace = (body: AddPoint) => clientFetch.post(BASE_PLACES_URL, body)

export const getFavoritePlace = (body: AddPoint) => clientFetch.post(BASE_PLACES_URL, body)

export const updateFavoritePlace = (body: UpdatePoint) => clientFetch.put(BASE_PLACES_URL, body)

export const deleteFavoritePlace = (id: string) => clientFetch.delete(`${BASE_PLACES_URL}/${id}`)
