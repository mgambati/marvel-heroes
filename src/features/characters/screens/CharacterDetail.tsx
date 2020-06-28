import React, { FC, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Switch, useParams } from "react-router-dom";
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Spinner,
  Text,
} from "theme-ui";
import CharacterForm from "../components/CharacterForm";
import {
  createSelectCharacterById,
  createSelectStatusOfLoadCharacterById,
} from "../selectors/charactersSelectors";
import { loadSingleCharacter } from "../thunks/charactersThunks";
import SeriesList from "../../series/components/SeriesList";

export interface CharacterDetailParams {
  id: string;
}

const CharacterDetail: FC = () => {
  const { id } = useParams<CharacterDetailParams>();
  const selectCharacterById = useMemo(() => createSelectCharacterById(id), [
    id,
  ]);
  const selectStatusOfLoadCharacterById = useMemo(
    () => createSelectStatusOfLoadCharacterById(id),
    [id]
  );

  const character = useSelector(selectCharacterById);
  const status = useSelector(selectStatusOfLoadCharacterById);
  const thumbnailSource = `${character?.thumbnail.path}.${character?.thumbnail.extension}`;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSingleCharacter(id));
  }, [dispatch, id]);

  if (status === "pending") {
    return (
      <Flex sx={{ justifyContent: "center", marginY: 2 }}>
        <Spinner />
      </Flex>
    );
  }

  return (
    <Grid columns="1fr 4fr" sx={{ marginY: 2 }}>
      <Box>
        <AspectRatio ratio={9 / 12}>
          <Image
            src={thumbnailSource}
            sx={{
              maxWidth: "none",
              objectFit: "cover",
              objectPosition: "center",
              height: "100%",
            }}
          />
        </AspectRatio>
      </Box>
      <Box>
        <Switch>
          <Route path="/characters/:id/edit">
            {character && <CharacterForm character={character} />}
          </Route>
          <Route path="/characters/:id">
            <Flex>
              <Heading as="h2" color="red.7" sx={{ mr: 2 }}>
                {character?.name}
              </Heading>
              <Link to={`/characters/${id}/edit`}>
                <Button sx={{ fontSize: "14px", py: 1 }}>Editar</Button>
              </Link>
            </Flex>
            <Text>{character?.description}</Text>
            <Heading as="h3" color="red.7">
              Series
            </Heading>
            <SeriesList characterId={id} />
          </Route>
        </Switch>
      </Box>
    </Grid>
  );
};

export default CharacterDetail;
