import { Character } from "../typings/charactersTypes";
import characterStorage from "../utils/charactersStorage";
import { PaginatedResponse } from "../../../app/typings/apiTypes";
import { api } from "../../../app/api";

export async function fetchCharacters(offset = 0, query?: string) {
  const params = {
    nameStartsWith: query,
    offset,
    limit: 20,
  };

  const { data: response } = await api.get<PaginatedResponse<Character>>(
    "/characters",
    { params }
  );

  // Merge the results from API with the ones on localStorage
  const result = response.data.results.map((item) => {
    const stored = characterStorage.getById(item.id);
    return stored ? { ...item, ...stored } : item;
  });

  return {
    ...response.data,
    results: result,
  };
}

export async function fetchSingleCharacter(id: string | number) {
  const { data: response } = await api.get<PaginatedResponse<Character>>(
    `/characters/${id}`
  );

  // Merge the result from API with the ones on localStorage
  const storage = characterStorage.getById(id);
  const character = response.data.results[0];
  return storage ? { ...character, ...storage } : character;
}
