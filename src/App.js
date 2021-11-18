import Homepage from "./Pages/UserPages/Homepage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProfilePage from "./Pages/UserPages/ProfilePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route path="/profile">
          <ProfilePage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
