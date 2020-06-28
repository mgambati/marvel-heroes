import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import charactersReducer from "../features/characters/slices/charactersSlice";
import seriesReducer from "../features/series/slices/seriesSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    series: seriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
