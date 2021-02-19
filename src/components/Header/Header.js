import React, { useContext } from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { Mention } from "react-twitter-widgets";
import { Link } from "react-router-dom";
import { withRouter, Redirect } from "react-router";
import app from "../../firebase.js";
import { AuthContext } from "../../Auth.js";

const Header = (props) => {

  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <strong>♥</strong> DoggoBotto <strong>♥</strong>
        </Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link href="/">Upload Doggo</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link> */}
        </Nav>
        <Form inline>
          {currentUser ? <Button onClick={() => app.auth().signOut()}>Logout</Button> :
          <div className="mention">
            <Mention username="doggos4all" options={{ size: "large" }} />
          </div>
          }
        </Form>
      </Navbar>
    </>
  );
};

export default Header;
