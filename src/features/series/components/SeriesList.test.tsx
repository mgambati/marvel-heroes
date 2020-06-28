import React from "react";
import { render, waitFor } from "../../../app/helpers/test-utils";
import * as seriesThunks from "../thunks/seriesThunks";
import SeriesList from "./SeriesList";

test("dispatch loadSeriesByCharacter and render SerieCards", async () => {
  jest.spyOn(seriesThunks, "loadSeriesByCharacter");

  const { findByTestId, findAllByTestId, queryByTestId } = render(
    <SeriesList characterId="1" />
  );

  expect(await findByTestId("loading-spinner")).toBeInTheDocument();

  await waitFor(() => expect(queryByTestId("loading-spinner")).toBeNull());

  expect(seriesThunks.loadSeriesByCharacter).toHaveBeenCalledWith("1");

  expect(await findAllByTestId("serie-card")).toHaveLength(2);
});
