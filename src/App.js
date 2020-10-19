import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Home from './components/Home/Home';
import AllVolunTeers from './components/AllVolunTeers/AllVolunTeers';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import RegisterVolunteer from './components/RegisterVolunteer/RegisterVolunteer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ShowYourVolunTeers from './components/ShowYourVolunTeers/ShowYourVolunTeers';
import SideBar from './components/SideBar/SideBar';



export const UserContext = createContext();
export const SearchContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [searchData, setSearchData] = useState([]);



  return (
    <SearchContext.Provider value={[searchData, setSearchData]}>
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
            <AllVolunTeers />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/registervolunteer/:title'>
            <RegisterVolunteer />
          </PrivateRoute>
          <PrivateRoute path='/showvolunteers'>
            <ShowYourVolunTeers />
          </PrivateRoute>
          <PrivateRoute path='/registerpage'>
            <SideBar />
          </PrivateRoute>

          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
