import React from "react";
import CharacterSearch from "./CharacterSearch";
import * as charactersThunks from "../thunks/charactersThunks";
import { render, fireEvent, waitFor } from "../../../app/helpers/test-utils";

test("should dispatch loadCharacters on input change", async () => {
  jest.spyOn(charactersThunks, "loadCharacters");

  const { getByTestId } = render(<CharacterSearch />);

  const input = getByTestId("search-input");
  fireEvent.change(input, { target: { value: "loki" } });

  await waitFor(() => {
    expect(charactersThunks.loadCharacters).toBeCalledWith({
      query: "loki",
      offset: 0,
    });
  });
});

test("should dispatch loadCharacters with query 'undefined' when input is empty", async () => {
  jest.spyOn(charactersThunks, "loadCharacters");

  const { getByTestId } = render(<CharacterSearch />);

  const input = getByTestId("search-input");
  fireEvent.change(input, { target: { value: "" } });

  await waitFor(() => {
    expect(charactersThunks.loadCharacters).toBeCalledWith({
      query: undefined,
      offset: 0,
    });
  });
});
