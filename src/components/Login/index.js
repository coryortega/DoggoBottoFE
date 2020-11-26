import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./index.css"
function Login() {
    return (
        <div className="login-container">
            <div className="header-container">
                <strong>♥</strong><h1>Please Login</h1><strong>♥</strong>
            </div>
            <Form className="w-25" >
                <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Enter your password" />
                </FormGroup>
                <Button className="w-25">Submit</Button>
            </Form>
        </div>
    );
  }
  
  export default Login;