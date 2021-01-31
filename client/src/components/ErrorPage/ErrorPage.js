// import './ErrorPage.css';

import { Container } from "react-bootstrap";

function ErrorPage() {
    return (
        <div className="ErrorPage text-center align-middle">
            <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404">
                        <Container className="align-middle">
                            <h1 className="display-1">404</h1>
                            <h4 className="display-4">Oops! Page not found.</h4>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ErrorPage;  