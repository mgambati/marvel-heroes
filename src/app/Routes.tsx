import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import CharactersIndex from "../features/characters/screens/CharactersIndex";
import CharacterDetail from "../features/characters/screens/CharacterDetail";

const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={CharactersIndex} />
      <Route path="/characters/:id" component={CharacterDetail} />
    </Switch>
  );
};

export default Routes;
