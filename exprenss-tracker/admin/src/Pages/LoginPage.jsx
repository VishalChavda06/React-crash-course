import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

const LoginPage = ({ setPage }) => {
    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: "350px" }}>
                <Card.Body>
                    <Card.Title className="text-center mb-3">
                        Login
                    </Card.Title>

                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        </Form.Group>

                        <Button
                            className="w-100"
                            onClick={() => setPage("dashboard")}
                        >
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default LoginPage;
