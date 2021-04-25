import './style.css';
import { Navbar} from "react-bootstrap";
import logo  from "./images/logo.svg";
function Nave(){
  return(
<div>    
<Navbar >
  <Navbar.Brand href="#home"><img src={logo} className="logo" alt="logo" />
      </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-center" >
    <Navbar.Text className="ml-auto">
      <a href="index.html">About us</a>
      <a href="index.html" className="pl-3">Career</a>
      <a href="index.html" className="pl-3">Departements</a>
    </Navbar.Text>
  </Navbar.Collapse>
  </Navbar>
  </div> 
  )
}
export default Nave