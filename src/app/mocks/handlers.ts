import { mockFetchCharactersById } from './resolvers/mockFetchCharacterById'
import { mockFetchCharacters } from './resolvers/mockFetchCharacters'
import { mockFetchSeriesByCharacter } from './resolvers/mockFetchSeriesByCharacter'

export const handlers = [
  mockFetchCharacters,
  mockFetchCharactersById,
  mockFetchSeriesByCharacter
]