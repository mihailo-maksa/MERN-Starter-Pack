import React, { useEffect, lazy, Suspense } from "react";
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Spinner from "./components/layout/Spinner";
import ErrorBoundary from "./components/layout/ErrorBoundary";
import { loadUser } from "./actions/auth";
import "./App.css";

const Navbar = lazy(() => import("./components/layout/Navbar"));
const Landing = lazy(() => import("./components/layout/Landing"));
const Routes = lazy(() => import("./components/routing/Routes"));

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route component={Routes} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </Provider>
  );
};

export default App;
