import { mockFetchCharactersById } from './resolvers/mockFetchCharacterById'
import { mockFetchCharacters } from './resolvers/mockFetchCharacters'

export const handlers = [
  mockFetchCharacters,
  mockFetchCharactersById
]