import { useState ,useEffect} from "react";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaBehance, FaPercent } from "react-icons/fa";
import { BsCurrencyRupee} from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { Nav, Navbar, Container, Form, Row, Col, Button ,Offcanvas} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useDispatch} from 'react-redux'
import axios from 'axios';
import { add} from "../app/counter/counterSlice";
import { Link } from "react-router-dom";

function Counter (){
  let [val,setval]=useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/')
      .then(function (response) {
        // handle success
        setval(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const category=(name1)=>
  {
    axios.get(`https://fakestoreapi.com/products/category/${name1}`)
    .then(function (response) {
      // handle success
      setval(response.data);
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
    return(
    <>
     <Navbar collapseOnSelect expand="lg" bg="" className='nav'>
        <Container>
          <Navbar.Brand href="#home" style={{ fontSize: '20px', fontWeight: '600' ,letterSpacing:'5px',color:'#febd69'}}>PRODUCTS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Form className="d-flex">
              <input type='text'
                style={{ width: '350px' }}
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button style={{ backgroundColor: '#febd69', borderColor: '#febd69' ,color:'black',fontWeight:'600'}}>Search</Button>
              <Button style={{ backgroundColor: '#6998AB', borderColor: '#6998AB' ,marginLeft:'10px',color:'black',fontWeight:'600'}} onClick={handleShow}>Category</Button>
    {/* category start */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Products</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Button onClick={()=>category('electronics')}>electronics</Button>
          <Button onClick={()=>category('jewelery')}>jewelery</Button>
          <Button onClick={()=>category("men's clothing")}>men's clothing</Button>
          <Button onClick={()=>category("women's clothing")}>women's clothing</Button>
        </Offcanvas.Body>
      </Offcanvas>
      {/* category end */}
            </Form>
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="/" style={{ fontSize: '18px', fontWeight: '600' ,color:'white'}}>Home</Nav.Link>
              <Nav.Link href="about" style={{ fontSize: '18px', fontWeight: '600' ,color:'white'}}>About</Nav.Link>
              <Nav.Link href="contact" style={{ fontSize: '18px', fontWeight: '600' ,color:'white'}}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  <div className="container">
  <div className="row g-0">
      {
         val.map((a) => {
          return (
            <div className='col-3'>
              <div className='dataimg mt-4 '>
                    <Link to={`/single/${a.id}`} onClick={()=> dispatch(add(a.id))}><img src={a.image} className="img-fluid" style={{width:'230px',height:'280px'}}></img></Link>
                  </div>
                  <div className="mt-4 col-8 mx-3">
                    <h6 style={{fontWeight:'700'}}>{a.title}</h6>
                    <h6 style={{fontWeight:'700'}}><span className="text-muted" style={{fontWeight:'500'}}>Category : </span>{a.category}</h6>
                    <div className='d-flex'>
                    <h6 className="col-8" style={{fontWeight:'700',fontSize:'20px'}}>{a.price}<BsCurrencyRupee></BsCurrencyRupee></h6>
                    <h6 className="rounded rat pb-1" style={{backgroundColor:'#075e25',color:'white'}}>{a.rating.rate}<AiFillStar></AiFillStar></h6>
                    </div>
                    <h6 className="p1" style={{fontWeight:'700'}}><span className="text-muted" style={{fontWeight:'500'}}>Products : </span>{a.rating.count}</h6>
                  <Link to={`/single/${a.id}`} className="btn1"  style={{fontWeight:'600'}} onClick={()=> dispatch(add(a.id))}>Shop Now!</Link>
                  </div>
            </div>
          )

        })
      }
    </div>
  </div>
  <div>
        <div className='foot1 text-center py-5'>
          <Container>
            <Row>
              <div className='d-flex '>
                <Col><FaFacebookF className='my-3 mx-3 f_1'></FaFacebookF>
                  <FaTwitter className='my-3 mx-3 f_1'></FaTwitter>
                  <FaGooglePlusG className='my-3 mx-3 f_1'></FaGooglePlusG>
                  <FaLinkedinIn className='my-3 mx-3 f_1'></FaLinkedinIn>
                  <FaBehance className='my-3 mx-3 f_1'></FaBehance></Col>
              </div>
              <p className='py-3 fs-5'>All Right Reserved © 2021<span> Products</span></p>
            </Row>
          </Container>
        </div>
      </div>
    </>
    )
}
export default Counter;