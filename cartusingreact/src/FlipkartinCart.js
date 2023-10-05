import React,{useEffect, useState} from 'react';
import './FlipkartinCart.css';
import dataRef from './Firebase';
function FlipkartinCart() {
  const [getdata,setGetdata]=useState({});
  useEffect(()=>{
    dataRef.child('satthi').on('value',data=>{
        setGetdata(data.val());
    })
  },[]);
  const deleteHandler = key=>{
    dataRef.child(`satthi/${key}`).remove(
        err=>{
            if(err){
                console.log(err);
            }
        }
    );
    }
  var a=0;
  var b=0;
  const len=getdata && Object.keys(getdata).length;
  getdata && Object.keys(getdata).map(key=>{a=a+(parseInt((getdata[key].actualcost).replace(/\,/g,'')));
                                            b=b+(parseInt((getdata[key].actualcost).replace(/\,/g,''))-parseInt((getdata[key].cost).replace(/\,/g,'')))})
  
    if(len!==null){  
    return (
    <div>
        <div className='b'> 
            <div className='b1'>
                <div className='b2'>
                    <div className='b2_1'>
                        From Saved Addresses
                    </div>
                    <div className='b2_2'>
                        <button>Enter Delivery Pincode</button>
                    </div> 
                </div>
                <div className='b3'>
                        {
                            getdata && Object.keys(getdata).map(key=>
                                <div>
                                    
                                    <div className='f'>
                                        <div className='f1'>
                                            <img src={getdata[key].image} width={120} />
                                        </div>
                                        <div className='f2'>
                                            <div className='f2_1'>
                                                {getdata[key].name}
                                            </div>
                                            <div className='f2_2'>
                                                {getdata[key].ram}
                                            </div>
                                            <div className='f2_3'>
                                                <span className='f2_3_1'>{getdata[key].seller}</span>
                                                <span className='f2_3_2'><img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" width={75} /></span>
                                            </div>
                                            <div className='f2_4'>
                                                <span className='f2_4_1'><strike>&#8377;{getdata[key].actualcost}</strike></span>
                                                <span className='f2_4_2'><strong>&#8377;{getdata[key].cost}</strong></span>
                                                <span className='f2_4_3'>{getdata[key].off}</span>    
                                            </div>
                                            
                                        </div>
                                        <div className='f3'>
                                            <div className='f3_1'>
                                                Delivery by {getdata[key].deliverydate} | <strike>&#8377;40</strike> Free
                                            </div>
                                            <div className='f3_2' style={{padding:"40px"}}>
                                                <button className='btn btn-danger' onClick={()=>deleteHandler(key)}>Remove from Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                        }    
                </div>
                <div className='b4'>
                    <button>PLACE ORDER</button>
                </div>
            </div>
            <div className='c'>
                <div className='c1'>
                    PRICE DETAILS
                </div>
                <div className='c2'>
                    <div className='c2_1'>
                        <table>
                            <tr><th>Price ({len} item)</th><td>&#8377;{a.toLocaleString()}</td></tr>
                            <tr><th>Discount</th><td style={{color:"green"}}>-&#8377;{b.toLocaleString()}</td></tr>
                            <tr><th>Delivery Charges</th><td style={{color:"green"}}><strike style={{padding:"0 10px",color:"rgb(88, 88, 88)"}}>&#8377;40</strike>Free</td></tr>
                            <tr className='c2_1_1' ><th style={{fontSize:"22px",color:"black"}}>Total Amount</th><td style={{fontSize:"22px",color:"black",fontWeight:"bold"}}>&#8377;{(a-b).toLocaleString()}</td></tr>
                        </table>  
                        <h5>You will save &#8377;{b.toLocaleString()} on this order</h5>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

else{
    return(
        <div>
            <div class="cart_flipkart" id="cart_flipkart">
                <div class="cart_flipkart_1">
                    <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" />
                    <h3>Missing Cart Items?</h3>
                    <p>Login to see the items you added previously</p>
                    <button style={{backgroundColor:"orangered"}}>Login</button>
                </div>
            </div>
        </div>
    )
}
}
export default FlipkartinCart