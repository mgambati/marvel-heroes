import { addApikeyParamsInterceptor } from "./addApikeyParamsInterceptor";

test("adds the apikey params to request", () => {
  const mockedConfig = {
    params: {
      example: "example",
    },
  };

  const result = addApikeyParamsInterceptor(mockedConfig);

  expect(result.params).toHaveProperty("apikey");
  expect(result.params).toHaveProperty("example");
});
