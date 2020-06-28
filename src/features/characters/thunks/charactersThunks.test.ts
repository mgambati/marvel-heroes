import { loadSingleCharacter, loadCharacters } from "./charactersThunks";
import * as charactersApi from "../api/charactersApi";
import {
  CHARACTERS_RESPONSE_PAYLOAD,
  SINGLE_CHARACTERS_RESPONSE_PAYLOAD,
} from "../api/__fixtures__/charactersRequests";
import { setupMockedStore } from "../../../app/helpers/test-utils";

const [mockStore, initialState] = setupMockedStore();

describe("charactersThunks", () => {
  beforeEach(() => {
    jest
      .spyOn(charactersApi, "fetchCharacters")
      .mockResolvedValueOnce(CHARACTERS_RESPONSE_PAYLOAD);

    jest
      .spyOn(charactersApi, "fetchSingleCharacter")
      .mockResolvedValueOnce(SINGLE_CHARACTERS_RESPONSE_PAYLOAD);
  });

  test("loadCharacters", async () => {
    const loadCharactersArgs = { query: undefined, offset: 0 };
    const store = mockStore(initialState);

    const result = await store.dispatch(loadCharacters(loadCharactersArgs));

    const expectedActions = [
      loadCharacters.pending(result.meta.requestId, loadCharactersArgs),
      loadCharacters.fulfilled(
        CHARACTERS_RESPONSE_PAYLOAD,
        result.meta.requestId,
        loadCharactersArgs
      ),
    ];

    expect(charactersApi.fetchCharacters).toHaveBeenCalledTimes(1);
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("loadSingleCharacter", async () => {
    const store = mockStore(initialState);

    const CHARACTER_ID = "1011334";
    const result = await store.dispatch(loadSingleCharacter(CHARACTER_ID));

    const expectedActions = [
      loadSingleCharacter.pending(result.meta.requestId, CHARACTER_ID),
      loadSingleCharacter.fulfilled(
        SINGLE_CHARACTERS_RESPONSE_PAYLOAD,
        result.meta.requestId,
        CHARACTER_ID
      ),
    ];

    expect(charactersApi.fetchSingleCharacter).toHaveBeenCalledTimes(1);
    expect(store.getActions()).toEqual(expectedActions);
  });
});
