import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import charactersReducer from "../features/characters/slices/charactersSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
