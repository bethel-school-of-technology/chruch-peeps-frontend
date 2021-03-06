import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App';
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from './Nav';
import Home from './components/Home';
import Peeps from './components/Peeps';
import Prayer from './components/Prayer';
import Login from './components/login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import CreatePrayer from './components/CreatePrayer';
import EditPrayer from './components/EditPrayer';
import EditProfile from './components/EditProfile';
import PrayerAdmin from './components/PrayerAdmin';
import Logout from './components/logout';

function App () {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
    
          <Route path="/signup" component={Signup} />

          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/peeps" component={Peeps} />
          <Route path="/profile" component={Profile} />
          <Route path="/editprofile" component={EditProfile} />
          
          <Route path="/prayer" component={Prayer} />
          <Route path="/editprayer" component={EditPrayer} />
          <Route path="/addprayer" component={CreatePrayer} />
          
          <Route path="/prayer/admin/update/:id" component={PrayerAdmin} />

        </Switch>
      </div>
    </Router>
  );
}


export default App;