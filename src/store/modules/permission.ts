import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import { RouteConfig } from 'vue-router'
import { asyncRoutes, constantRoutes } from '@/router'
import store from '@/store'
import { IPermission, IRole, IUser } from '@/api/types'

const hasPermission = (permissions: IPermission[], route: RouteConfig): boolean => {
  if (route.meta && route.meta.permissions) {
    return permissions.some(permission => route.meta.permissions.includes(permission.name))
  }

  return true
}

export const filterAsyncRoutes = (routes: RouteConfig[], permissions: IPermission[]): RouteConfig[] => {
  const res: RouteConfig[] = []
  routes.forEach(route => {
    const r = { ...route }
    if (hasPermission(permissions, r)) {
      if (r.children) {
        r.children = filterAsyncRoutes(r.children, permissions)
      }
      res.push(r)
    }
  })

  return res
}

export interface IPermissionState {
  routes: RouteConfig[]
  dynamicRoutes: RouteConfig[]
}

@Module({ dynamic: true, store, name: 'permission' })
class Permission extends VuexModule implements IPermissionState {
  public routes: RouteConfig[] = []
  public dynamicRoutes: RouteConfig[] = []

  @Mutation
  private SET_ROUTES(routes: RouteConfig[]) {
    this.routes = constantRoutes.concat(routes)
    this.dynamicRoutes = routes
  }

  @Action
  public GenerateRoutes(roles: IRole[], permissions: IPermission[]) {
    let accessedRoutes
    // return all routes if it is admin role
    if (roles.some(role => role.name.includes('admin'))) {
      accessedRoutes = asyncRoutes
    } else {
      accessedRoutes = filterAsyncRoutes(asyncRoutes, permissions)
    }

    this.SET_ROUTES(accessedRoutes)
  }
}

export const PermissionModule = getModule(Permission)
