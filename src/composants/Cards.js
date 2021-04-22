import './style.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Container,Col} from "react-bootstrap";



function Cards () {
    return(
        <div>
<Container className="cont-card">
    <Row>
    <Col md={4}>
  <Card
     
    style={{ width: '18rem',color:'white' ,backgroundColor:'darkturquoise',height: '400px'}}
    className="mb-2"
  >
    <Card.Body>
      <Card.Title> Card Title </Card.Title>
      <Card.Text className="text-card">
         <h1>For patients</h1>
         <h2>Find a doctor, book a visit and solve any health-related doubt</h2>
         <select className="liste">
             <option>Choose country</option>
                        <option value="http://www.doctoraliar.com">Argentina</option>
                        <option value="http://www.doctoralia.com.br">Brazil</option>
						<option value="http://www.doctoralia.cl">Chile</option>
						<option value="http://www.doctoralia.co">Colombia</option>
						<option value="http://www.znamylekar.cz">Czech</option>
						<option value="http://www.miodottore.it">Italy</option>
						<option value="http://www.doctoralia.com.mx">Mexico</option>
						<option value="http://www.doctoralia.pe">Peru</option>
						<option value="http://www.znanylekarz.pl">Poland</option>
						<option value="http://www.doctoralia.com.pt">Portugal</option>
						<option value="http://www.doctoralia.es">Spain</option>
						<option value="http://www.doktortakvimi.com">Turkey</option>
  </select>
       </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <Col md={4}>
  <Card
     
     style={{ width: '18rem',color:'white' ,backgroundColor:'#3d83df',height: '400px'}}
     className="mb-2"
   >
     <Card.Body>
       <Card.Title> Card Title </Card.Title>
       <Card.Text className="text-card">
         <h1>For doctors</h1>
         <h2>Save time managing visits and cut no-shows by half</h2>
         <select className="liste">
             <option>Choose country</option>
                        <option value="http://www.doctoraliar.com">Argentina</option>
                        <option value="http://www.doctoralia.com.br">Brazil</option>
						<option value="http://www.doctoralia.cl">Chile</option>
						<option value="http://www.doctoralia.co">Colombia</option>
						<option value="http://www.znamylekar.cz">Czech</option>
						<option value="http://www.miodottore.it">Italy</option>
						<option value="http://www.doctoralia.com.mx">Mexico</option>
						<option value="http://www.doctoralia.pe">Peru</option>
						<option value="http://www.znanylekarz.pl">Poland</option>
						<option value="http://www.doctoralia.com.pt">Portugal</option>
						<option value="http://www.doctoralia.es">Spain</option>
						<option value="http://www.doktortakvimi.com">Turkey</option>
  </select>
       </Card.Text>
     </Card.Body>
   </Card>
  </Col>
  <Col md={4}>

  <Card
     
     style={{ width: '18rem',color:'white' ,backgroundColor:'#1b2734', height: '400px'}}
     className="mb-2"
   >
     <Card.Body>
       <Card.Title> Card Title </Card.Title>
       <Card.Text className="text-card">
         <h1>For clinics</h1>
         <h2>Deliver an exceptional patient experience in your clinic</h2>

<select className="liste">
         <option >2 to 20 specialists</option>
		<option value="http://clinicas.doctoralia.com.br/software-de-gestao-para-clinicas-e-centros">Brazil</option>
		<option value="http://lekar.znamylekar.cz/pro-zarizeni">Czech</option>
		<option value="http://centrimedici.miodottore.it/saas/funzionalita">Italy</option>
		<option value="http://clinicas.doctoralia.com.mx/software-gestion-clinicas">Mexico</option>
		<option value="http://placowka.znanylekarz.pl/system-od-znanylekarz">Poland</option>
		<option value="http://clinicas.doctoralia.es/software-gestion-clinicas">Spain</option>
		<option value="http://kurumsal.doktortakvimi.com">Turkey</option>
</select>
<select className="liste">
        <option>More than 20 specialists</option>
        <option value="http://clinicas.doctoralia.com.br/tuotempo">Brazil</option>
        <option value="http://centrimedici.miodottore.it/marketplace/funzionalita">Italy</option>
        <option value="http://clinicas.doctoralia.com.mx/tuotempo">Mexico</option>
        <option value="http://placowka.znanylekarz.pl/poznaj-tuotempo">Poland</option>
        <option value="http://clinicas.doctoralia.es/tuotempo">Spain</option>
</select>
         
       </Card.Text>
     </Card.Body>
   </Card>

  </Col>
  </Row>
  </Container>
        </div>
    )
    
}
export default Cards