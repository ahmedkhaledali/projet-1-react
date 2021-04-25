import './style.css';
import {Row,Container,Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import flag from "./images/flag.png";
import visits from "./images/visits.png";
import patients from "./images/patients.png";
import doctors from "./images/doctors.png";


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
     style={{ width: '13rem',backgroundColor:'#fff',height: '270px',top:'15%'}}>
     <Card.Body>
       <Card.Title className="p1"><img src={flag} className="temoi" alt="flag" />  <p>Leader in 12 countries</p></Card.Title>
       <Card.Text>
         
          <p>Poland, Brazil, Mexico, Spain, Italy,
               Turkey, Colombia, Czech Republic,
                Portugal, Argentina, Peru and Chile</p>
        </Card.Text>
     </Card.Body>
   </Card>
        </Col>

        <Col  md={4} >
        <Card
     style={{ width: '13rem',backgroundColor:'#fff',height: '250px',top:'10px' }}>
     <Card.Body>
       <Card.Title className="p1"><img src={visits} className="temoi" alt="visits" /> <p>4.8 million appointments</p></Card.Title>
       <Card.Text>
         
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
     style={{ width: '13rem',backgroundColor:'#fff',height: '220px',top:'25%'}}>
     <Card.Body>
       <Card.Title className="p1"> <img src={patients} className="temoi" alt="patients" /> <p>61.9 mln unique patients</p></Card.Title>
       <Card.Text>
          
          <p>visit our websites each month</p>
        </Card.Text>
     </Card.Body>
   </Card>
        </Col>

        <Col  md={4} >
        <Card
     style={{ width: '13rem',backgroundColor:'#fff',height: '220px',top:'20%'}}>
     <Card.Body>
       <Card.Title className="p1" ><img src={doctors} className="temoi" alt="doctors" /> <p >92.5k active doctors</p></Card.Title>
       <Card.Text>
         
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