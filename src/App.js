import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/Signin";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/signin" component={SigninPage} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
