import React from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
  FormControl,
  Image,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.PNG";

const Header = () => {
  return (
      <div className="header">
      <Card>
        <Row>
          <Col>
            <img src={logo} />
          </Col>
          <Col>
            <Form.Row>
              <Form.Group as={Col}>
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                  <Form.Control type="text" placeholder="Search here.." />
                </InputGroup>
              </Form.Group>
            </Form.Row>
          </Col>
          <Col>
            <Button className="btn-login" type="submit">
              Login
            </Button>
            <Button className="btn-signup" type="submit">
              Signup
            </Button>
          </Col>
        </Row>
      </Card>
      <Card className="mid-section"></Card>
      </div>
  );
};
export default Header;
