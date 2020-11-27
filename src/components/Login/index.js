import React, { useCallback, useContext } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./index.css"
import { withRouter, Redirect } from "react-router";
import app from "../../firebase.js";
import { AuthContext } from "../../Auth.js";


const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
          event.preventDefault();
          const { email, password } = event.target.elements;
          try {
            await app
              .auth()
              .signInWithEmailAndPassword(email.value, password.value);
            history.push("/admin");
          } catch (error) {
            alert(error);
          }
        },
        [history]
      );
    
      const { currentUser } = useContext(AuthContext);
    
      if (currentUser) {
        return <Redirect to="/admin" />;
      }


    return (
        <div className="login-container">
            <div className="header-container">
                <strong>♥</strong><h1>Please Login</h1><strong>♥</strong>
            </div>
            <Form onSubmit={handleLogin} className="w-25" >
                <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Enter your password" />
                </FormGroup>
                <Button className="w-25" type="submit">Login</Button>
            </Form>
        </div>
    );
  }
  
  export default withRouter(Login);