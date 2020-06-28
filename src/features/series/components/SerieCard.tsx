import React, { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { AspectRatio, Card, Flex, Image, Text } from "theme-ui";
import { createSelectSeriesById } from "../selectors/seriesSelectors";

export interface SeriesCardProps {
  id: number | string;
}

const SeriesCard: FC<SeriesCardProps> = ({ id }) => {
  const selectSeriesById = useMemo(() => createSelectSeriesById(id), [id]);

  const series = useSelector(selectSeriesById);
  const thumbnailSource = `${series?.thumbnail.path}.${series?.thumbnail.extension}`;

  return (
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
      <AspectRatio ratio={1}>
        <Image
          src={thumbnailSource}
          sx={{
            width: "100%",
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
          {series?.title}
        </Text>
      </Flex>
    </Card>
  );
};

export default SeriesCard;
