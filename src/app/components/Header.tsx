import React from "react";
import { Container, Flex, Text, Image, Link as LinkThemeUI } from "theme-ui";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Flex
      as="header"
      sx={{
        justifyContent: "center",
        borderBottom: "1px solid",
        borderColor: "gray.4",
      }}
    >
      <Container sx={{ py: 3, maxWidth: "64em" }}>
        <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Flex>
            <Link to="/">
              <Image sx={{ maxWidth: "100px" }} src={logo} />
            </Link>
          </Flex>

          <Flex
            sx={{
              flexDirection: "column",
              textAlign: "right",
            }}
          >
            <Text>Matheus Gambati</Text>
            <LinkThemeUI href="https://github.com/mgambati">Github</LinkThemeUI>
            <LinkThemeUI href="https://www.linkedin.com/in/matheusgambati/">
              LinkedIn
            </LinkThemeUI>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};
