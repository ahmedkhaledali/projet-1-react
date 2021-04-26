import { Container,Row,Col } from 'react-bootstrap';

import './style.css';

function Titre2(){
    return (
        <div>
            <Container>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                    <p className="tt">Improve the lives of millions. Change yours forever</p>
<p className="st">More than 1400 team mates share our same vision,goals and passion.
     With offices in Warsaw, Barcelona,Istanbul, Rome, Bologna, Mexico City and Curitiba,
     our search for great talent never stops.</p>

                    </Col>
                    <Col md={3}></Col>
                </Row>
            </Container>
     
        </div>
    )
}
export default Titre2