import { AuthModule } from '@/store/modules/auth'

// remove it if it is not used
export const checkPermission = (value: string[]): boolean => {
  if (value && value instanceof Array && value.length > 0) {
    return true
    // const roles = AuthModule.roles
    // const permissionRoles = value
    // const hasPermission = roles.some(role => {
    //   return permissionRoles.includes(role)
    // })
    // return hasPermission
  } else {
    console.error("need roles! Like v-permission=\"['admin','editor']\"")
    return false
  }
}
