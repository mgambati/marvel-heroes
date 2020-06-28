import React, { FC } from "react";
import { Flex, Heading } from "theme-ui";
import CharacterSearch from "../components/CharacterSearch";
import CharactersList from "../components/CharactersList";

export interface CharactersIndexProps {}

const CharactersIndex: FC<CharactersIndexProps> = () => {
  return (
    <Flex sx={{ flexDirection: "column" }}>
      <Heading>Personagens Marvel</Heading>
      <CharacterSearch />
      <CharactersList />
    </Flex>
  );
};

export default CharactersIndex;
