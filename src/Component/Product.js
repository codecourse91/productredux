import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaBehance, FaPercent } from "react-icons/fa";
import { BsCurrencyRupee } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { Nav, Navbar, Container, Form, Row, Col, Button ,Offcanvas} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Product() {
  let [char, setchar] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products/')
      .then(function (response) {
        // handle success
        setchar(response.data.products);
        console.log(response.data.products);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  const searchdata=(name)=>
  {
    axios.get(`https://dummyjson.com/products/search?q=${name}`)
    .then(function (response) {
      // handle success
      setchar(response.data.products);
      console.log(response.data.products);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  // category
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const category=(name1)=>
  {
    axios.get(`https://dummyjson.com/products/category/${name1}`)
    .then(function (response) {
      // handle success
      setchar(response.data);
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="#047BD5" className='nav'>
        <Container>
          <Navbar.Brand href="#home" style={{ fontSize: '20px', fontWeight: '600' }}>Products</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Form className="d-flex">
              <input type='text'
                style={{ width: '350px' }}
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e)=>{searchdata(e.target.value)}}
              />
              <Button style={{ backgroundColor: '#000', borderColor: '#000' }}>Search</Button>
              <Button style={{ backgroundColor: '#000', borderColor: '#000' ,marginLeft:'10px'}} onClick={handleShow}>Category</Button>
    {/* category start */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Products</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Button onClick={()=>category('smartphones')}>smartphones</Button>
          <Button onClick={()=>category('laptops')}>laptops</Button>
          <Button onClick={()=>category('fragrances')}>fragrances</Button>
          <Button onClick={()=>category('skincare')}>skincare</Button>
          <Button onClick={()=>category('groceries')}>groceries</Button>
          <Button onClick={()=>category('home-decoration')}>home-decoration</Button>
          <Button onClick={()=>category('furniture')}>furniture</Button>
          <Button onClick={()=>category('tops')}>tops</Button>
          <Button onClick={()=>category('womens-dresses')}>womens-dresses</Button>
          <Button onClick={()=>category('womens-shoes')}>womens-shoes</Button>
          <Button onClick={()=>category('mens-shirts')}>mens-shirts</Button>
          <Button onClick={()=>category('mens-shoes')}>mens-shoes</Button>
          <Button onClick={()=>category('mens-watches')}>mens-watches</Button>
          <Button onClick={()=>category('womens-watches')}>womens-watches</Button>
          <Button onClick={()=>category('womens-bags')}>womens-bags</Button>
          <Button onClick={()=>category('womens-jewellery')}>womens-jewellery</Button>
          <Button onClick={()=>category('sunglasses')}>sunglasses</Button>
          <Button onClick={()=>category('automotive')}>automotive</Button>
          <Button onClick={()=>category('motorcycle')}>motorcycle</Button>
          <Button onClick={()=>category('lighting')}>lighting</Button>
        </Offcanvas.Body>
      </Offcanvas>
      {/* category end */}
            </Form>
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="/" style={{ fontSize: '18px', fontWeight: '600' }}>Home</Nav.Link>
              <Nav.Link href="about" style={{ fontSize: '18px', fontWeight: '600' }}>About</Nav.Link>
              <Nav.Link href="contact" style={{ fontSize: '18px', fontWeight: '600' }}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="d-flex row g-0">
      <div className="card">
        <div className="row g-0">
          {
            char.map((a) => {
                return (
                  <div className='col-lg-4 col-md-6 col-sm-12 data1'>
                    <div className="">
                      <div className="card-body" style={{ position: 'relative' }}>
                        {/* <h1>{a.id}</h1> */}
                        <div className='dataimg'>
                          <a href={`/products/${a.id}`}><img src={a.thumbnail} className="img-fluid"></img></a>
                        </div>
                        <div className='detail'>
                          <h6 style={{ color: '#800000' }}><span>Title : </span>{a.title}</h6>
                          <h6><span>Brand :</span><p className='brand'>{a.brand}</p></h6>
                          <h6 className='d-flex cat'><span>Category : </span>{a.category}<p className='st1'>Stock : <span className='stock'>{a.stock}</span></p></h6>
                          <h6 className='dis'><span>Discount : </span>{a.discountPercentage}<FaPercent style={{ fontSize: '10px' }}></FaPercent></h6>
                          <div className="d-flex">
                          <h5 className='price2'><BsCurrencyRupee></BsCurrencyRupee>{a.price1=a.price*a.discountPercentage/100}</h5>
                          <h5 className='price1 col-8'><BsCurrencyRupee></BsCurrencyRupee>{a.price2=a.price-a.price1}<span className="text-muted ms-1"> onwards</span></h5>
                            <h5 className='price col-4'><BsCurrencyRupee></BsCurrencyRupee>{a.price}</h5>
                          </div>
                          <h6 className="d-flex">
                            <p className='star'><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar></p>
                            <p className='rat'><span></span>{a.rating} <AiFillStar></AiFillStar></p>
                          </h6>
                        </div>
                        <Link to={`/products/${a.id}`} className="btn">Shop Now!</Link>
                      </div>
                    </div>
                  </div>
                )

              })
          }
        </div>

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
    </div>

  );

}

export default Product;