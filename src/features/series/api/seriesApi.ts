import { Series } from "../typings/seriesTypes";
import { api } from "../../../app/api";
import { PaginatedResponse } from "../../../app/typings/apiTypes";

export async function fetchSeriesByCharacter(characterId: number | string) {
  const { data: response } = await api.get<PaginatedResponse<Series>>(
    `/characters/${characterId}/series`
  );

  return response.data;
}
