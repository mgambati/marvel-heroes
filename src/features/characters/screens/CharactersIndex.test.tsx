import React from "react";
import { fireEvent, render, waitFor } from "../../../app/helpers/test-utils";
import * as charactersApi from "../api/charactersApi";
import CharactersIndex from "./CharactersIndex";
import { CHARACTERS_RESPONSE_PAYLOAD } from "../api/__fixtures__/charactersRequests";

const emptyPayload = {
  offset: 0,
  limit: 2,
  total: 1493,
  count: 0,
  results: [],
};

test("should render loading indicator", async () => {
  const { getByTestId } = render(<CharactersIndex />);

  const input = getByTestId("search-input");
  fireEvent.change(input, { target: { value: "loki" } });

  await waitFor(() => {
    expect(getByTestId("loading-characters-spinner")).toBeInTheDocument();
  });
});

test("should render cards", async () => {
  jest
    .spyOn(charactersApi, "fetchCharacters")
    .mockResolvedValueOnce(emptyPayload);

  const { getByTestId, getByText } = render(<CharactersIndex />);

  jest
    .spyOn(charactersApi, "fetchCharacters")
    .mockResolvedValueOnce(CHARACTERS_RESPONSE_PAYLOAD);

  // Fake search
  const input = getByTestId("search-input");
  fireEvent.change(input, { target: { value: "3-D Man" } });

  await waitFor(() => {
    expect(getByText("3-D Man")).toBeInTheDocument();
  });
});
