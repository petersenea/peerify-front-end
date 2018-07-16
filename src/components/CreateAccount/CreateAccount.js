import './CreateAccount.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { Label, Container, Form, FormGroup, Input } from 'reactstrap';

class CreateAccount extends Component {
    render() {
        return (
            <Row className="screen" >

                <Col className="right-side-col" fluid>
                    <div className="login-group">
                        <h1 className="please-signin">Create an Account</h1>
                        <Form>
                            <FormGroup>
                                <Input type="firstname" name="firstname" id="exampleFirst" placeholder="First Name" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="lastname" name="lastname" id="exampleLast" placeholder="Last Name" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Email address" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="confirm-password" name="confirm-password" id="confirmPassword" placeholder="Confirm Password" />
                            </FormGroup>
                            {/*<button className="submit-button">Submit</button>*/}
                            <Link to="/">
                                <button className="submit-button">
                                    Sign In</button>
                            </Link>
                            <Link to="/general-home-page">
                            <button className="create-account">Create an Account</button>
                            </Link>
                        </Form>

                    </div>
                </Col>
            </Row>
        )
    }

}

export default CreateAccount;