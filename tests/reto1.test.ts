import { isAnagram } from '../src/reto1'

describe('Anagram', () => {
  it('should return true if the two words are anagrams', () => {
    expect(isAnagram('roma', 'amor')).toBe(true)
  })

  it('should return false if the two words are not anagrams', () => {
    expect(isAnagram('roma', 'roam')).toBe(false)
  })

  it('should return false if the two words are the same', () => {
    expect(isAnagram('roma', 'roma')).toBe(false)
  })
})
