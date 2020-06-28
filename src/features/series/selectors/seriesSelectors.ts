import { seriesAdapter } from "../slices/seriesSlice";
import { RootState } from "../../../app/store";

const seriesSelectors = seriesAdapter.getSelectors();

export const createSelectSeriesByCharacter = (characterId: number | string) => {
  return (state: RootState) => state.series.byCharacter[characterId];
};

export const createSelectSeriesById = (id: number | string) => {
  return (state: RootState) => seriesSelectors.selectById(state.series, id);
};

export const createSelectStatusOfLoadSeriesByCharacter = (
  characterId: number | string
) => {
  return (state: RootState) => state.series.status[`character.${characterId}`];
};
