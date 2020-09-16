import request from '@/utils/request'

export const getMe = (params: any) =>
  request({
    url: '/auth/me',
    method: 'get',
    params
  })

export const patchMe = (data: any) =>
  request({
    url: '/auth/me',
    method: 'patch',
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
