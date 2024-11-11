import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TestForm = () => {
  const navigate = useNavigate();

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

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.age <= 0) {
      alert("Age should be greater than zero.");
      return;
    }

    try {
      // Send POST request to backend using axios
      const response = await axios.post('http://your-backend-url.com/api/diabetes-prediction', formData);

      if (response.status === 200) {
        // Navigate to the result page if the request is successful
        navigate('/result');
      } else {
        alert('Error submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };


  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
      <div
        className="p-4 shadow-lg rounded"
        style={{
          width: '100%',
          maxWidth: '800px', 
          backgroundColor: '#fff',
          padding: '30px', 
        }}
      >
        <h2 className="text-center mb-4">Enter Your Health Profile</h2>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={12} md={4}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
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
                  name="glucose"
                  value={formData.glucose}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col xs={12} md={4}>
              <Form.Group controlId="formBloodPressure">
                <Form.Label>Blood Pressure (mmHg)</Form.Label>
                <Form.Control
                  type="number"
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
                  name="skinThickness"
                  value={formData.skinThickness}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group controlId="formInsulin">
                <Form.Label>Insulin Level (mIU/L)</Form.Label>
                <Form.Control
                  type="number"
                  name="insulin"
                  value={formData.insulin}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col xs={12} md={4}>
              <Form.Group controlId="formBMI">
                <Form.Label>BMI</Form.Label>
                <Form.Control
                  type="number"
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

export default TestForm;
