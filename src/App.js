import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RoomDetails from './components/RoomDetails/RoomDetails';
import Booking from './components/Booking/Booking';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <Switch>
          <Route path="/home">
            <Header />
            <Home />
          </Route>

          <Route path="/booking/:bookingId">
            <Header />
            <Booking />
          </Route>
          <Route path="/login">
            <Header />
            <Login></Login>
          </Route>
          <PrivateRoute path="/roomDetails">
            <Header />
            <RoomDetails />
          </PrivateRoute>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
