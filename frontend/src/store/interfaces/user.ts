export type UserState = {
  user: User | null,
  isAuth: boolean
}

type User = {
  id: string
  email: string
  diskSpace: number
  usedSpace: number
  avatar: string
}