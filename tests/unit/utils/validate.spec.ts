import { isValidAccount, isExternal } from '@/utils/validate'

describe('Utils:validate', () => {
  it('isValidUsername', () => {
    expect(isValidAccount('admin')).toBe(true)
    expect(isValidAccount('editor')).toBe(true)
    expect(isValidAccount('xxxx')).toBe(false)
  })

  it('isExternal', () => {
    expect(isExternal('https://www.armour.com/')).toBe(true)
    expect(isExternal('mailto:someone@test.com')).toBe(true)
    expect(isExternal('123aBC')).toBe(false)
  })
})
