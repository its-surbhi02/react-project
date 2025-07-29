import React from "react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { render } from "@testing-library/react"
import Header from "../Header"

test("Logo should load on rendering header", () => {
  const header = render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
   console.log(header);
  // Add your test expectations here (e.g., logo toBeInTheDocument)
});