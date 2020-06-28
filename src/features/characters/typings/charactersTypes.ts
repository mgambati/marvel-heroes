import { ImageResource } from "../../../app/typings/apiTypes";

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: ImageResource;
}

export interface EditableCharacterFields {
  name: string;
  description: string;
}
