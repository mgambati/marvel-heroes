export const CHARACTERS_RESPONSE_PAYLOAD = {
  offset: 0,
  limit: 2,
  total: 4,
  count: 2,
  results: [
    {
      id: 1,
      name: "3-D Man",
      description: "",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
        extension: "jpg",
      },
    },
    {
      id: 2,
      name: "A-Bomb (HAS)",
      description:
        "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
        extension: "jpg",
      },
    },
  ],
};

export const EMPTY_CHARACTERS_RESPONSE_PAYLOAD = {
  offset: 2,
  limit: 2,
  total: 4,
  count: 0,
  results: [],
};

export const SINGLE_CHARACTERS_RESPONSE_PAYLOAD = {
  id: 1,
  name: "3-D Man",
  description: "",
  modified: "2014-04-29T14:18:17-0400",
  thumbnail: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
    extension: "jpg",
  },
};

export const STARTS_WITH_CHARACTERS_RESPONSE_PAYLOAD = {
  offset: 0,
  limit: 1,
  total: 2,
  count: 1,
  results: [
    {
      id: 3,
      name: "Loki",
      description: "",
      modified: "2017-08-21T16:45:34-0400",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/d/90/526547f509313",
        extension: "jpg",
      },
    },
  ],
};
