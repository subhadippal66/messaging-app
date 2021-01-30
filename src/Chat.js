import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";

function Chat() {
  return (
    <Container className="p-0">
      <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
        <Navbar.Brand>
          <Avatar src="https://img.utdstc.com/icon/d4f/daa/d4fdaa70f9bfb6c1227518a6ea355129ee1fa091c300eba7965aa002134f9b82:200" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <b>Room Name</b>
        </Nav>
        <Nav className="mx-1">
          <Nav.Link>
            <SearchIcon />
          </Nav.Link>
        </Nav>
        <Nav className="mx-1">
          <Nav.Link>
            <AttachFileIcon />
          </Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default Chat;
