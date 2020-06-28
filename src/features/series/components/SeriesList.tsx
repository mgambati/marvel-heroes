import React, { FC, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Grid, Spinner } from "theme-ui";
import {
  createSelectSeriesByCharacter,
  createSelectStatusOfLoadSeriesByCharacter,
} from "../selectors/seriesSelectors";
import { loadSeriesByCharacter } from "../thunks/seriesThunks";
import SeriesCard from "./SerieCard";

export interface SeriesListProps {
  characterId: string | number;
}

const SeriesList: FC<SeriesListProps> = ({ characterId }) => {
  const selectSeriesByCharacter = useMemo(
    () => createSelectSeriesByCharacter(characterId),
    [characterId]
  );
  const selectStatusOfLoadSeriesByCharacter = useMemo(
    () => createSelectStatusOfLoadSeriesByCharacter(characterId),
    [characterId]
  );
  const series = useSelector(selectSeriesByCharacter);
  const status = useSelector(selectStatusOfLoadSeriesByCharacter);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSeriesByCharacter(characterId));
  }, [dispatch, characterId]);

  if (status === "pending") {
    return (
      <Flex sx={{ justifyContent: "center" }}>
        <Spinner />
      </Flex>
    );
  }

  return (
    <Grid columns="1fr 1fr 1fr 1fr">
      {series?.map((id) => (
        <SeriesCard key={id} id={id} />
      ))}
    </Grid>
  );
};

export default SeriesList;
