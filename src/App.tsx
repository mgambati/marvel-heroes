import React from "react";
import BaseLayout from "./app/components/BaseLayout";
import { Header } from "./app/components/Header";
import Routes from "./app/Routes";

function App() {
  return (
    <BaseLayout header={<Header />}>
      <Routes />
    </BaseLayout>
  );
}

export default App;
