import React from "react";
import { render } from "../../../app/helpers/test-utils";
import { SINGLE_CHARACTERS_RESPONSE_PAYLOAD } from "../../../app/mocks/resolvers/__fixtures__/charactersRequestsFixtures";
import { SERIES_BY_CHARACTER_RESPONSE_PAYLOAD } from "../../../app/mocks/resolvers/__fixtures__/seriesRequestsFixtures";
import * as charactersSelectors from "../selectors/seriesSelectors";
import SerieCard from "./SerieCard";

test("renders correctly", () => {
  const serie = SERIES_BY_CHARACTER_RESPONSE_PAYLOAD.results[0];
  jest
    .spyOn(charactersSelectors, "createSelectSeriesById")
    .mockReturnValue(() => serie);

  const { container } = render(
    <SerieCard id={SINGLE_CHARACTERS_RESPONSE_PAYLOAD.id} />
  );

  expect(container).toMatchSnapshot();
});
