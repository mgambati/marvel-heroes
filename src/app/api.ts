import Axios from "axios";
import { stringify } from "qs";
import { addApikeyParamsInterceptor } from "./helpers/addApikeyParamsInterceptor";

export const api = Axios.create({
  baseURL: "https://gateway.marvel.com/v1/public/",
  paramsSerializer: stringify,
});

api.interceptors.request.use(addApikeyParamsInterceptor);
