// Result.js
import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Result = () => {
    return (
        <Container className="mt-3">
            <h1 className="text-center mb-4">Diabetes Prediction Result</h1>

              {/* { here we can dynamically show wether a patient is diabetic or not } */}
            <div className="text-center mb-4">
                <h4 className="text-danger">The patient is diabetic. the probability of being diabetic is 60%.</h4>
            </div>

            {/* Table for Displaying Static Data values can be extarcted and shown dynamically */}
            <Table bordered className="shadow-lg">
                <thead>
                    <tr>
                        <th>Field</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pregnancies</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Glucose</td>
                        <td>120</td>
                    </tr>
                    <tr>
                        <td>Blood Pressure (mmHg)</td>
                        <td>70</td>
                    </tr>
                    <tr>
                        <td>Skin Thickness</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Insulin Level (uU/ml)</td>
                        <td>85</td>
                    </tr>
                    <tr>
                        <td>BMI</td>
                        <td>28.5</td>
                    </tr>
                    <tr>
                        <td>Diabetes Pedigree Function</td>
                        <td>0.5</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>45</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};

export default Result;
