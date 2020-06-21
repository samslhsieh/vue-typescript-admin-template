import request from '@/utils/request'

export const getUserInfo = (data: any) =>
  request({
    url: '/auth/me',
    method: 'post',
    data
  })

export const login = (data: any) =>
  request({
    url: '/auth/login',
    method: 'post',
    data
  })

export const logout = () =>
  request({
    url: '/auth/logout',
    method: 'post'
  })

export const register = (data: any) =>
  request({
    url: '/auth/register',
    method: 'post',
    data
  })
