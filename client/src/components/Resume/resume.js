import { Form, Col, Button } from "react-bootstrap";

function Resume() {
  return (
    <div className="Landing text-center">
      <div>
      <Button variant="primary" type="submit">
    Create a Resume
  </Button>
        <h2>Or</h2>
        <Form>
          <Form.File id="custom-file" label="Upload a Resume" custom />
          <Button type="submit">Submit</Button>
        </Form>


      </div>
    </div>
  );
}

export default Resume;
