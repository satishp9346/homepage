import React, { useState } from 'react'
import './rightpart.css'
import Specifications from './Specifications'
function Rightpart() {
    const [viewallfeatures,setViewallfeatures]=useState(false);
    const b={
        display: viewallfeatures ? "block" : "none"
    }
    const c={
        display: viewallfeatures ? "none" : "block"
    }
  return (
    <div>
        <div className="p">
            <div className="p1">
                <div className="p1_1">
                    <a href="#">Home &#10095; </a>
                    <a href="#"> Mobiles & Accessories &#10095; </a>
                    <a href="#"> Mobiles &#10095; </a>
                    <a href="#"> realme Mobiles &#10095; </a>
                    <p>realme C55</p>
                </div>
            </div>
            <div className="p2">
                realme C55(Sunshower, 128 GB) (8 GB RAM)
            </div>
            <div className="p3">
                    <h5>4.4 ★</h5>
                    <strong>26,014 Ratings & 1,488 Revievs</strong>
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" />
            </div>
            <div className="p4">
                Extra &#8377; 2000 off
            </div>
            <div className="p5">
                <div className="p5_1">&#8377;13,999</div>
                <strike>&#8377;15,999</strike>
                <p>12% off</p>
            </div>
            <div className="p6">
                + ₹49 Secured Packaging Fee
            </div>
            <div className="p7">
                <h5>Available offers</h5>
                <div className="p7_1">
                    <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" />
                    <span><strong>Bank Offer </strong> 5% Cashback on Flipkart Axis Bank Card <a id="blue">T&C</a></span>
                </div>
                <div className="p7_1">
                    <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" />
                    <span><strong>Special Price </strong> Get extra ₹2000 off (price inclusive of cashback/coupon) <a id="blue">T&C</a></span>
                </div>
                <div className="p7_1">
                    <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" />
                    <span><strong>Partner Offer </strong> Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000* <a id="blue">Know More</a></span>
                </div>
                <div className="p7_1">
                    <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" />
                    <span><strong>Partner Offer </strong> Purchase now & get 1 surprise cashback coupon in Future <a id="blue">Know More</a></span>
                </div>
                <div className="p7_1">
                    <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90" />
                    <span><strong>No cost EMI ₹4,667/month. </strong> Standard EMI also available <a id="blue">View Plans &#10095</a></span>
                </div>
                <div className="p7_1">
                    <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" />
                    <span>Buy Together And Save More on Bluetooth Earphones <a id="blue">T&C</a></span>
                </div>
                <div className="p7_1">
                    <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" />
                    <span>Buy Together And Save More on Bluetooth Earphones <a id="blue">T&C</a></span>
                </div>
                <div className="p7_1">
                    <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" />
                    <span><strong>Buy More, Save More </strong> Buy worth ₹5000 save ₹1000 <a id="blue">See all products</a> <a href="#" id="blue">T&C</a></span>
                </div>
            </div>
            <div className="p8">
                <form>
                    <div className="p8_1">
                        <div className="p8_1_1">
                            <input type="radio" id="without" name="Exchange" />
                        </div>
                        <label for="without">Buy without Exchange <strong>&#8377;13,999</strong></label><br/>
                    </div>
                    <div className="p8_2">
                        <div className="p8_2_1">
                            <input type="radio" id="with" name="Exchange" />
                        </div>
                        <label for="with">Buy with Exchange <strong>up to &#8377;10,050 off</strong><p>Enter pincode to check if exchange is available</p></label>
                    </div>
                </form>

            </div>
        </div>

        <div className="q">
        <div className="q1">
            <table style={{width:"100%"}}>
                <tr>
                    <th>Warranty</th>
                    <td style={{paddingLeft: "10px",fontSize: "18px"}}>1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories</td>
                </tr>
                <tr>
                    <th>Color</th>
                    <td>
                        <div className="q1_1">
                        <div className="q1_1_1"><a href="#"><img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/l/m/-original-imagp55fu6uq2jch.jpeg?q=70" /></a></div>
                        <div className="q1_1_1" style={{border:"3px solid rgb(44, 155, 247)"}}><a href="#"><img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/x/x/-original-imagp55frhhddu6n.jpeg?q=70" /></a></div>
                        <div className="q1_1_1"><a href="#"><img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/d/b/-original-imagp9s9wfzp8ghf.jpeg?q=70" /></a></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>Storage</th>
                    <td>
                        <button className="q1_2">64 GB</button>
                        <button className="q1_2" style={{border:"3px solid rgb(44, 155, 247)"}}>128 GB</button>
                    </td>
                </tr>
                <tr>
                    <th>RAM</th>
                    <td>
                        <button className="q1_2">4 GB</button>
                        <button className="q1_2">6 GB</button>
                        <button className="q1_2" style={{border:"3px solid rgb(44, 155, 247)"}}>8 GB</button>
                    </td>
                </tr>
                <tr>
                    <th>Delivery</th>
                    <td>
                        <div className="q1_3">
                            <i class="material-icons" style={{color: "rgba(0, 0, 0, 0.514)",fontSize: "18px"}}>add_location</i>
                            <input type="text" placeholder="Enter Delivery Pincode"/>
                            <a href="#">Check</a>
                        </div>
                        <div className="q1_4">
                            <h5 style={{color:"black",fontWeight:"bold"}}>Delivery by 30 Sep, Saturday </h5>
                            <a href="#">Free <strike>₹40</strike></a>
                            <i class="fa fa-question-circle" style={{color:"rgba(0, 0, 0, 0.459)",padding: "5px"}}></i>
                        </div>
                        <div className="q1_5">
                            if ordered berfore 9:15 PM
                        </div>
                        <div className="q1_6">
                            <a href="#">View Details</a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>Highlights</th>
                    <td>
                        <div className="q1_7">
                            <div className="q1_8">
                                <ul>
                                    <li>8 GB RAM | 128 GB ROM | Expandable Upto 1 TB</li>
                                    <li>17.07 cm (6.72 inch) Full HD+ Display</li>
                                    <li>64MP + 2MP | 8MP Front Camera</li>
                                    <li>5000 mAh Battery</li>
                                    <li>Helio G88 Processor</li>
                                </ul>
                            </div>
                            <div className="q1_9">
                                <h5 style={{fontWeight:"bold",fontSize:"18px",color:"rgba(0, 0, 0, 0.537)"}}>Easy Payment Options</h5>
                                <ul>
                                    <li>No cost EMI starting from ₹4,667/month</li>
                                    <li>Cash on Delivery</li>
                                    <li>Net banking & Credit/ Debit/ ATM card</li>
                                    <div className="q1_6">
                                        <a href="#">View Details</a>
                                    </div>
                                </ul>
                            </div>
                        </div>

                    </td>
                </tr>
                <tr>
                    <th>Seller</th>
                    <td>
                        <div className="q1_10">
                            <h5>ECOMTAMSINRetail</h5>
                            <a href="#">5 ★</a>
                        </div>
                        <ul>
                            <li>7 Days Service Center Replacement/Repair
                            <i class="fa fa-question-circle" style={{color:"rgba(0, 0, 0, 0.459)",padding: "5px"}}></i>
                            </li>
                            <li>GST invoice available 
                            <i class="fa fa-question-circle" style={{color:"rgba(0, 0, 0, 0.459)",padding: "5px"}}></i>
                            </li>
                            <div className="q1_6">
                                <a href="#">See other sellers</a>
                            </div>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <img src="https://rukminim2.flixcart.com/lockin/100/100/images/CCO__PP_2019-07-14.png?q=50" width={500} />
                    </td>
                </tr>
                <tr>
                    <th>Description</th>
                    <td style={{paddingLeft:"10px"}}>Carry a sophisticated smartphone with you that allows you to multitask effortlessly and continue working no matter how challenging the day appears to be. The 64 MP AI camera of the Realme C55 enables you to snap stunning, high-quality photographs that capture every detail with remarkable clarity. Get a fantastic visual experience as well with the 17.07 cm (6.72) 90 Hz FHD+ display, which can captivate and excite you. Perceive astounding speed and faultless efficiency with up to 16 GB of dynamic RAM, as well. Whether you're viewing a high-definition video, playing graphics-intensive video games, or running many programmes at once, 16 GB of dynamic RAM offers a seamless and responsive user experience without lag or glitches.</td>
                </tr>
            </table>
        </div>
    </div>
    <div className='r'>
        <div className='r1'>
            <h1 style={{fontSize:"29px",fontWeight:"bold",paddingLeft:"30px"}}>Product Description</h1>
        </div>
        <div className='r2'>
            <div className='r2_1'>
                <h3>realme C55's Mini Capsule</h3>
                <p>The realme C55's Mini Capsule shows low battery warnings, the phone's charging status, and data use. Also, it displays your daily walking distance and step count, making your interaction with the phone seamless.</p>
            </div>
            <div className='r2_2' style={{paddingLeft:"80px"}}>
                <img src="https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/3326f6998eac4db5af31f9b711639530_18ae262bc09_C55-Sunshower-Image1.png?q=90" width={220} height={220}/>
            </div>
        </div>

        <div className='r2'>
            <div className='r2_2' style={{paddingLeft:"30px",paddingRight:"30px"}}>
                <img src="https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/4e0eb304175f45e2a0a57b15f22efee7_18ae262d2a1_C55-Sunshower-Image2.png?q=90" width={200} height={200}/>
            </div>
            <div className='r2_1'>
                <h3>64 MP AI Camera</h3>
                <p>You can snap beautiful, high-quality pictures that catch every detail with astounding clarity thanks to the 64 MP AI camera in the C55. In addition, regardless of whether you're an expert, you can effortlessly capture pictures that are of a professional calibre.</p>
            </div>
        </div>
        <div className='viewallfeatures' style={c} >
            <p onClick={()=>setViewallfeatures(true)}>View all features</p>
        </div>
        <div style={b}>
        <div className='r2'>
            <div className='r2_1'>
                <h3>Dazzling FHD+ Display</h3>
                <p>Get a superior visual experience with the 17.07 cm (6.72) 90 Hz FHD+ display that can keep you fascinated and delighted. Because of the 90 Hz refresh rate, navigating across web pages, social media, and other apps is exceptionally fluid and lag-free.</p>
            </div>
            <div className='r2_2' style={{paddingLeft:"80px"}}>
                <img src="https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/5e7a8079461a48ebb9a9355522d77f5b_18ae262e54e_C55-Sunshower-Image3.png?q=90" width={200} height={200}/>
            </div>
        </div>

        <div className='r2'>
            <div className='r2_2' style={{paddingLeft:"30px",paddingRight:"30px"}}>
                <img src="https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/877dd09802ca4f8fb767a3e156b83f7b_18ae262ff27_C55-Sunshower-Image4.png?q=90" width={200} height={200}/>
            </div>
            <div className='r2_1'>
                <h3>Powerful SUPERVOOC Charge</h3>
                <p>With a 33 W SUPEVOOC charge, enjoy blazing-fast charging that instantly charges up your smartphone. Also, a large 5000 mAh battery allows you to use the device for hours at a time without interruption when streaming music, streaming movies, or playing games, all without ever being concerned about the battery running out.</p>
            </div>
        </div>

        <div className='r2'>
            <div className='r2_1'>
                <h3>Sleek Design</h3>
                <p>This phone's sleek and sophisticated design, which measures just 7.89 mm thick, enhances your sense of style. A magnificent impact is also produced by the Sunshower Design when it is exposed to sunshine, illuminating every moment.</p>
            </div>
            <div className='r2_2' style={{paddingLeft:"80px"}}>
                <img src="https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/18dc76d1fb0a4260be8de000c9f9e5aa_18ae263455c_C55-Sunshower-Image6.png?q=90" width={200} height={200}/>
            </div>
        </div>

        <div className='r2'>
            <div className='r2_2' style={{paddingLeft:"30px",paddingRight:"30px"}}>
                <img src="https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/f2a7aeb9bc004ed5adbc195f82a98816_18701ee77ad_Upto16GBDynamicRAM.png?q=90" width={200} height={200}/>
            </div>
            <div className='r2_1'>
                <h3>Dynamic RAM</h3>
                <p>Witness stupendous speed and flawless multitasking with up to 16 GB of dynamic RAM. 16 GB of dynamic RAM provides a fluid and reactive user experience, free of latency or glitches, whether you're watching high-definition video, playing graphics-intensive video games, or running numerous programmes simultaneously. Every day, at your fingertips, reap the benefits of a quick, effective, and pleasurable smartphone experience.</p>
            </div>
        </div>

        <div className='r2'>
            <div className='r2_1'>
                <h3>Mediatek Helio G88 Chipset</h3>
                <p>With the Mediatek Helio G88 processor, enjoy processing power that is blazingly quick and flawless in multitasking. This potent technology offers effective performance, fluid gameplay, and quicker app loading times, making your day smooth and productive.</p>
            </div>
            <div className='r2_2' style={{paddingLeft:"80px"}}>
                <img src="https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/b3fe24f7a48b4cad873065f04848d020_18ae263773e_C55-Sunshower-Image5.png?q=90" width={200} height={200}/>
            </div>
        </div>
        </div>
    </div>

    <div className='s'>
        <Specifications></Specifications>
    </div>

    </div>
  )
}

export default Rightpart