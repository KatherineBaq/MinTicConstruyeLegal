import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
