import React from 'react';
import Admin from './components/Admin';
import Header from './components/Header';
import { Route } from "react-router-dom";
import './App.css';
import SubmitPage from './components/SubmitPage';

function App() {
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
