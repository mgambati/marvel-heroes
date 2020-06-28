import React from "react";
import { fireEvent, render, waitFor } from "../../../app/helpers/test-utils";
import * as charactersApi from "../api/charactersApi";
import CharactersList from "./CharactersList";
import * as charactersSelectors from "../selectors/charactersSelectors";
import { CHARACTERS_RESPONSE_PAYLOAD } from "../api/__fixtures__/charactersRequests";

beforeEach(() => {
  jest
    .spyOn(charactersSelectors, "selectAllCharactersIds")
    .mockReturnValue(
      CHARACTERS_RESPONSE_PAYLOAD.results.map((item) => item.id)
    );

  jest
    .spyOn(charactersApi, "fetchCharacters")
    .mockResolvedValueOnce(CHARACTERS_RESPONSE_PAYLOAD)
    .mockResolvedValueOnce(CHARACTERS_RESPONSE_PAYLOAD);
});

beforeEach(() => {
  jest.clearAllMocks();
});

test("renders a list of CharactersCard", async () => {
  const { findAllByTestId } = render(<CharactersList />);

  expect(await findAllByTestId("character-card")).toHaveLength(2);
});

test("loads more characters", async () => {
  const { getByTestId } = render(<CharactersList />);

  const loadMoreButton = getByTestId("load-more-btn");
  fireEvent.click(loadMoreButton);

  await waitFor(() => {
    expect(charactersApi.fetchCharacters).toHaveBeenCalledTimes(1);
  });
});
