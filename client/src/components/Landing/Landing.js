import './Landing.css';
import { Container } from "react-bootstrap";
import FadeIn from 'react-fade-in';

function Landing() {
    return (
        <div className="Landing">
            <FadeIn>
                <Container>
                    <div className="main-banner text-center">
                        <h1 className="display-1">Kynect</h1>
                        <h2>Connecting people to professions.</h2>
                    </div>
                </Container>
            </FadeIn>
        </div>
    );
}
export default Landing;  