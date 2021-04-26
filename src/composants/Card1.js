import './style.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Container,Col} from "react-bootstrap";
import { Button } from 'react-bootstrap';
import warsaw from "./images/warsaw.png";
import barcelona from "./images/barcelona.png";
import bologna from "./images/bologna.png";
import curitiba from "./images/curitiba.png";
import istanbul from "./images/istanbul.png";
import rome from "./images/rome.png";
function Card1(){
    return (
        <div>
  <Container>
      <Row>
          <Col md={4}>

          <Card style={{ width: '18rem',top:'5%' }}>
          <img src={warsaw} className="" alt="warsaw" />
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text></Card.Text>
    <Button variant="primary">SEE OPENINGS</Button>
  </Card.Body>
</Card>
          </Col>
          <Col md={4}>
          <Card style={{ width: '18rem',top:'5%' }}>
          <img src={barcelona} className="" alt="barcelona" />
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text></Card.Text>
    <Button variant="primary">SEE OPENINGS</Button>
  </Card.Body>
</Card>
          </Col>
          <Col md={4}>

          <Card style={{ width: '18rem',top:'5%' }}>
          <img src={istanbul} className="" alt="istanbul" />
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text></Card.Text>
    <Button variant="primary">SEE OPENINGS</Button>
  </Card.Body>
</Card>
          </Col>
      </Row>


      <Row>
          <Col md={4}>

          <Card style={{ width: '18rem',top:'15%' }}>
          <img src={rome} className="" alt="rome" />
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text></Card.Text>
    <Button variant="primary">SEE OPENINGS</Button>
  </Card.Body>
</Card>
          </Col>
          <Col md={4}>
          <Card style={{ width: '18rem',top:'15%' }}>
          <img src={bologna} className="" alt="bologna" />
            <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text></Card.Text>
    <Button variant="primary">SEE OPENINGS</Button>
  </Card.Body>
</Card>
          </Col>
          <Col md={4}>

          <Card style={{ width: '18rem',top:'15%' }}>
          <img src={curitiba} className="" alt="curitiba" />
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text></Card.Text>
    <Button variant="primary">SEE OPENINGS</Button>
  </Card.Body>
</Card>
          </Col>
      </Row>

  </Container>
        </div>
    )
}
export default Card1