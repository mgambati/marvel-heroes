import React, { FC, useEffect, useState } from "react";
import { Box, Input, Text } from "theme-ui";
import { useDebounce } from "use-debounce";
import { useDispatch } from "react-redux";
import { loadCharacters } from "../thunks/charactersThunks";
export interface CharacterSearchProps {}

const CharacterSearch: FC<CharacterSearchProps> = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 500);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      loadCharacters({
        query: debouncedQuery ? debouncedQuery : undefined,
        offset: 0,
      })
    );
  }, [debouncedQuery, dispatch]);

  return (
    <Box
      sx={{
        my: 2,
        borderRadius: "lg",
        bg: "red.7",
        p: 3,
      }}
    >
      <Text as="label" color="white">
        Procurar Personagem
      </Text>
      <Input
        data-testid="search-input"
        sx={{
          borderColor: "white",
          "::placeholder": { color: "white", opacity: 0.7 },
        }}
        placeholder="Hulk"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </Box>
  );
};

export default CharacterSearch;
