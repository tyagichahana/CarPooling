import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Store from "./reducer";
// import { redirectLogin } from "./actions/User";
import history from "./utils/history";
import RootRouter from "./pages";
// redirectLogin()

// scroll to top when route change

// bind redux store to root element
// const App = () => (
//   <Provider store={Store}>
//     <RootRouter />
//   </Provider>
// );

const App = () => <RootRouter />;

// render to root element
const rootElement = document.getElementById("root");
if (rootElement) {
  render(<App />, rootElement);
}
