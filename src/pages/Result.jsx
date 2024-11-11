import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';

const Result = () => {
    const [resultData, setResultData] = useState(null); // State to store fetched data

    useEffect(() => {
        // Function to fetch data from the backend
        const fetchData = async () => {
            try {
                const response = await axios.get('http://your-backend-url.com/api/diabetes-prediction-result');
                setResultData(response.data); // Assuming data comes in expected format
            } catch (error) {
                console.error("Error fetching result data:", error);
            }
        };

        fetchData(); // Call the fetch function when component mounts
    }, []);

    if (!resultData) {
        return <div>Loading...</div>; // Show loading state while data is fetched
    }

    return (
        <Container className="mt-3">
            <h1 className="text-center mb-4">Diabetes Prediction Result</h1>

            {/* Displaying diabetes prediction result */}
            <div className="text-center mb-4">
                <h4 className={`text-${resultData.isDiabetic ? 'danger' : 'success'}`}>
                    {resultData.isDiabetic ? 'The patient is diabetic.' : 'The patient is not diabetic.'}
                    The probability of being diabetic is {resultData.probability}%.
                </h4>
            </div>

            {/* Table for Displaying Data */}
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
                        <td>{resultData.pregnancies}</td>
                    </tr>
                    <tr>
                        <td>Glucose</td>
                        <td>{resultData.glucose}</td>
                    </tr>
                    <tr>
                        <td>Blood Pressure (mmHg)</td>
                        <td>{resultData.bloodPressure}</td>
                    </tr>
                    <tr>
                        <td>Skin Thickness</td>
                        <td>{resultData.skinThickness}</td>
                    </tr>
                    <tr>
                        <td>Insulin Level (uU/ml)</td>
                        <td>{resultData.insulin}</td>
                    </tr>
                    <tr>
                        <td>BMI</td>
                        <td>{resultData.bmi}</td>
                    </tr>
                    <tr>
                        <td>Diabetes Pedigree Function</td>
                        <td>{resultData.diabetesPedigreeFunction}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{resultData.age}</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};

export default Result;
