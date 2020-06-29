import { rest } from "msw";
import {
  CHARACTERS_RESPONSE_PAYLOAD,
  EMPTY_CHARACTERS_RESPONSE_PAYLOAD,
  STARTS_WITH_CHARACTERS_RESPONSE_PAYLOAD,
} from "./__fixtures__/charactersRequestsFixtures";

export const mockFetchCharacters = rest.get(
  "https://gateway.marvel.com/v1/public/characters",
  (req, res, ctx) => {
    const nameStartsWith = req.url.searchParams.get("nameStartsWith");
    const offset = req.url.searchParams.get("offset");

    if (nameStartsWith === "loki")
      return res(ctx.json({ data: STARTS_WITH_CHARACTERS_RESPONSE_PAYLOAD }));

    if (parseInt(offset ?? "0") >= 2)
      return res(ctx.json({ data: EMPTY_CHARACTERS_RESPONSE_PAYLOAD }));
    return res(ctx.json({ data: CHARACTERS_RESPONSE_PAYLOAD }));
  }
);
