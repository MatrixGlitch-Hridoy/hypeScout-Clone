import Homepage from "./Pages/UserPages/Homepage";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProfilePage from "./Pages/UserPages/ProfilePage";
import SettingPage from "./Pages/UserPages/SettingPage";
import CampaignPage from "./Pages/UserPages/CampaignPage";
import LoginPage from "./Pages/UserPages/LoginPage";
import RegisterPage from "./Pages/UserPages/RegisterPage";

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
        <Route path="/new">
          <CampaignPage/>
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/register">
          <RegisterPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
