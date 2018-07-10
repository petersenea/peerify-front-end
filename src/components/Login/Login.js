
import './Login.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { Label, Container, Form, FormGroup, Input } from 'reactstrap';


class Login extends Component {

    componentWillMount() {
        console.log("worked");
    }
    render() {
        return (
            <Row className="screen" >

                <Col className="right-side-col" fluid>
                    <div className="login-group">
                        <h1 className="please-signin">Please Sign In</h1>
                        <Form>
                            <FormGroup>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Email address" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                            </FormGroup>
                            {/*<button className="submit-button">Submit</button>*/}
                            <Link to="/general-home-page">
                                <button className="submit-button">
                                    Submit</button>
                            </Link>
                            <Link to="/create-account">
                            <button className="create-account">Create an Account</button>
                            </Link>
                        </Form>

                    </div>
                </Col>
            </Row>
        )
    }
}




export default Login;