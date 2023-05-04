import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {FaMapPin, FaPercent} from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { AiFillStar } from "react-icons/ai";
import { BsCurrencyRupee } from "react-icons/bs";

function Products() {
  let [char, setchar] = useState()
  let [char1, setchar1] = useState()
  let [status,setstatus]=useState(false);
  let [img,setimg]=useState([]);
  const[mainimg,setmainimg]=useState(img[0]);

  const {id}=useParams();
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(function (response) {
        // handle success
        setchar1(response.data);
        setchar(response.data.images)
        setmainimg(response.data.images[0])
        setimg(response.data.images)
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
          {
            <div className='d-flex'>
                  <div className='col data1'>
                    {
                      img.map((image)=>
                      {
                        return(
                          <div>
                            <img src={image} width='150px' className='image m-2 ms-4' onClick={()=>setmainimg(image)}></img>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className='col-4'>
                  <img src={mainimg} width='400px' height='auto' className='image m-2'></img>
                    <Button  className='m-2 fs-5' style={{color:'black',backgroundColor:'white',borderColor:'black'}}>ADD TO CART</Button>
                    <Button className='m-2 fs-5' style={{backgroundColor:'#F7A8CA',borderColor:'#F7A8CA'}}>BUY NOW</Button>
                    <div>
                      {
                        // char1.map((a)=>
                        // {
                        //   return(
                        //    <div>
                        //     <a href={`/products/${a.id}`}><img src={a.thumbnail} className="img-fluid"></img></a>
                        //      {/* <a href={`/products/${a.id}`}><img src={a.thumbnail} onClick={()=>setsmallimg()} width='100px' className='m-3'></img></a> */}
                        //    </div>
                        //     )
                        // })
                        char.map((a) => {
                      return (
                        <a href={`/products/${char1.id}`}><img src={char1.thumbnail} className="img-fluid ms-2" width='75px'></img></a>
                        )})
                  }
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='d-flex'><h5 className='m-2 text-muted'>Name :</h5><h4 className='m-1' style={{position:'relative',bottom:'-5px',fontSize:'21px'}}>{char1.title}</h4></div>
                    <div className='d-flex'><h5 className='m-2 text-muted'>Brand :</h5><h4 className='m-1' style={{position:'relative',bottom:'-5px',fontSize:'21px'}}>{char1.brand}</h4></div>
                    <h6 className='ms-2' style={{fontWeight:'700',fontSize:'25px',textDecoration:'line-through'}}><BsCurrencyRupee></BsCurrencyRupee>{char1.price}</h6>
                    <div className='d-flex'>
                    <h5 style={{display:'none'}}><BsCurrencyRupee></BsCurrencyRupee>{char1.price1=char1.price*char1.discountPercentage/100}</h5>
                          <h3 className='col-5'><BsCurrencyRupee></BsCurrencyRupee>{char1.price2=char1.price-char1.price1}<span className="text-muted ms-1 fs-5"> onwards</span></h3>
                          <h4 className='ms-2 col-4' style={{color:'green',fontSize:'20px',position:'relative',bottom:'-10px'}}>{char1.discountPercentage}<FaPercent style={{fontSize:'12px'}}></FaPercent> off</h4>
                      </div>
                    <Button className='ms-2' style={{color:'white',backgroundColor:'#23BB75',borderColor:'#23BB75'}}>{char1.rating}  <AiFillStar></AiFillStar></Button>
                    <h5 className='m-2 fs-6 text-muted pb-3'>Free Delivery</h5>
                    <div>
                      <h5 className='ms-2'>Product Details</h5>
                      <div className='text-muted'>
                      <p className='d-flex' style={{position:'relative',fontSize:'17px'}}><span className='ms-2 text-muted'>Name :</span><span className='ms-2' style={{position:'relative'}}>{char1.title}</span></p>
                      <p className='d-flex' style={{position:'relative',top:'-7px',fontSize:'17px'}}><span className='ms-2 text-muted'>Brand :</span><span className='ms-2' style={{position:'relative'}}>{char1.brand}</span></p>
                      <p className='ms-2' style={{position:'relative',top:'-14px',fontSize:'17px'}}>Description : {char1.description}</p>
                      <p className='ms-2' style={{position:'relative',top:'-19px',fontSize:'17px'}}>Price : {char1.price}</p>
                      <p className='ms-2' style={{position:'relative',top:'-23px',fontSize:'17px'}}>Warranty Period : 1 Year</p>
                      <p className='ms-2' style={{position:'relative',top:'-25px',fontSize:'17px'}}>Warranty Type : Repair or Replacement</p>
                      <p className='ms-2' style={{position:'relative',top:'-30px',fontSize:'17px'}}>Country of Origin : India</p>
                      </div>
                    </div>
                    </div>
                  </div>
          }
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
export default Products;