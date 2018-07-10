import ReactDOM from 'react-dom';
import './Students.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { Container, Jumbotron } from 'reactstrap';
import { Well, Row, Col, Breadcrumb } from 'react-bootstrap';
import Flexbox from 'flexbox-react';
import StudentContent from './StudentContent';
import {Link} from 'react-router-dom';

const NAMES = ['Zack Aslan', 'Daniel Birnbaum', 'Elizabeth Petersen', 'John Doe'];

function renderNameButton(name, i) {
    return (
        <div>
            <button className="button-student">{name}</button>
            <br></br>
        </div>
    );
}

const buttonsInstance = (
    <Col xs={6} className="col4">
        {NAMES.map(renderNameButton)}
    </Col>

);

const ASSIGNMENTS = ['Assignment 1', 'Assignment 2', 'Assignment 3','Assignment 4'];
const PEERREVIEWS = ['Peer Review 1', 'Peer Review 2', 'Peer Review 3', 'Peer Review 4'];

class Students extends Component {

    render() {
        return (
            <div>
                <Jumbotron className="jumbo" fluid>
                    <Container className="jumbo-container" fluid>
                    <Row className="jumbo-row" fluid>
                            <Col xs={10} className="col1" >
                                <Row className="row-welcomes">
                                <h1 className="welcome">&nbsp;</h1>
                                </Row>
                                <Row>
                                <h1 className="name">Students</h1>
                                </Row>
                            </Col>
                            <Col xs={1} className="col2">
                                <Link to ="/">
                                <button className="pull-right signout-button">Sign Out</button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Breadcrumb className="breadcrumb1">
                    <Breadcrumb.Item className="breadcrumb-item" href="/general-home-page">Home</Breadcrumb.Item>
                    <Breadcrumb.Item className="breadcrumb-item" href="/course-home-page">
                        Course Title
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className="breadcrumb-item" active>Students</Breadcrumb.Item>
                </Breadcrumb>
                <Row className="body-row" fluid>
                    {buttonsInstance}
                    <Col xs={6} className="col5">
                        <StudentContent name="Daniel Birnbaum" />
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Students
