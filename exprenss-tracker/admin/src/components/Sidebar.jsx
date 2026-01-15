import React from "react";
import { ListGroup } from "react-bootstrap";

const Sidebar = () => {
    return (
        <ListGroup variant="flush">
            <ListGroup.Item>Dashboard</ListGroup.Item>
            <ListGroup.Item>Add Category</ListGroup.Item>
            <ListGroup.Item>View Expenses</ListGroup.Item>
        </ListGroup>
    );
};

export default Sidebar;
