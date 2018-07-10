import ReactDOM from 'react-dom';
import './GeneralHome.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { Container, Jumbotron } from 'reactstrap';
import { Well, Row, Col, Breadcrumb } from 'react-bootstrap';
import Flexbox from 'flexbox-react';
import { Link } from 'react-router-dom';

const COURSES = ['EECS 348: Intro to Artificial Intelligence', 'EECS 397: Innovation in Journalism and Technology', 'EECS 397: Building Technologies for the Law'];

function renderCourseButton(title, i) {
    return (
        <Link to="/course-home-page">
            <button className="course-button">{title}</button>
        </Link>
    );
}

const courseButtonsInstance = (
    <Flexbox className="well2-flexbox" minWidth="700px" width="90vw"
        flexWrap="wrap" inline="true">
        {COURSES.map(renderCourseButton)}
    </Flexbox>
);

class GeneralHome extends Component {
    render() {
        return (

            <div>
                <Jumbotron className="jumbo" fluid>
                    <Container className="jumbo-container" fluid>
                        <Row className="jumbo-row" fluid>
                            <Col xs={11} className="col1" >
                                <Row calssName="row-title">
                                    <h1 className="welcome">Welcome,</h1>
                                </Row>
                                <Row className="row-title">
                                    <h1 className="name">Professor Hammond</h1>
                                </Row>
                            </Col>
                            <Col xs={1} className="col2">
                                <Link to="/">
                                    <button className="pull-right signout-button">Sign Out</button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>


                <Container className="well1-container" fluid>
                    {courseButtonsInstance}
                </Container>

                <Well className="bottom" fluid>
                    <Container className="bottom-container" fluid>
                        <button className="about-button" >About Us</button>
                        <br></br>
                        <button className="about-button">About untitled</button>
                    </Container>
                </Well>
            </div>
        )
    }
}

export default GeneralHome;
