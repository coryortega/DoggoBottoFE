import React, { useEffect } from 'react';
import Admin from './components/Admin/Admin';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import SubmitPage from './components/SubmitPage/SubmitPage';
import ReactGA from 'react-ga';
import Login from './components/Login';
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./Auth";

function App() {

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS)
    ReactGA.pageview('/')
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Header/>
          <Route exact path="/" component={SubmitPage}/>
          <Route exact path="/login" component={Login}/>
            <PrivateRoute exact path="/admin" component={Admin}/>
          <div class="footer">
            <p>Copyright DoggoBotto 2020</p>
          </div>
        </Router>
      </div>
      </AuthProvider>
  );
}

export default App;
