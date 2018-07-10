import ReactDOM from 'react-dom';
import './Assignments.css';
import AnalyzeButton from './AnalyzeButton';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { Container, Jumbotron } from 'reactstrap';
import { Well, Row, Col, Breadcrumb } from 'react-bootstrap';
import Flexbox from 'flexbox-react';
import {Link} from 'react-router-dom';


const ASSIGNMENTS = ['Assignment 1', 'Assignment 2', 'Assignment 3', 'Assignment 4','Assignment 1', 'Assignment 2', 'Assignment 3', 'Assignment 4','Assignment 1', 'Assignment 2', 'Assignment 3', 'Assignment 4','Assignment 1', 'Assignment 2', 'Assignment 3', 'Assignment 4','Assignment 1', 'Assignment 2', 'Assignment 3', 'Assignment 4'];



function renderNameButton(name, i) {
    return (
        <div className="div-student">
            <button className="button-student">{name}</button>
            <br></br>
        </div>
    );
}

const buttonsInstance = (
    <Col xs={6} className="col4">
        {ASSIGNMENTS.map(renderNameButton)}
    </Col>

);


class Assignments extends Component {

    componentDidMount(){
        console.log('worked');
    }

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
                                <h1 className="name">Assignment Title</h1>
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
                    <Breadcrumb.Item className="breadcrumb-item" active>Assignments</Breadcrumb.Item>
                </Breadcrumb>
                <Row className="body-row" fluid>
                    {buttonsInstance}
                    <Col xs={6} className="col5">
                        <Well className="student-content">
                            <strong>Title:</strong> Assignment 1
                            <AnalyzeButton />
                        </Well>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default Assignments;