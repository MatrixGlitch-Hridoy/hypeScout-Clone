import Homepage from "./Pages/UserPages/Homepage";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProfilePage from "./Pages/UserPages/ProfilePage";
import SettingPage from "./Pages/UserPages/SettingPage";

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
        <Route path="/setting">
          <SettingPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
