import React, { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { Card, Image, Text, AspectRatio, Flex } from "theme-ui";
import { Link } from "react-router-dom";
import { createSelectCharacterById } from "../selectors/charactersSelectors";

export interface CharacterCardProps {
  id: number;
}

const CharacterCard: FC<CharacterCardProps> = React.memo(({ id }) => {
  const selectCharacterById = useMemo(() => createSelectCharacterById(id), [
    id,
  ]);
  const character = useSelector(selectCharacterById);
  const thumbnailSource = `${character?.thumbnail.path}.${character?.thumbnail.extension}`;

  return (
    <Link to={`/characters/${id}`} data-testid="character-card">
      <Card
        sx={{
          display: "flex",
          borderRadius: "lg",
          flexDirection: "column",
          overflow: "hidden",
          bg: "red.7",
          ":hover": { opacity: 0.8 },
        }}
      >
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
        <Flex
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Text sx={{ m: 2 }} color="white">
            {character?.name}
          </Text>
        </Flex>
      </Card>
    </Link>
  );
});

export default CharacterCard;
