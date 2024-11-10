import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Toast,
  ToastContainer,
  useAccordionButton,
} from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [showToast, setShowToast] = useState(false); // State for toast visibility
  const [toastMessage, setToastMessage] = useState(""); // State for toast message
  const [toastVariant, setToastVariant] = useState(""); // State for toast type (success or error)

  const navigate = useNavigate();

  const myUsername = "Hyder Fida";
  const myPassword = "hyder12345";

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", username, password);

    if (password === myPassword && username === myUsername) {
      setToastMessage("Login successful!");
      setToastVariant("success");
      setShowToast(true);
      setRedirect(true);
    } else {
      setToastMessage("Invalid username or password");
      setToastVariant("danger");
      setShowToast(true);
    }
  };

  // Redirect logic based on login success
  if (redirect) {
    return <Navigate to="/test" />;
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="p-4 shadow-lg rounded"
        style={{ width: "100%", maxWidth: "400px", backgroundColor: "#fff" }}
      >
        <h2 className="text-center mb-4">Login</h2>
        <Form onSubmit={handleLogin}>
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
          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3 w-100">
            Login
          </Button>
          <div className="d-flex text-center justify-content-center align-items-center">
            Don't have an account?
            <span
              onClick={() => navigate("/register")}
              style={{
                color: "blue",
                cursor: "pointer",
                marginLeft: "5px",
                textDecoration: "underline",
              }}
            >
              Register
            </span>
          </div>
        </Form>
      </div>

      <ToastContainer position="bottom-end" className="mb-5 mr-4">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          bg={toastVariant}
          delay={3000}
          autohide
        >
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
};

export default Login;
