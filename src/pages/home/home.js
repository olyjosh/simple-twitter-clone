import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./form";

class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="firstSplit">
            <div className="searchIcon">
              <FontAwesomeIcon icon="search" />
              Follow your interests <br />
              <FontAwesomeIcon icon="user-friends" />
              Hear what people are talking about
              <br />
              <FontAwesomeIcon icon="comment" />
              Join the conversation
            </div>
          </Col>

          <Col className="secondSplit">
            <Form />
            <div className="twitterIcon">
              <FontAwesomeIcon icon="bolt" />

              <p className="index4">
                See what’s happening in the world right now <br />
              </p>
              <p className="index5">
                Join Twitter Today.
                <br />
                <button className="button button1">
                  Sign Up <br />
                </button>
                <button className="button button2">Log In</button>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
