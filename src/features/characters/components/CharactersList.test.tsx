import React from "react";
import { fireEvent, render } from "../../../app/helpers/test-utils";
import { store } from "../../../app/store";
import * as charactersApi from "../api/charactersApi";
import { loadCharacters } from "../thunks/charactersThunks";
import CharactersList from "./CharactersList";

beforeAll(() => {
  jest.spyOn(charactersApi, "fetchCharacters");
});

test("renders a loading spinner when pending", async () => {
  const { findByTestId } = render(<CharactersList />);
  store.dispatch(loadCharacters({ offset: 0 }));
  expect(await findByTestId("loading-characters-spinner")).toBeInTheDocument();
});

test("renders a list of CharactersCard", async () => {
  await store.dispatch(loadCharacters({ offset: 0, query: undefined }));

  const { findAllByTestId } = render(<CharactersList />);

  expect(await findAllByTestId("character-card")).toHaveLength(2);
});

test("loads more characters", async () => {
  const { findByTestId, getByTestId } = render(<CharactersList />);

  const loadMoreButton = getByTestId("load-more-btn");
  fireEvent.click(loadMoreButton);

  expect(await findByTestId("loading-characters-spinner")).toBeInTheDocument();

  expect(await findByTestId("load-more-btn")).toBeInTheDocument();
  expect(charactersApi.fetchCharacters).toHaveBeenCalledWith(20, undefined);
});
