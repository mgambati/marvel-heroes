import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCharacters, fetchSingleCharacter } from "../api/charactersApi";

export interface LoadCharactersOptions {
  query?: string;
  offset: number;
}

export const loadCharacters = createAsyncThunk(
  "characters/loadCharacters",
  async (options: LoadCharactersOptions) => {
    return await fetchCharacters(options.offset, options.query);
  }
);

export const loadSingleCharacter = createAsyncThunk(
  "characters/loadSingleCharacter",
  async (id: string | number) => {
    return await fetchSingleCharacter(id);
  }
);
