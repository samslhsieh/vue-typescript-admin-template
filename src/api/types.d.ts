export interface IArticleData {
  id: number
  status: string
  title: string
  abstractContent: string
  fullContent: string
  sourceURL: string
  imageURL: string
  timestamp: string | number
  platforms: string[]
  disableComment: boolean
  importance: number
  author: string
  reviewer: string
  type: string
  pageviews: number
}

export interface IRoleData {
  key: string
  name: string
  description: string
  routes: any
}

export interface ITransactionData {
  orderId: string
  timestamp: string | number
  username: string
  price: number
  status: string
}

export interface IUserData {
  id: number
  username: string
  password: string
  name: string
  email: string
  phone: string
  avatar: string
  introduction: string
  roles?: IRole[]
  permissions?: IPermission[]
}

export interface IRole {
  id: number
  name: string
  label: string
}

export interface IPermission {
  id: number
  name: string
  label: string
}

export interface IProject {
  id: number
  name: string
  label: string
  permissions?: IPermission
}

export interface IUser {
  id: number
  username: string
  password: string
  name: string
  email: string
  phone: string
  avatar: string
  token?: string
  roles: IRole[]
  permissions: IPermission[]
  projects: IProject[]

  introduction?: string
}
