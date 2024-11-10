import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleRegister = (e) => {
    
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Registering with:", username, email, password);
        // Add your registration logic here
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
            <div className="p-4 shadow-lg rounded" style={{ width: '100%', maxWidth: '400px', backgroundColor: '#fff' }}>
                <h2 className="text-center mb-4">Register</h2>
                <Form onSubmit={handleRegister}>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Hyder Fida"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mt-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="hyder@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword" className="mt-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="hyder12345"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formConfirmPassword" className="mt-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-3 w-100">
                        Register
                    </Button>
                    <div className="d-flex text-center justify-content-center align-items-center">
            Already a user?
            <span
              onClick={() => navigate("/login")}
              style={{
                color: "blue",
                cursor: "pointer",
                marginLeft: "5px",
                textDecoration: "underline",
              }}
            >
              Login
            </span>
          </div>
                </Form>
            </div>
        </Container>
    );
};

export default Register;
