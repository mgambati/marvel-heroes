import { Dictionary } from "@reduxjs/toolkit";
import { Character, EditableCharacterFields } from "../typings/charactersTypes";

/**
 * Armazena personagems editados
 */
const characterStorage = {
  getAll() {
    const items = localStorage.getItem("editedCharacters");
    if (!items) return {};

    return JSON.parse(items) as Dictionary<EditableCharacterFields>;
  },
  getById(id: string | number) {
    const items = characterStorage.getAll();

    return items[id];
  },
  saveEdited(character: Character) {
    const { name, description } = character;

    const items = characterStorage.getAll();

    const newItems: Dictionary<EditableCharacterFields> = {
      ...items,
      [character.id]: { name, description },
    };

    localStorage.setItem("editedCharacters", JSON.stringify(newItems));
  },
};

export default characterStorage;
