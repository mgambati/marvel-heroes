import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Flex, Grid, Spinner } from "theme-ui";
import CharacterCard from "./CharacterCard";
import {
  selectAllCharactersIds,
  selectCurrentCharactersOffset,
  selectCurrentCharactersQuery,
  selectStatusOfLoadCharacters,
} from "../selectors/charactersSelectors";
import { loadCharacters } from "../thunks/charactersThunks";

export interface CharactersListProps {}

const CharactersList: FC<CharactersListProps> = () => {
  const characters = useSelector(selectAllCharactersIds);
  const status = useSelector(selectStatusOfLoadCharacters);
  const query = useSelector(selectCurrentCharactersQuery);
  const offset = useSelector(selectCurrentCharactersOffset);

  const dispatch = useDispatch();
  const onLoadMore = useCallback(() => {
    dispatch(loadCharacters({ query, offset: offset + 20 }));
  }, [dispatch, query, offset]);

  return (
    <Box>
      <Grid columns="1fr 1fr 1fr 1fr">
        {characters.map((id) => (
          <CharacterCard key={id} id={id as number} />
        ))}
      </Grid>
      <Flex sx={{ justifyContent: "center", marginY: 2 }}>
        {status === "pending" ? (
          <Spinner data-testid="loading-characters-spinner" />
        ) : (
          <Button data-testid="load-more-btn" onClick={onLoadMore}>
            Carregar mais
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default CharactersList;
