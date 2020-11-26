import React from 'react';
import Admin from './components/Admin/Admin';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import SubmitPage from './components/SubmitPage/SubmitPage';
import Login from './components/Login';
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./Auth";

function App() {
  return (
      <div className="App">
        <Router>
          <Header/>
          <Route exact path="/" component={SubmitPage}/>
          <Route exact path="/login" component={Login}/>
          <AuthProvider>
            <PrivateRoute exact path="/admin" component={Admin}/>
          </AuthProvider>
          <div class="footer">
            <p>Copyright DoggoBotto 2020</p>
          </div>
        </Router>
      </div>
  );
}

export default App;
