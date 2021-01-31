import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function CareerPath() {
    const [selectedFile, setSelectedFile] = useState([]);

    // useEffect(() => {
    //     onChangeHandler = event => {
    //         this.setState({
    //             selectedFile: event.target.files[0],
    //             loaded: 0,
    //         })
    //     }
    // });

    return (
        <div className="CareerPath mt-3">
            <h4 className="display-4 text-center">Please upload a resume or build one</h4>
            <Container className="mt-5 text-center">
                <Row>
                    <Col>
                        <input type="file" name="file" class="form-control-file" />
                        <Link to="/jobs"><Button size="lg" variant="outline-primary">Upload a resume</Button></Link>
                    </Col>
                    <Col>
                        <Link to="/builder"><Button size="lg" variant="outline-primary">Create a resume</Button></Link>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}
export default CareerPath;  