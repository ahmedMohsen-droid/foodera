import {Navbar,Container,Nav} from 'react-bootstrap';
import './Navs.css'
import logo from './../../assets/logo.png';
import { Link } from "react-scroll";
const Navs =()=>{
    return(
        <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} title='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to='Home' >Home</Link>
            <Link  to="About-Us">About Us</Link>
            <Link to="exp">Explore Food</Link>
            <Link to="reviewes">Reviews</Link>
            <Link to="faq">FAQ</Link>
          </Nav>
          <Nav>
            <Nav.Link id='last-nav'>1800 789 454</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default Navs;