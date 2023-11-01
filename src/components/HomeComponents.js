import React,{useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../images/carouselimg1.webp';
import carousel2 from '../images/carouselimg2.webp';
import carousel3 from '../images/carouselimg3.webp';
import safe1 from '../images/atraskisafe1.webp';
import safe2 from '../images/atraskisafe2.webp';
import safe3 from '../images/atraskisafe3.webp';
import safe4 from '../images/atraskisafe4.webp';
import rooms from '../images/rooms.jpg';
import beach from '../images/beach.jpg';
import lake from '../images/lake.jpg';
import camping from '../images/camping.jpg';
import trending from '../images/trending.jpg';
import mansion from '../images/Mansion.jpg';
import tea from '../images/tea.jpg';
// import './HomeComponents.css';
import Footer from './Footer';

import { productData } from './Atstaysdata';

export default function HomeComponents() {
  const [imgs, setImg] = useState(productData);

  const btnpressprev = () => {
    // const box = document.getElementById('box'); // Get the element by its id
  let box = document.querySelector('.product-container');

    if (box) {
      const width = box.clientWidth;
      box.scrollLeft -= width; // Use -= to scroll to the left
      console.log(width);
    } else {
      console.error('Element with id "box" not found.');
    }
  }
  
  const btnpressnext = () => {
    // const box = document.getElementById('box'); // Get the element by its id
  let box = document.querySelector('.product-container');

    if (box) {
      const width = box.clientWidth;
      box.scrollLeft += width; // Use += to scroll to the right
      console.log(width);
    } else {
      console.error('Element with id "box" not found.');
    }
  }
    return (
      <>
        <div className="product-carousel">

<button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
<button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>

<div className="product-container">
  <div>
<img
  className="d-block mycard"
  src={rooms}
  alt="First slide"
  
  
/>
<p>rooms</p>
</div>

<div>
<img
  className="d-block mycard"
  src={beach}
  alt="First slide"
  
  
/>
<p>Beach</p>
</div>

<div>
<img
  className="d-block mycard"
  src={lake}
  alt="First slide"
  
  
/>
<p>Lakes</p>
</div>

<div>
<img
  className="d-block mycard"
  src={trending}
  alt="First slide"
  
  
/>
<p>Trending</p>
</div>

<div>
<img
  className="d-block mycard"
  src={camping}
  alt="First slide"
  
  
/>
<p>Camping</p>
</div>

<div>
<img
  className="d-block mycard"
  src={mansion}
  alt="First slide"
  
  
/>
<p>Mansion</p>
</div>

<div>
<img
  className="d-block mycard"
  src={tea}
  alt="First slide"
  
  
/>
<p>Tea and Breakfast</p>
</div>

<div>
<img
  className="d-block mycard"
  src={rooms}
  alt="First slide"
  
  
/>
<p>rooms</p>
</div>

<div>
<img
  className="d-block mycard"
  src={rooms}
  alt="First slide"
  
  
/>
<p>rooms</p>
</div>

<div>
<img
  className="d-block mycard"
  src={rooms}
  alt="First slide"
  
  
/>
<p>rooms</p>
</div>

<div>
<img
  className="d-block mycard"
  src={rooms}
  alt="First slide"
  
  
/>
<p>rooms</p>
</div>


<div>
<img
  className="d-block mycard"
  src={rooms}
  alt="First slide"
  
  
/>
<p>rooms</p>
</div>


<div>
<img
  className="d-block mycard"
  src={rooms}
  alt="First slide"
  
  
/>
<p>rooms</p>
</div>


<div>
<img
  className="d-block mycard"
  src={rooms}
  alt="First slide"
  
  
/>
<p>rooms</p>
</div>
</div>



</div>  

<div className="container " style={{display:'flex' , flexWrap:'wrap',gap:'50px'}}>
{
  imgs.map((elm)=>{
    return(
      <>
      <div className=" " style={{display:'flex' }}>
        <div className="card mt-5" style={{ borderRadius: '15px', width: '280px', height: '320px', border:'none' }}>
                        <div className="images">
                          <img
                            src={elm.imges}
                            className="img-fluid"
                            style={{ height: '250px', width: '280px', borderRadius:'15px' }}
                          ></img>
                        </div>

                        <div className="tourinfo">
                          <p className="my-2 mx-2" style={{ textTransform: 'uppercase', fontSize: '13px' , fontWeight:'700' }}>
                            <i className="fa-solid fa-location-dot mx-1"></i>
                            {elm.place}
                          </p>
                          <h6 className="mx-3 ">{elm.trip}</h6>
                          <span className="" >
                            
                            {elm.days}
                          </span>
                          <span className="mx-3" style={{fontWeight:'700' , fontSize:'18px'}}>₹ {elm.price}</span>
                        </div>
                      </div>
                      </div>
      </>
    )
  })
}

</div>


    
    <div>
      <div className="container">
          <h2 className="mt-5">Our Commitment to Safe Holidays</h2>

          <div className="d-flex">
          <div className="Image text-center">
            <img src={safe1} className="img-fluid w-75"/>

            <div className="box text-center">
              <text className="heading1">Sanitized Premises</text>
              <p className="">Thoroughly sanitized commute Vehicles, Hotel rooms and premises</p>
            </div>
          </div>

          <div className="Image text-center">
            <img src={safe2} className="img-fluid w-75"/>

            <div className="box text-center">
              <text className="heading1">Sanitized Premises</text>
              <p className="">Thoroughly sanitized commute Vehicles, Hotel rooms and premises</p>
            </div>
          </div>


          <div className="Image text-center">
            <img src={safe3} className="img-fluid w-75"/>

            <div className="box text-center">
              <text className="heading1">Sanitized Premises</text>
              <p className="">Thoroughly sanitized commute Vehicles, Hotel rooms and premises</p>
            </div>
          </div>


          <div className="Image text-center">
            <img src={safe4} className="img-fluid w-75"/>

            <div className="box text-center">
              <text className="heading1">Sanitized Premises</text>
              <p className="">Thoroughly sanitized commute Vehicles, Hotel rooms and premises</p>
            </div>
          </div>
          </div>
      </div>  
    </div>


    



    </>
        );
}