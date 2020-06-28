import { rest } from "msw";
import { SERIES_BY_CHARACTER_RESPONSE_PAYLOAD } from "./__fixtures__/seriesRequestsFixtures";

export const mockFetchSeriesByCharacter = rest.get(
  "https://gateway.marvel.com/v1/public/characters/:id/series",
  (req, res, ctx) => {
    const { id } = req.params;

    if (id === "1")
      return res(ctx.json({ data: SERIES_BY_CHARACTER_RESPONSE_PAYLOAD }));

    return res(
      ctx.json({
        data: {
          offset: 0,
          limit: 2,
          total: 0,
          count: 0,
          results: [],
        },
      })
    );
  }
);
