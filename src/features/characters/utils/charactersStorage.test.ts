import { Dictionary } from "@reduxjs/toolkit";
import characterStorage from "./charactersStorage";
import { EditableCharacterFields } from "../typings/charactersTypes";
import { SINGLE_CHARACTERS_RESPONSE_PAYLOAD } from "../../../app/mocks/resolvers/__fixtures__/charactersRequestsFixtures";

beforeEach(() => {
  jest.clearAllMocks();
});

test("getAll should return a empty dictionary when no data is stored", () => {
  jest.spyOn(Storage.prototype, "getItem").mockReturnValueOnce(null);

  const result = characterStorage.getAll();
  expect(localStorage.getItem).toBeCalledWith("editedCharacters");
  expect(result).toEqual({});
});

const sampleItems: Dictionary<EditableCharacterFields> = {
  "1": {
    name: "Hulk",
    description: "Hulk Smash",
  },
};

test("getAll should return a dictionary with items", () => {
  jest
    .spyOn(Storage.prototype, "getItem")
    .mockReturnValueOnce(JSON.stringify(sampleItems));

  const result = characterStorage.getAll();

  expect(localStorage.getItem).toBeCalledWith("editedCharacters");
  expect(result).toEqual(sampleItems);
});

test("getById should return single item", () => {
  jest
    .spyOn(Storage.prototype, "getItem")
    .mockReturnValueOnce(JSON.stringify(sampleItems));

  const result = characterStorage.getById(1);

  expect(result).toEqual(sampleItems["1"]);
});

test("getById", () => {
  const mockedCharacter = SINGLE_CHARACTERS_RESPONSE_PAYLOAD;
  jest.spyOn(Storage.prototype, "setItem");

  characterStorage.saveEdited(mockedCharacter);
  const expectedResult: Dictionary<EditableCharacterFields> = {
    [mockedCharacter.id]: {
      name: mockedCharacter.name,
      description: mockedCharacter.description,
    },
  };
  const expectedStoredPayload = JSON.stringify(expectedResult);
  expect(localStorage.setItem).toBeCalledWith(
    "editedCharacters",
    expectedStoredPayload
  );
});
