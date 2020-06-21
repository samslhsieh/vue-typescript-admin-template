import { DirectiveOptions } from 'vue'
import { AuthModule } from '@/store/modules/auth'

export const permission: DirectiveOptions = {
  inserted(el, binding) {
    const { value } = binding
    const roles = AuthModule.roles
    if (value && value instanceof Array && value.length > 0) {
      const permissionRoles = value
      const hasPermission = roles.some(role => {
        return permissionRoles.includes(role)
      })
      if (!hasPermission) {
        el.style.display = 'none'
      }
    } else {
      throw new Error('need roles! Like v-permission="[\'admin\',\'editor\']"')
    }
  }
}
