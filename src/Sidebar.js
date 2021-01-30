import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.css";
import {
  Col,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Sidechat from "./Sidechat";

function Sidebar() {
  return (
    <Container className="m-0 p-0 left-side-allChat">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <Avatar src="https://img.utdstc.com/icon/d4f/daa/d4fdaa70f9bfb6c1227518a6ea355129ee1fa091c300eba7965aa002134f9b82:200" />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link>
            <MoreHorizIcon />
          </Nav.Link>
        </Nav>
      </Navbar>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">
            <SearchIcon />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <h3 className="ml-3">Chat</h3>
      <div className="all_chatroom">
        <Sidechat />
        <Sidechat />
        <Sidechat />
      </div>
    </Container>
  );
}

export default Sidebar;
