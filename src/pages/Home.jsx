import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import diabetesImage from '../assets/diabetes2.png';

const HomePage = () => {
    return (
        <Container>
            {/* Hero Section */}
            <Row className="text-center my-5">
                <Col>
                    <h1>Predict Your Risk of Diabetes Early</h1>
                    <p className="lead">
                        Get an early prediction and take control of your health.
                    </p>
                    <Button variant="primary" size="lg">
                        Get Started
                    </Button>
                </Col>
            </Row>

            <Row className="my-5 justify-content-between align-items-center">
            <Col md={6}>
                <h2>About the App</h2>
                <p>
                    Our diabetes prediction app uses advanced machine learning algorithms to predict
                    the likelihood of diabetes based on your health information, allowing for early
                    intervention and informed decisions.
                </p>
            </Col>
            <Col md={6}>
                <img 
                    src={diabetesImage}
                    alt="Diabetes Prediction"
                    style={{ width: "300px", height: "300px", float:"right" }}
                />
            </Col>
        </Row>

            {/* How It Works */}
            <Row className="my-5 text-center">
                <Col>
                    <h2>How It Works</h2>
                </Col>
            </Row>
            <Row className="text-center">
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Step 1</Card.Title>
                            <Card.Text>Fill in your health information.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Step 2</Card.Title>
                            <Card.Text>Our algorithm analyzes your data.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Step 3</Card.Title>
                            <Card.Text>Get your results instantly.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="my-5 text-center">
                <Col>
                    <h2>Features</h2>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Text>Secure data handling</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Text>Easy-to-understand results</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Text>Recommendations based on results</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="my-5">
                <Col>
                    <h2>Why Early Detection Matters</h2>
                    <p>
                        Early detection of diabetes can lead to better health outcomes, allowing individuals
                        to make informed lifestyle changes and seek timely medical advice. Take the first step
                        today towards better health.
                    </p>
                </Col>
            </Row>

            {/* Footer */}
            <Row className="text-center my-5">
                <Col>
                    <p>&copy; 2024 Diabetes Prediction App. All rights reserved.</p>
                    <p>
                        <a href="#about">About</a> | <a href="#contact">Contact</a> | <a href="#privacy">Privacy Policy</a>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
