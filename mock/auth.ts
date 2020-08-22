import faker from 'faker'
import { Response, Request } from 'express'
import {IUser} from "../src/api/types";

const users: any = {
  admin: {
    id: 1,
    name: 'admin',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    introduction: 'I am a super administrator',
    email: 'admin@test.com',
    phone: '1234567890',
    roles: [{ id: 1, name: 'admin', label: '編輯者' }],
    permissions: [
      { id: 1, name: '檢視', label: 'view' },
      { id: 2, name: '編輯', label: 'edit' },
      { id: 3, name: '刪除', label: 'delete' }
    ],
    projects: []
  },
  editor: {
    id: 2,
    name: 'editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    introduction: 'I am an editor',
    email: 'editor@test.com',
    phone: '1234567890',
    roles: [{ id: 2, name: 'editor', label: '編輯者' }],
    permissions: [
      { id: 1, name: 'view', label: '檢視' },
      { id: 2, name: 'edit', label: '編輯' }
    ],
    projects: []
  }
}

const userList: IUser[] = [users['admin'], users['editor']]
const userCount = 50

for (let i = 3; i < userCount; i++) {
  userList.push({
    id: i,
    name: faker.name.findName(),
    avatar: faker.image.imageUrl(),
    introduction: faker.lorem.sentence(20),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    roles: [{ id: 3, name: 'guest', label: '編輯者' }],
    permissions: [],
    projects: []
  })
}

export const register = (req: Request, res: Response) => {
  return res.json({
    code: 20000
  })
}

export const login = (req: Request, res: Response) => {
  const { account: name } = req.body

  const user = users[name] && users[name].name || undefined

  if (user) {
    return res.json({
      code: 20000,
      data: {
        accessToken: user + '-token'
      }
    })
  }

  return res.status(400).json({
    code: 50004,
    messaege: 'Invalid User'
  })
}

export const logout = (req: Request, res: Response) => {
  return res.json({
    code: 20000
  })
}

export const getMe = (req: Request, res: Response) => {
  // Mock data based on access token
  return res.json({
    code: 20000,
    data: {
      user: req.header('X-Access-Token') == 'admin-token' ? userList[0] : userList[1]
    }
  })
}
