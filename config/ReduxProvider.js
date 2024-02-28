import React from "react";
import { Provider } from "react-redux";
import store from "../store/ReduxStore";

export const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
