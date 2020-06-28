import { RootState } from "../../../app/store";
import { charactersAdapter } from "../slices/charactersSlice";
import { createSelector } from "@reduxjs/toolkit";

const charactersSelectors = charactersAdapter.getSelectors();

const selectCharacterState = (state: RootState) => state.characters;

export const selectAllCharactersIds = createSelector(
  selectCharacterState,
  charactersSelectors.selectIds
);

export const createSelectCharacterById = (id: number | string) => {
  return (state: RootState) =>
    charactersSelectors.selectById(state.characters, id);
};

export const createSelectStatusOfLoadCharacterById = (id: number | string) => {
  return (state: RootState) => state.characters.status[id];
};

export const selectStatusOfLoadCharacters = (state: RootState) =>
  state.characters.status["all"];

export const selectCurrentCharactersQuery = (state: RootState) =>
  state.characters.query;

export const selectCurrentCharactersOffset = (state: RootState) =>
  state.characters.offset;
