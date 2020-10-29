import { Typography, Container } from "@material-ui/core";
import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Menu } from "../Menu/Menu.jsx";
import { Weather } from "../Weather/Weather";
import { Reminders } from "../Reminders/Reminders";
import { useAppWrapperStyles } from "./useAppWrapperStyles";

export const AppWrapper = () => {
  const classes = useAppWrapperStyles();
  return (
    <Container className={classes.appWrapper}>
      <Suspense
        fallback={<Typography variant="h4">Loading...Please Wait!</Typography>}
      >
        <Router>
          <Switch>
            <Route path="/reminders" exact component={Reminders} />
            <Route path="/weather" exact component={Weather} />
            <Route path="/" render={() => <Redirect to="/weather" />} />
          </Switch>
        </Router>
      </Suspense>
      <Menu />
    </Container>
  );
};