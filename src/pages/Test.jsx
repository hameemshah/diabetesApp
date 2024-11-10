import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

const Test = () => {
  const [formData, setFormData] = useState({
    name: '',
    pregnancies: '',
    glucose: '',
    bloodPressure: '',
    skinThickness: '',
    insulin: '',
    bmi: '',
    diabetesPedigreeFunction: '',
    age: ''
  });

  const [redirect, setRedirect] = useState(false);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if age is greater than zero
    if (formData.age <= 0) {
      alert("Age should be greater than zero.");
      return;
    }

    // Submit logic here (e.g., API call to predict diabetes)

    // Redirect to result page on successful form submission
    setRedirect(true);
  };

  // Redirect to the result page if form is submitted successfully
  if (redirect) {
    return <Navigate to="/result" />;
  }

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div
        className="p-4 shadow-lg rounded"
        style={{
          width: '100%',
          maxWidth: '800px', // Increased maxWidth for a bigger box
          backgroundColor: '#fff',
          padding: '30px', // Increased padding for more space
        }}
      >
        <h2 className="text-center mb-4">Diabetes Prediction Form</h2>
        <Form onSubmit={handleSubmit}>
          <Row>
            {/* Row 1: Name, Number of Pregnancies, Glucose Level */}
            <Col xs={12} md={4}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group controlId="formPregnancies">
                <Form.Label>Number of Pregnancies</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter number of pregnancies"
                  name="pregnancies"
                  value={formData.pregnancies}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group controlId="formGlucose">
                <Form.Label>Glucose Level</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter glucose level"
                  name="glucose"
                  value={formData.glucose}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-3">
            {/* Row 2: Blood Pressure, Skin Thickness, Insulin Level */}
            <Col xs={12} md={4}>
              <Form.Group controlId="formBloodPressure">
                <Form.Label>Blood Pressure (mmHg)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter blood pressure"
                  name="bloodPressure"
                  value={formData.bloodPressure}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group controlId="formSkinThickness">
                <Form.Label>Skin Thickness</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter skin thickness"
                  name="skinThickness"
                  value={formData.skinThickness}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group controlId="formInsulin">
                <Form.Label>Insulin Level (UU/ml)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter insulin level"
                  name="insulin"
                  value={formData.insulin}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-3">
            {/* Row 3: BMI, Diabetes Pedigree Function, Age */}
            <Col xs={12} md={4}>
              <Form.Group controlId="formBMI">
                <Form.Label>BMI</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter BMI"
                  name="bmi"
                  value={formData.bmi}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group controlId="formDiabetesPedigreeFunction">
                <Form.Label>Diabetes Pedigree Function</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter diabetes pedigree function"
                  name="diabetesPedigreeFunction"
                  value={formData.diabetesPedigreeFunction}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group controlId="formAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="submit" className="mt-4 w-100">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Test;
