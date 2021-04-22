import './style.css';
import {Row,Container,Col} from "react-bootstrap";

function Titre(){
    return(
        <div >
            <h2 className="titre" >Making the healthcare experience more human</h2>

            <Container className="prag">
                <Row>
                <Col md={4}><p> We want patients to find the perfect doctor and book an appointment in the most easy way.
                     The patient journey should be enjoyable, and that's why we are always next to them:
                      to help them find the best possible care.
                     Anytime, anywhere.</p></Col>

    <Col md={{ span: 4, offset: 3 }}><p>We also help doctors to better manage their practice and build their online reputation.
         With our integrated end-to-end solution, doctors are able not only to improve their online presence,
         but also to devote their time to what really matters: their patients.</p></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Titre