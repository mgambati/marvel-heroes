import * as seriesApi from "../api/seriesApi";
import { setupMockedStore } from "../../../app/helpers/test-utils";
import { loadSeriesByCharacter } from "./seriesThunks";
import { SERIES_BY_CHARACTER_RESPONSE_PAYLOAD } from "../../../app/mocks/resolvers/__fixtures__/seriesRequestsFixtures";

const [mockStore, initialState] = setupMockedStore();

beforeEach(() => {
  jest.spyOn(seriesApi, "fetchSeriesByCharacter");
});

test("fetchSeriesByCharacter", async () => {
  const store = mockStore(initialState);

  const result = await store.dispatch(loadSeriesByCharacter("1"));

  const expectedActions = [
    loadSeriesByCharacter.pending(result.meta.requestId, "1"),
    loadSeriesByCharacter.fulfilled(
      SERIES_BY_CHARACTER_RESPONSE_PAYLOAD,
      result.meta.requestId,
      "1"
    ),
  ];

  expect(seriesApi.fetchSeriesByCharacter).toHaveBeenCalledTimes(1);
  expect(store.getActions()).toEqual(expectedActions);
});
