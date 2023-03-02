import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const SearchBarComponent = () => {
    return (
        <div className="searchBar">
            <Row>
                <Col md={2}>
                    <Form.Group class="form-floating">
                        <Form.Control as="select" id="floatingInput">
                            <option>Włochy</option>
                            <option>Francja</option>
                            <option>Portugalia</option>
                        </Form.Control>
                        <Form.Label for="floatingInput">Kraj</Form.Label>
                    </Form.Group>
                    <div class="form-floating mb-3"></div>
                </Col>
                <Col md={2}></Col>
                <Col md={2}></Col>
                <Col md={2}></Col>
                <Col md={2}></Col>
                <Col md={2}></Col>
            </Row>
        </div>
    );
};

export default SearchBarComponent;
