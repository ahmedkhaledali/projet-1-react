import './style.css';
import { Button, Container,Col,Row } from 'react-bootstrap';
function Footer(){
    return(
        <div className="footer"> 
        <Container>
            <Row>
            <Col md={3}></Col>
            <Col md={6}>
            <p>Sounds interesting? Join us now!</p>
<Button variant="primary">SEE ALL CURRENT OPENINGS</Button>
<p>We are leaders in 11 countries: Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Colombia, Brazil, Argentina, Peru and Chile

This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.

www.docplanner.com © 2021</p>
            </Col>
            <Col md={3}></Col>
            </Row>
        </Container>

        </div>
    )
}
export default Footer