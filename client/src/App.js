import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import './App.css';


import { Container } from "react-bootstrap";

import NavBar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Builder from './components/Builder/Builder';
import Resume from './components/Resume/resume';
import CareerPath from './components/CareerPath/CareerPath';
import Jobs from './components/Jobs/Jobs';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/builder">
              <Builder />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/jobs">
              <Jobs />
            </Route>
            <Route exact path="/careerpath">
              <CareerPath />
            </Route>
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
