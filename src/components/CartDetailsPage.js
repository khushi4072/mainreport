import React, {useState} from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { productData1 } from './Atstaynextdata';
import { productData6 } from './Atstaynextprice';
import Footers from './Footer';
import {useNavigate} from 'react-router-dom';

export default function CartDetailsPage() {
    const [mm, setMM] = useState(productData6);
  const params = useParams();
  const mm1 = mm.filter((datas) => datas.id == params.id);

  const adult = localStorage.getItem('adult')
  const child = localStorage.getItem('child')
  const room = localStorage.getItem('room')
  const checkinn =localStorage.getItem('checkin')
  const checkoutt =localStorage.getItem('checkout')
    const diff =localStorage.getItem('numberOfDays')


    const navigate = useNavigate()

    const amunt = room*diff;
    console.log(amunt)
    const amunt2 = (amunt)*(mm1[0].price) 
    console.log(amunt2)
    console.log(mm1[0].price)
    
    localStorage.setItem('amunt' ,amunt2 );

    
   
  
  return (
    <div>
        <Navbar />
        <div className="container p-5">
            {mm1.map((elm)=>{
                return(
                    <div className="row">
                <div className="col-md-7">
                    <div className="heading-1" style={{borderBottom:'1px solid grey' , fontSize:'25px'}}>
                        <h3>Cart Items</h3>
                    </div>

                    <div className="cartDetails my-4 d-flex">
                        <div className="Images">
                            <img src={elm.imgs} style={{width:'150px' , height:'150px'}}></img>
                        </div>
                        <div className="Details mx-5">
                            <h6 style={{textTransform:'uppercase' , color:'blue' , letterSpacing:'3px'}}>{elm.roomtype}</h6>

                            <div className="locationtrip my-3">
                            <i className="fa-solid fa-location-dot" /> {elm.place}
                            </div>

                            {/* <div className="tourtype">
                            <p>Type Tour : Daliy Tour</p> 
                            </div> */}

                            <div className="departurDate">
                            <p>Checkin : {checkinn}</p> 
                            </div>
                            
                            <div className="Duration">
                            <p>Checkout : {checkoutt}</p> 
                            </div>

                            <div className="numberofdaysss">
                                {diff} Days to Stay = {diff} <i class="fa-solid fa-xmark" style={{fontSize:'10px'}}></i> {(elm.price)} = {diff * (elm.price)}
                            </div>

                            <div className="bookingDetails my-3">
                                <p>Adult : {adult} </p>
                                <p>Children : {child}</p>
                                <p>Number of Room : {room} = {room} <i class="fa-solid fa-xmark" style={{fontSize:'10px'}}></i> {diff * (elm.price)} = {(room)*diff * (elm.price)}</p>
                                <div className="total">
                                Total amount : ₹ {(room)*diff * (elm.price)}
                                </div>
                            </div>

                        </div>
                        <div className="Pricesss " style={{fontSize:'25px' , marginLeft:'34px'}}>
                        ₹ {elm.price}
                        </div>
                    </div>

                </div>

                <div className="col-md-4 mx-5">
                    <div className="carttotal">
                        <h3>Cart totals</h3>
                    </div>

                    <div className="cardtotalbox p-3" style={{border:'1px solid grey'}}>
                        <div className="box3" style={{display:'flex' , flexDirection:'column' , justifyContent:'center'}}>
                            <div className="d-flex justify-content-between my-3">
                            <span>Subtotal</span>
                            <span>₹ {(room)*diff * (elm.price)}</span>
                            </div>

                            <div className="d-flex justify-content-between">
                            <span>Total</span>
                            <span>₹ {(room)*diff * (elm.price)}</span>
                            </div>
                            
                            <center><button className="btn btn-primary my-3" onClick={()=>{navigate('/forms')}}>Proceed to checkout</button></center>
                        </div>

                        
                    </div>

                </div>

            </div>
                )
                
            })}
            
        </div>
        <Footers />
    </div>
  )
}
