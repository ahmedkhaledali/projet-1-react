import './style.css';
import {Row,Container,Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function Temoi(){
    return(
        <div>
<Container className="cont-temoi">
    <Row>
        <Col md={4}>
            <h2> The world's biggest healthcare platform</h2>
<p>We work from 7 offices all over the world, bringing Docplanner Group to life in a dozen countries.</p>
        </Col>
        <Col  md={4} >
        <Card
     style={{ width: '13rem',backgroundColor:'#fff',height: '250px'}}>
     <Card.Body>
       <Card.Title> Card Title </Card.Title>
       <Card.Text>
          <p>Leader in 12 countries</p>
          <p>Poland, Brazil, Mexico, Spain, Italy,
               Turkey, Colombia, Czech Republic,
                Portugal, Argentina, Peru and Chile</p>
        </Card.Text>
     </Card.Body>
   </Card>
        </Col>

        <Col  md={4} >
        <Card
     style={{ width: '13rem',backgroundColor:'#fff',height: '250px'}}>
     <Card.Body>
       <Card.Title> Card Title </Card.Title>
       <Card.Text>
         <p>4.8 million appointments</p>
         <p>booked last month</p>
        </Card.Text>
     </Card.Body>
   </Card>
        </Col>
    </Row>

    <Row>
    <Col md={4}>
            </Col>
        <Col  md={4} >
        <Card
     style={{ width: '13rem',backgroundColor:'#fff',height: '250px'}}>
     <Card.Body>
       <Card.Title> Card Title </Card.Title>
       <Card.Text>
          <p>61.9 mln unique patients</p>
          <p>visit our websites each month</p>
        </Card.Text>
     </Card.Body>
   </Card>
        </Col>

        <Col  md={4} >
        <Card
     style={{ width: '13rem',backgroundColor:'#fff',height: '250px'}}>
     <Card.Body>
       <Card.Title> Card Title </Card.Title>
       <Card.Text>
         <p>92.5k active doctors</p>
         <p>trust our solutions</p>
        </Card.Text>
     </Card.Body>
   </Card>
        </Col>
    </Row>
</Container>
        </div>
    )
}

export default Temoi