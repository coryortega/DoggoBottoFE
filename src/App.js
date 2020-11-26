import React from 'react';
import Admin from './components/Admin/Admin';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import SubmitPage from './components/SubmitPage/SubmitPage';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Header/>
          <Route exact path="/" component={SubmitPage}/>
          <Route exact path="/admin" component={Admin}/>
          <div class="footer">
            <p>Copyright DoggoBotto 2020</p>
          </div>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
