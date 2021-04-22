import './style.css';
import {Row,Container,Col} from "react-bootstrap";

function Titre1() {
    return(
        <div>
<Container className="cont-titre1">
    <Row>
        <Col md={3}>
            <h2> We are a global company
with local culture</h2>
        </Col>
        
    </Row>
</Container>
        </div>
    )
    
}

export default Titre1