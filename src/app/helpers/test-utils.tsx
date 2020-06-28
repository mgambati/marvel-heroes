import { render as rtlRender } from "@testing-library/react";
import React, { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, Theme } from "theme-ui";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { RootState, store } from "../store";
import { BASE_THEME } from "../constants/BASE_THEME";
import charactersReducer from "../../features/characters/slices/charactersSlice";
import seriesReducer from "../../features/series/slices/seriesSlice";

export function setupMockedStore() {
  type DispatchExts = ThunkDispatch<RootState, void, AnyAction>;
  const middlewares = [thunk];
  const mockStore = configureStore<RootState, DispatchExts>(middlewares);
  const initialState: RootState = {
    characters: charactersReducer(undefined, { type: "@@INIT" }),
    series: seriesReducer(undefined, { type: "@@INIT" }),
  };

  return [mockStore, initialState] as [typeof mockStore, typeof initialState];
}

function render(
  ui: JSX.Element,
  { initialState = undefined, mockedStore = store, ...renderOptions } = {}
) {
  const Wrapper: FC = ({ children }) => {
    return (
      <ThemeProvider theme={BASE_THEME as Theme}>
        <BrowserRouter>
          <Provider store={store}>{children}</Provider>
        </BrowserRouter>
      </ThemeProvider>
    );
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";

export { render };
