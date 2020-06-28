import { createEntityAdapter, createSlice, Dictionary } from "@reduxjs/toolkit";
import { ResourceStatus } from "../../../app/typings/resourceStatus";
import { Character } from "../typings/charactersTypes";
import {
  loadCharacters,
  loadSingleCharacter,
} from "../thunks/charactersThunks";

export interface CharactersState {
  status: Dictionary<ResourceStatus>;
  offset: number;
  total: number;
  query?: string;
}

export const charactersAdapter = createEntityAdapter<Character>();

const charactersSlice = createSlice({
  name: "characters",
  initialState: charactersAdapter.getInitialState<CharactersState>({
    query: undefined,
    offset: 0,
    total: 0,
    status: {
      all: "idle",
    },
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadCharacters.pending, (state) => {
      state.status["all"] = "pending";
    });

    builder.addCase(loadCharacters.fulfilled, (state, action) => {
      const hasQueryChanged = state.query !== action.meta.arg.query;
      const hasNoOffset = action.payload.offset === 0;

      hasQueryChanged || hasNoOffset
        ? charactersAdapter.setAll(state, action.payload.results)
        : charactersAdapter.addMany(state, action.payload.results);

      state.status["all"] = "idle";
      state.query = action.meta.arg.query;
      state.offset = action.payload.offset;
      state.total = action.payload.total;
    });

    builder.addCase(loadCharacters.rejected, (state) => {
      state.status["all"] = "error";
    });

    builder.addCase(loadSingleCharacter.pending, (state, action) => {
      const characterId = action.meta.arg;
      state.status[characterId] = "pending";
    });

    builder.addCase(loadSingleCharacter.fulfilled, (state, action) => {
      const characterId = action.meta.arg;
      charactersAdapter.upsertOne(state, action.payload);
      state.status[characterId] = "idle";
    });
    builder.addCase(loadSingleCharacter.rejected, (state, action) => {
      const characterId = action.meta.arg;
      state.status[characterId] = "error";
    });
  },
});

const charactersReducer = charactersSlice.reducer;
export default charactersReducer;
