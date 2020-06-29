import { rest } from "msw";
import { SINGLE_CHARACTERS_RESPONSE_PAYLOAD } from "./__fixtures__/charactersRequestsFixtures";

export const mockFetchCharactersById = rest.get(
  "https://gateway.marvel.com/v1/public/characters/:id",
  (req, res, ctx) => {
    const { id } = req.params;

    if (id === "1")
      return res(
        ctx.delay(200),
        ctx.json({ data: SINGLE_CHARACTERS_RESPONSE_PAYLOAD })
      );

    return res(
      ctx.delay(200),
      ctx.status(404),
      ctx.json({
        code: 404,
        status: "We couldn't find that character",
      })
    );
  }
);
