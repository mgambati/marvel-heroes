import { createEntityAdapter, createSlice, Dictionary } from "@reduxjs/toolkit";
import { ResourceStatus } from "../../../app/typings/resourceStatus";
import { loadSeriesByCharacter } from "../thunks/seriesThunks";
import { Series } from "../typings/seriesTypes";

export interface SeriesState {
  status: Dictionary<ResourceStatus>;
  byCharacter: Dictionary<number[]>;
}

export const seriesAdapter = createEntityAdapter<Series>();

const seriesSlice = createSlice({
  name: "characters",
  initialState: seriesAdapter.getInitialState<SeriesState>({
    byCharacter: {},
    status: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadSeriesByCharacter.pending, (state, action) => {
      const characterId = action.meta.arg;
      const key = `character.${characterId}`;
      state.status[key] = "pending";
    });

    builder.addCase(loadSeriesByCharacter.fulfilled, (state, action) => {
      const characterId = action.meta.arg;
      const key = `character.${characterId}`;
      const ids = action.payload.results.map((item) => item.id);

      state.status[key] = "idle";
      state.byCharacter[characterId] = ids;
      seriesAdapter.upsertMany(state, action.payload.results);
    });

    builder.addCase(loadSeriesByCharacter.rejected, (state, action) => {
      const characterId = action.meta.arg;
      const key = `character.${characterId}`;

      state.status[key] = "error";
    });
  },
});

const seriesReducer = seriesSlice.reducer;
export default seriesReducer;
