import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { Avatar, Card } from "@material-ui/core";
import "./Sidechat.css";

function Sidechat() {
  return (
    <div className="my-0 py-1 px-3 chat_contact">
      <Row>
        <Col sm={2}>
          <Avatar />
        </Col>
        <Col sm={10}>
          <Row className="p-0 m-0">
            <b>User 1</b>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Sidechat;
