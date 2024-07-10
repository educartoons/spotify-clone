import { describe, test, expect } from 'vitest'
import { isAColor } from '@/utils/utils'

describe('isAColor() function', () => {
  test("returns false when it's not color", () => {
    const result = isAColor('12345M')

    expect(result).toEqual(false)
  })

  test("returns true when it's a valid color", () => {
    const result = isAColor('123489')

    expect(result).toEqual(true)
  })
})
