import ReactDOM from 'react-dom';
import './CourseHome.css';

import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { Container, Jumbotron } from 'reactstrap';
import { Well, Row, Col, Breadcrumb } from 'react-bootstrap';
import Flexbox from 'flexbox-react';
import {Link} from 'react-router-dom';

class CourseHome extends Component {
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
                                <h1 className="name">Course Title</h1>
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
                <Breadcrumb className="breadcrumb1">
                    <Breadcrumb.Item className="breadcrumb-item" href="/general-home-page">Home</Breadcrumb.Item>
                    <Breadcrumb.Item className="breadcrumb-item" active>Course Title</Breadcrumb.Item>
                </Breadcrumb>
                <Well className="well1" fluid>
                    <Container className="well1-container" fluid>
                        <Flexbox className="well1-flexbox" minWidth="700px" width="60vw" justifyContent="center"
                         minHeight="50vh" flexDirection="column">
                            <Flexbox 
                            justifyContent="space-around" 
                            flexWrap = "nowrap">
                            <Link to="/assignments">
                            <button className="pull-left big-button">Assignments</button>
                            </Link>
                            <Link to="/students">
                            <button className="pull-right big-button">Students</button>
                            </Link>
                            </Flexbox>
                        </Flexbox>
                    </Container>
                </Well>

            </div>
        )
    }
}

export default CourseHome;