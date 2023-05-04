import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {FaMapPin, FaPercent} from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { AiFillStar } from "react-icons/ai";
import { BsCurrencyRupee } from "react-icons/bs";

function Single() {
  let [char1, setchar1] = useState()
  let [status,setstatus]=useState(false);
  const[mainimg,setmainimg]=useState();

  const {id}=useParams();
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(function (response) {
        // handle success
        setchar1(response.data);
        setmainimg(response.data.image)
        setstatus(true)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
if(status)
{
  return (
    <div className="Shop">
      <div className="">
        <div className="row g-0">
        <div className='col-2 data1'>
        <img src={mainimg} width='150px' height='auto' className='image m-2'></img>
          </div>
          <div className='col-4'>
                  <img src={mainimg} width='400px' height='400px' className='image m-2'></img>
                    <Button  className='m-2 fs-5' style={{color:'black',backgroundColor:'white',borderColor:'black'}}>ADD TO CART</Button>
                    <Button className='m-2 fs-5' style={{backgroundColor:'#6998AB',borderColor:'#6998AB'}}>BUY NOW</Button>
          </div>
          <div className='col-6'>
                    <div className='d-flex'><h5 className='m-2 text-muted'>Name:</h5><h4 className='m-1' style={{position:'relative',bottom:'-5px',fontSize:'21px'}}>{char1.title}</h4></div>
                    <div className='d-flex'><h5 className='m-2 text-muted'>Products :</h5><h4 className='m-1' style={{position:'relative',bottom:'-5px',fontSize:'21px'}}>{char1.rating.count}</h4></div>
                    <div className='d-flex'>
                    <h6 className='ms-2 col-2' style={{fontWeight:'700',fontSize:'25px'}}><BsCurrencyRupee></BsCurrencyRupee>{char1.price}</h6>
                    <Button className='ms-2' style={{color:'white',backgroundColor:'#23BB75',borderColor:'#23BB75'}}>{char1.rating.rate}  <AiFillStar></AiFillStar></Button>
                    </div>
                    <h5 className='m-2 fs-6 text-muted pb-3'>Free Delivery</h5>
                    <div>
                      <h5 className='ms-2'>Product Details</h5>
                      <div className='text-muted'>
                      <p className='d-flex' style={{position:'relative',fontSize:'17px'}}><span className='ms-2 text-muted'>Name :</span><span className='ms-2' style={{position:'relative'}}>{char1.title}</span></p>
                      <p className='d-flex' style={{position:'relative',top:'-7px',fontSize:'17px'}}><span className='ms-2 text-muted'>Products :</span><span className='ms-2' style={{position:'relative'}}>{char1.rating.count}</span></p>
                      <p className='ms-2' style={{position:'relative',top:'-14px',fontSize:'17px'}}>Description : {char1.description}</p>
                      <p className='ms-2' style={{position:'relative',top:'-19px',fontSize:'17px'}}>Price : {char1.price}</p>
                      <p className='ms-2' style={{position:'relative',top:'-23px',fontSize:'17px'}}>Warranty Period : 1 Year</p>
                      <p className='ms-2' style={{position:'relative',top:'-25px',fontSize:'17px'}}>Warranty Type : Repair or Replacement</p>
                      <p className='ms-2' style={{position:'relative',top:'-30px',fontSize:'17px'}}>Country of Origin : India</p>
                      </div>
                    </div>
                    </div>
        </div>
      </div>
    </div>
  )
}
else{
  return
  <>char</>
}
  }
export default Single;