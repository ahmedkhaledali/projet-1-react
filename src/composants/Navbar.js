import { Navbar} from "react-bootstrap";
function Nave(){
  return(
<div>    
<Navbar>
  <Navbar.Brand href="#home">ali
      </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
  </Navbar.Collapse>
  </Navbar>
  </div> 
  )
}
export default Nave