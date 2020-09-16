import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { login, logout, getMe } from '@/api/auth'
import { getToken, setToken, removeToken } from '@/utils/cookies'
import router, { resetRouter } from '@/router'
import { PermissionModule } from './permission'
import { TagsViewModule } from './tags-view'
import store from '@/store'
import { IPermission, IProject, IRole } from '@/api/types'

export interface IAuthState {
  token: string
  id: number
  name: string
  avatar: string
  email: string
  introduction: string
  roles: IRole[]
  permissions: IPermission[]
  projects: IProject[]
}

export interface ILoginRequest {
  account: string
  password: string
}

@Module({ dynamic: true, store, name: 'auth' })
class Auth extends VuexModule implements IAuthState {
  public token = getToken() || ''
  public id = 0
  public name = ''
  public avatar = ''
  public email = ''
  public introduction = ''
  public roles: IRole[] = []
  public permissions: IPermission[] = []
  public projects: IProject[] = []

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }

  @Mutation
  private SET_ID(id: number) {
    this.id = id
  }

  @Mutation
  private SET_NAME(name: string) {
    this.name = name
  }

  @Mutation
  private SET_AVATAR(avatar: string) {
    this.avatar = avatar
  }

  @Mutation
  private SET_INTRODUCTION(introduction: string) {
    this.introduction = introduction
  }

  @Mutation
  private SET_ROLES(roles: IRole[]) {
    this.roles = roles
  }

  @Mutation
  private SET_PERMISSIONS(permissions: IPermission[]) {
    this.permissions = permissions
  }

  @Mutation
  private SET_EMAIL(email: string) {
    this.email = email
  }

  @Action
  public async Login(userInfo: ILoginRequest) {
    let { account, password } = userInfo
    account = account.trim()
    const { data } = await login({ account, password })
    setToken(data.accessToken)
    this.SET_TOKEN(data.accessToken)
  }

  @Action
  public ResetToken() {
    removeToken()
    this.SET_TOKEN('')
    this.SET_ROLES([])
  }

  @Action
  public async GetUserInfo() {
    if (this.token === '') {
      throw Error('GetUserInfo: token is undefined!')
    }
    const { data } = await getMe({
      /* Your params here */
    })
    if (!data) {
      throw Error('Verification failed, please Login again.')
    }
    const { id, roles, permissions, name, avatar, introduction, email } = data
    // roles must be a non-empty array
    if (!roles || roles.length <= 0) {
      throw Error('GetUserInfo: roles must be a non-null array!')
    }
    this.SET_ROLES(roles)
    this.SET_PERMISSIONS(permissions)
    this.SET_ID(id)
    this.SET_NAME(name)
    this.SET_AVATAR(avatar)
    this.SET_INTRODUCTION(introduction)
    this.SET_EMAIL(email)
  }

  @Action
  public async ChangeRoles(role: string) {
    // TODO: refactor
    // Dynamically modify permissions
    const token = role + '-token'
    this.SET_TOKEN(token)
    setToken(token)
    await this.GetUserInfo()
    resetRouter()
    // Generate dynamic accessible routes based on roles
    PermissionModule.GenerateRoutes({ roles: this.roles, permissions: this.permissions })

    // Add generated routes
    router.addRoutes(PermissionModule.dynamicRoutes)

    // Reset visited views and cached views
    TagsViewModule.delAllViews()
  }

  @Action
  public async LogOut() {
    if (this.token === '') {
      throw Error('LogOut: token is undefined!')
    }
    await logout()
    removeToken()
    resetRouter()

    // Reset visited views and cached views
    TagsViewModule.delAllViews()
    this.SET_TOKEN('')
    this.SET_ID(0)
    this.SET_ROLES([])
    this.SET_PERMISSIONS([])
  }
}

export const AuthModule = getModule(Auth)
