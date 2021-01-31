import { Form, Col, Button } from "react-bootstrap";
import {
  Link
} from "react-router-dom";

function Resume() {
  return (
    <div className="Landing text-center">
      <div>
      <Button variant="primary" type="submit" onClick="window.location.replace(/builder)">
    <Link to="/builder">Create a resume</Link>
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
