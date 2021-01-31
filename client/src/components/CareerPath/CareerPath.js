import { Container, Row, Col, Button } from "react-bootstrap";

function CareerPath() {
    return (
        <div className="CareerPath text-center mt-3">
            <h4 className="display-4">Please upload a resume or build one</h4>
            <Container className="mt-5">
                <Row>
                    <Col><Button size="lg" variant="outline-primary">Upload a resume</Button></Col>
                    <Col><Button size="lg" variant="outline-primary">Build a resume</Button></Col>
                </Row>
            </Container>
        </div>
    );
}
export default CareerPath;  