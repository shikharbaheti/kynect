// import './ErrorPage.css';

import { Container } from "react-bootstrap";

function ErrorPage() {
    return (
        <div className="ErrorPage text-center">
            <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404">
                        <Container>
                            <h3>Oops! Page not found</h3>
                            <h1><span>4</span><span>0</span><span>4</span></h1>

                            <h2>we are sorry, but the page you requested was not found</h2>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ErrorPage;  