import React from "react";
import { Container, Table } from "react-bootstrap";

const ViewTablePage = () => {
    return (
        <Container className="mt-4">
            <h4>Expenses List</h4>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Groceries</td>
                        <td>Food</td>
                        <td>₹ 2000</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Internet</td>
                        <td>Bills</td>
                        <td>₹ 1000</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};

export default ViewTablePage;
