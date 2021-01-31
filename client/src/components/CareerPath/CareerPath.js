import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CareerPath() {
    return (
        <div className="CareerPath text-center mt-3">
            <h4 className="display-4">Please upload a resume or build one</h4>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <input type="file" name="file" onChange={this.onChangeHandler} />
                        <Button size="lg" variant="outline-primary">Upload a resume</Button>
                    </Col>
                    <Col><Link to="/builder"><Button size="lg" variant="outline-primary">Create a resume</Button></Link></Col>
                </Row>
            </Container>
        </div>
    );
}
export default CareerPath;  