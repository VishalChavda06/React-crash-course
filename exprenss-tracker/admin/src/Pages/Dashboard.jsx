import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={2} className="bg-light min-vh-100">
                    <Sidebar />
                </Col>

                <Col md={10} className="p-4">
                    <h3>Dashboard</h3>

                    <Row className="mt-4">
                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Total Expenses</Card.Title>
                                    <Card.Text>₹ 10,000</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Total Categories</Card.Title>
                                    <Card.Text>5</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
