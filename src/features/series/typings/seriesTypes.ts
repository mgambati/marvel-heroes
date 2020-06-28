import { ImageResource } from "../../../app/typings/apiTypes";

export interface Series {
  id: number;
  title: string;
  description?: string;
  thumbnail: ImageResource;
}
