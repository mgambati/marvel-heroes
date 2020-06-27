import React, { FC } from "react";
import { Container, Flex } from "theme-ui";

export interface BaseLayoutProps {
  header: JSX.Element;
}

const BaseLayout: FC<BaseLayoutProps> = (props) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {props.header}
      <Container
        sx={{
          py: 2,
          maxWidth: "64em",
        }}
      >
        {props.children}
      </Container>
    </Flex>
  );
};

export default BaseLayout;
