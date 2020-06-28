import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSeriesByCharacter } from "../api/seriesApi";

export const loadSeriesByCharacter = createAsyncThunk(
  "series/loadSeriesByCharacter",
  async (characterId: number | string) => {
    return await fetchSeriesByCharacter(characterId);
  }
);
