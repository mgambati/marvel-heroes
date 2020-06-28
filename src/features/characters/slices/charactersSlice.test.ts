import { nanoid } from "@reduxjs/toolkit";
import charactersReducer from "./charactersSlice";
import {
  loadCharacters,
  loadSingleCharacter,
} from "../thunks/charactersThunks";
import {
  CHARACTERS_RESPONSE_PAYLOAD,
  SINGLE_CHARACTERS_RESPONSE_PAYLOAD,
} from "../api/__fixtures__/charactersRequests";

describe("reducers and actions", () => {
  const loadCharactersArgs = { query: undefined, offset: 0 };

  test(loadCharacters.pending.type, () => {
    const requestId = nanoid();
    const state = charactersReducer(
      undefined,
      loadCharacters.pending(requestId, loadCharactersArgs)
    );
    expect(state.status["all"]).toBe("pending");
  });

  test(loadCharacters.fulfilled.type, () => {
    const requestId = nanoid();

    const state = charactersReducer(
      undefined,
      loadCharacters.fulfilled(
        CHARACTERS_RESPONSE_PAYLOAD,
        requestId,
        loadCharactersArgs
      )
    );

    expect(state.status["all"]).toBe("idle");
    expect(state.ids).toHaveLength(2);
    expect(state.query).toBe(loadCharactersArgs.query);
  });

  test(loadCharacters.rejected.type, () => {
    const requestId = nanoid();
    const state = charactersReducer(
      undefined,
      loadCharacters.rejected(
        new Error("Mocked Error"),
        requestId,
        loadCharactersArgs
      )
    );
    expect(state.status["all"]).toBe("error");
  });

  test(loadSingleCharacter.pending.type, () => {
    const characterId = "1011334";
    const requestId = nanoid();
    const state = charactersReducer(
      undefined,
      loadSingleCharacter.pending(requestId, characterId)
    );
    expect(state.status[characterId]).toBe("pending");
  });

  test(loadSingleCharacter.fulfilled.type, () => {
    const characterId = "1011334";
    const requestId = nanoid();

    const state = charactersReducer(
      undefined,
      loadSingleCharacter.fulfilled(
        SINGLE_CHARACTERS_RESPONSE_PAYLOAD,
        requestId,
        characterId
      )
    );

    expect(state.status[characterId]).toBe("idle");
    expect(state.ids).toHaveLength(1);
    expect(state.entities[characterId]).toBe(
      SINGLE_CHARACTERS_RESPONSE_PAYLOAD
    );
  });

  test(loadSingleCharacter.rejected.type, () => {
    const characterId = "1011334";
    const requestId = nanoid();
    const state = charactersReducer(
      undefined,
      loadSingleCharacter.rejected(
        new Error("Mocked Error"),
        requestId,
        characterId
      )
    );
    expect(state.status[characterId]).toBe("error");
  });
});
