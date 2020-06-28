import React from "react";
import { render } from "../../../app/helpers/test-utils";
import * as charactersSelectors from "../selectors/charactersSelectors";
import { SINGLE_CHARACTERS_RESPONSE_PAYLOAD } from "../api/__fixtures__/charactersRequests";
import CharacterCard from "./CharacterCard";

test("renders correctly", () => {
  jest
    .spyOn(charactersSelectors, "createSelectCharacterById")
    .mockReturnValue(() => {
      return SINGLE_CHARACTERS_RESPONSE_PAYLOAD;
    });

  const { container } = render(
    <CharacterCard id={SINGLE_CHARACTERS_RESPONSE_PAYLOAD.id} />
  );

  expect(container).toMatchSnapshot();
});
