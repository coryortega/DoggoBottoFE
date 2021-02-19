import React, { useEffect } from 'react';
import Admin from './components/Admin/Admin';
import Header from './components/Header/Header';
import { Route } from "react-router-dom";
import './App.css';
import SubmitPage from './components/SubmitPage/SubmitPage';
import ReactGA from 'react-ga';

function App() {

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS)
    ReactGA.pageview('/')
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <div className="App">
      <Header/>
      <Route exact path="/" component={SubmitPage}/>
      <Route exact path="/admin" component={Admin}/>
      <div class="footer">
        <p>Copyright DoggoBotto 2020</p>
      </div>
    </div>
  );
}

export default App;
