import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import _ from "lodash";
import history from "@/utils/history";
import "./index.css";

// Import all pages
import Login from "./login";
import Register from "./Register";
import Pool from "./pool";

const urlPatterns = [
  {
    path: "/",
    component: Login,
    title: "Login"
  },
  {
    path: "/register",
    component: Register,
    title: "Register"
  },
  {
    path: "/pool",
    component: Pool,
    title: "Pool"
  }
];

const RootRouter = () => (
  <Router history={history}>
    <Switch>
      {_.map(urlPatterns, (url, index) => (
        <Route
          key={index}
          path={url.path}
          exact
          render={route => (
            <>
              <Helmet>
                <title>{url.title || "Home"}</title>
              </Helmet>
              <url.component {...route} />
            </>
          )}
        />
      ))}
      <Route component={() => <div className="pageNotFound" />} />
    </Switch>
  </Router>
);

export default RootRouter;
