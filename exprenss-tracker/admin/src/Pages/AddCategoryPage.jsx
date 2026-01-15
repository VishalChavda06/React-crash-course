import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

const AddCategoryPage = () => {
    return (
        <Container className="mt-4">
            <Card className="mx-auto" style={{ maxWidth: "500px" }}>
                <Card.Body>
                    <Card.Title>Add Category</Card.Title>

                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Category Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter category" />
                        </Form.Group>

                        <Button variant="success">
                            Add Category
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default AddCategoryPage;
