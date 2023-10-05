import React,{useState} from 'react'
//import {Navigate} from 'react-router-dom';
//import { Helmet } from 'react-helmet';
import './App.css';
import Leftpart from './Leftpart';
import Rightpart from './Rightpart';
import Mightbeintrested from './Mightbeintrested';
import Similarproducts from './Similarproducts'
import Footerpart from './Footerpart';
function App() {
    const [a,setA]=useState(false);
    const b={
        display: a ? "flex" : "none"
    }
    const [isActive,setIsActive]=useState(false);
    const handleFocus=()=>{
        setIsActive(true);
    }
    const handleBlur=()=>{
        setIsActive(false);
    }

  return (
    <div>
    <div className="login_popup" id="login_a" style={b}>  
    <div className="login_a" >
        <div className="close"><a onClick={()=>setA(false)}>&#10005;</a></div>
        <div className="login_a1">
            <div class="login_a1_1">
                <h2>Login</h2>
            </div>
            <div className="login_a1_2">
                <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className="login_a1_3">
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" />
            </div>
        </div>

        <div className="login_a2">
            <div className={isActive ? 'active' : ''} id="login_a2_1">
                <label for="input1">Enter Email/Mobile number</label>
                <input type="text" id="input1" autocomplete="off" onFocus={handleFocus} onBlur={handleBlur} />
            </div>
            <div className="login_a2_2">
                <p>By continuing, you agree to Flipkart's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.</p>
            </div>
            <div className="login_a2_3">
                <button>Request OTP</button>
            </div>
            <div className="login_a2_4">
                <a href="#">New to Flipkart? Create an account</a>
            </div>
        </div>
    </div>
    </div>

    <div className="head">
        <div className="flipkart">
            <div className='flip_1'><a href="https://www.flipkart.com/">Flipkart</a></div>
            <div className='flip_2'><a href=""><i>Explore <span>Plus</span></i></a></div>
        </div>
        <input type="search" placeholder="Search for products, brands and more" />
        <i className="fa fa-search"></i>
        <div className="login">
            <button><a onClick={()=>setA(true)} style={{color:"rgb(37,125,240"}}>Login</a></button>
            <div className="triangle"></div>
            <div className="drop">
                <div className="newcustomer">
                    <div className='newcustomer_1'>New customer?</div>
                    <div className='newcustomer_2'><a href="#" id="signup" onClick={()=>setA(true)}>Sign Up</a></div>
                </div>
                <a href="#">My Profile</a>
                <a href="#">Flipkart Plus Zone</a>
                <a href="#">Orders</a>
                <a href="#">Wishlist</a>
                <a href="#">Rewards</a>
                <a href="#">Gift Cards</a>
            </div>
        </div>
        <div className="becomeseller">
            <a href="#">Beacome a Seller</a>
        </div>
        <div className="more">
            <div className="main">More
            <div className="arrow down"></div>
            </div>   
            <div className="tri1"></div>
            <div className="d1">
                <a href="#">Notification Preferences</a>
                <a href="#">24x7 Customer Care</a>
                <a href="#">Advertise</a>
                <a href="#">Downloac App</a>  
            </div> 
        </div>
        <div className="cart">
            <i className="fa fa-shopping-cart" style={{"font-size":"25px","color":"#fff"}}></i>
            <a href="http://localhost:3002/FlipkartinCart" target="_blank">Cart</a>
        </div>
    </div>

    {/* <!-----------------------------------------------after head section----------------------------> */}

    <div className="first">
        <div className="a1">
            <div className="b1">Electronics
                <div className="arrow down1"></div>
            </div>

            <div className="table1">
                <table cellspacing="0" cellpadding="0">
                    <tr><th id="one"><div className="th">Mobiles <div className="tri"></div></div></th>
                        <th id="one"><div className="th">Mobile Accessories <div className="tri"></div></div></th>
                        <th id="one"><div className="th">Laptops <div className="tri"></div></div></th>
                        <td id="one">Televisions</td>
                        <th id="one"><div className="th">Featured <div className="tri"></div></div></th>
                    </tr>
                    <tr>
                        <td>Mi</td>
                        <td>Mobile Cases</td>
                        <td>Gaming Laptops</td>
                        <th><div className="th">Speakers <div className="tri"></div></div></th>
                        <td>Google Assistant Store</td>
                    </tr>
                    <tr>
                        <td>Realme</td>
                        <td>Headphones & Headsets</td>
                        <th><div className="th">Desktop PCs <div className="tri"></div></div></th>
                        <td>Home Audio Speakers</td>
                        <td>Laptops on Buyback Guarantee</td>
                    </tr>
                    <tr>
                        <td>Samsung</td>
                        <td>Power Banks</td>
                        <th><div className="th">Gaming & Accessories <div className="tri"></div></div></th>
                        <td>Home Theatres</td>
                        <td>Flipkart SmartBuy</td>
                    </tr>
                    <tr>
                        <td>Infinix</td>
                        <td>Screenguards</td>
                        <th><div className="th">Computer Accessories <div className="tri"></div></div></th>
                        <td>Soundbars</td>
                        <td>Li-Polymer Power Banks</td>
                    </tr>
                    <tr>
                        <td>OPPO</td>
                        <td>Memory Cards</td>
                        <td>External Hard Disks</td>
                        <td>Bluetooth Speakers</td>
                        <td>Sony PS4 Pro & Slim</td>
                    </tr>
                    <tr>
                        <td>Apple</td>
                        <td>Smart Headphones</td>
                        <td>Pendrives</td>
                        <td>DTH Set Top Box</td>
                        <td>Apple Products</td>
                    </tr>
                    <tr>
                        <td>Vivo</td>
                        <td>Mobile Cables</td>
                        <td>Laptop Skins & Decals</td>
                        <th><div className="th">Smart Home Automation <div className="tri"></div></div></th>
                        <td>Microsoft Store</td>
                    </tr>
                    <tr>
                        <td>Honor</td>
                        <td>Mobile Chargers</td>
                        <td>Laptop Bags</td>
                        <td>Google Nest</td>
                        <td>Lenovo Phab Series</td>
                    </tr>
                    <tr>
                        <td>Asus</td>
                        <td>Mobile Holders</td>
                        <td>Mouse</td>
                        <th><div className="th">Camera <div className="tri"></div></div></th>
                        <td>JBL Speakers</td>
                    </tr>
                    <tr>
                        <td>Poco X2</td>
                        <th><div className="th">Smart Wearable Tech <div className="tri"></div></div></th>
                        <th><div className="th">Computer Peripherals <div className="tri"></div></div></th>
                        <td>DSLR & Mirrorless</td>
                        <td>Smartphones On Buyback Guarantee</td>
                    </tr>
                    <tr>
                        <td>realme Narzo 10</td>
                        <td>Smart Watches</td>
                        <td>Printers & Ink Cartridges</td>
                        <td>Compact & Bridge Cameras</td>
                        <td>Philips</td>
                    </tr>
                    <tr>
                        <td>Infinix Hot 9</td>
                        <td>Smart Glasses (VR)</td>
                        <td>Monitors</td>
                        <td>Sports & Action</td>
                        <td>Dr. Morepen</td>
                    </tr>
                    <tr>
                        <td>IQOO 3</td>
                        <td>Smart Bands</td>
                        <th><div className="th">Tablets <div className="tri"></div></div></th>
                        <th><div className="th">Camera Accessories <div className="tri"></div></div></th>
                        <td>Complete Mobile Protection</td>
                    </tr>
                    <tr>
                        <td>iPhone SE</td>
                        <th><div className="th">Health Care Appliances <div className="tri"></div>  </div></th>
                        <td>Apple iPads</td>
                        <td>Lens</td>
                        <td>Mobiles No Cost EMI</td>
                    </tr>
                    <tr>
                        <td>Motorola razr</td>
                        <td>Bp Monitors</td>
                        <td></td>
                        <td>Tripods</td>
                        <td>Huawei Watch Gt 2e Smart Watch</td>
                    </tr>
                    <tr>
                        <td>realme Narzo 10A</td>
                        <td>Weighing Scale</td>
                        <td></td>
                        <td>Network Components</td>
                    </tr>
                    <tr>
                        <td colspan>Motorola g8 power lite</td>
                        <td></td>
                        <td></td>
                        <td>Routers</td>
                    </tr>
                </table>
            </div>
        </div>

        <div className="a2">
            <div className="b2">TVs & Appliances
                <div className="arrow down2"></div>
            </div>         
    
            <div className="table2">
                <table cellspacing="0" cellpadding="0">
                    <tr>
                        <th id="one"><div className="th">Television <div className="tri"></div></div></th>
                        <th id="one"><div className="th">Washing Machine <div className="tri"></div></div></th>
                        <th id="one"><div className="th">Kitchen Appliances <div className="tri"></div></div></th>
                        <th id="one"><div className="th">Small Home Appliances <div className="tri"></div></div></th>
                        <th id="one"><div className="th">Buying Guides <div className="tri"></div></div></th>
                    </tr>
                    <tr>
                        <th><div className="th">New Launches <div className="tri"></div></div></th>
                        <td>Fully Automatic Front Load</td>
                        <td>Microwave Ovens</td>
                        <td>Irons</td>
                        <td>Televisions</td>
                    </tr>
                    <tr>
                        <th><div className="th">Smart & Ultra HD <div className="tri"></div></div></th>
                        <td>Semi Automatic Top Load</td>
                        <td>Oven Toaster Grills (OTG)</td>
                        <td>Water Purifiers</td>
                        <td>Washing Machines</td>
                    </tr>
                    <tr>
                        <th><div className="th">Top Brands <div className="tri"></div></div></th>
                        <td>Fully Automatic Top Load</td>
                        <td>Juicer/Mixer/Grinder</td>
                        <td>Fans</td>
                        <td>Refrigerators</td>
                    </tr>
                    <tr>
                        <td>Mi</td>
                        <th><div className="th">Air Conditioners <div className="tri"></div></div></th>
                        <td>Electric Kettle</td>
                        <td>Air Coolers</td>
                        <td>Air Conditioners</td>
                    </tr>
                    <tr>
                        <td>Vu</td>
                        <td>Inverter AC</td>
                        <td>Induction Cooktops</td>
                        <td>Inverters</td>
                        <td>Water Purifiers</td>
                    </tr>
                    <tr>
                        <td>Thomson</td>
                        <td>Split ACs</td>
                        <td>Chimneys</td>
                        <td>Vacuum Cleaners</td>
                        <td>Air Purifiers</td>
                    </tr>
                    <tr>
                        <td>Samsung</td>
                        <td>Window ACs</td>
                        <td>Hand Blenders</td>
                        <td>Sewing Machines</td>
                        <td>Chimneys</td>
                    </tr>
                    <tr>
                        <td>iFFALCON by TCL</td>
                        <th><div className="th">Shop By Brand <div className="tri"></div></div></th>
                        <td>Sandwich Makers</td>
                        <td>Voltage Stabilizers</td>
                        <td>Water Geysers</td>
                    </tr>
                    <tr>
                        <td>Nokia</td>
                        <td>LG</td>
                        <td>Pop Up Toasters</td>
                        <td>Water Geysers</td>
                        <th><div className="th">New Launches <div className="tri"></div></div></th>
                    </tr>
                    <tr>
                        <td>LG</td>
                        <td>Hitachi</td>
                        <td>Electric Cookers</td>
                        <td>Immersion Rods</td>
                        <td>Coocaa Smart TVs</td>
                    </tr>
                    <tr>
                        <td>realme</td>
                        <td>Carrier</td>
                        <td>Wet Grinders</td>
                        <th><div className="th">Top Brands <div className="tri"></div></div></th>
                        <td>Nokia (55) 4K Android TV</td>
                    </tr>
                    <tr>
                        <td>Motorola</td>
                        <th><div className="th">Refrigerators <div className="tri"></div></div></th>
                        <td>Food Processors</td>
                        <td>Livpure</td>
                        <td>Mi (32) 4A Pro Android TV</td>
                    </tr>
                    <tr>
                        <th><div className="th">Shop by Screen Size <div className="tri"></div></div></th>
                        <td>Single Door</td>
                        <td>Coffee Makers</td>
                        <td>Philips</td>
                        <td>MarQ (43) FHD Smart TV</td>
                    </tr>
                    <tr>
                        <td>24 & below</td>
                        <td>Double Door</td>
                        <td>Dishwashers</td>
                        <td>Bajaj</td>
                        <td>LG Refrigerators</td>
                    </tr>
                    <tr>
                        <td>28 - 32</td>
                        <td>Triple door</td>
                        <th><div className="th">Healthy Living Appliances <div className="tri"></div></div></th>
                        <td>IFB</td>
                        <td>Thomson (40) 4K Smart TV</td>
                    </tr>
                    <tr>
                        <td>39 - 43</td>
                        <td>Side by Side</td>
                        <td></td>
                        <td>Eureka Forbes</td>
                        <td>Whirlpool Refrigerators</td>
                    </tr>
                    <tr>
                        <td>48 - 55</td>
                        <td>Convertible</td>
                        <td></td>
                        <td>Kaff</td>
                        <td>Kodak (22) | (32) LED TVs</td>
                    </tr>
                    <tr>
                        <td>60 & above</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>

        <div className="a3">
            <div className="b3">Men
                <div className="arrow down3"></div>
            </div>
            <div className="table3">
                <table cellspacing="0" cellpadding="0">
                    <tr>
                        <th id="one"><div className="th">Footwear <div className="tri"></div></div></th>
                        <th id="one"><div className="th">Clothing <div className="tri"></div></div></th>
                        <th id="one"><div className="th">Winter Wear <div className="tri"></div></div></th>
                        <th id="one"><div className="th">Watches <div className="tri"></div></div></th>
                        <th id="one"><div className="th">Smart Watches <div className="tri"></div></div></th>
                    </tr>
                    <tr>
                        <td>Sports Shoes</td>
                        <th><div className="th">Top wear <div className="tri"></div></div></th>
                        <td>Sweatshirts</td>
                        <td>Fastrack</td>
                        <th><div className="th">Smart Bands <div className="tri"></div></div></th>
                    </tr>
                    <tr>
                        <td>Casual Shoes</td>
                        <td>T-Shirts</td>
                        <td>Jackets</td>
                        <td>Casio</td>
                        <th><div className="th">Personal Care Appliances <div className="tri"></div></div></th>
                    </tr>
                    <tr>
                        <td>Formal Shoes</td>
                        <td>Formal Shirts</td>
                        <td>Sweater</td>
                        <td>Titan</td>
                        <td>Trimmers</td>
                    </tr>
                    <tr>
                        <td>Sandals & Floaters</td>
                        <td>Casual Shirts</td>
                        <td>Tracksuits</td>
                        <td>Fossil</td>
                        <td>Shavers</td>
                    </tr>
                    <tr>
                        <td>Flip- Flops</td>
                        <th><div className="th">Bottom wear <div className="tri"></div></div></th>
                        <th><div className="th">Ethnic wear <div className="tri"></div></div></th>
                        <td>Sonata</td>
                        <td>Grooming Kits</td>
                    </tr>
                    <tr>
                        <td>Loafers</td>
                        <td>Jeans</td>
                        <td>Kurta</td>
                        <th><div className="th">Accessories <div className="tri"></div></div></th>
                        <th>Featured</th>
                    </tr>
                    <tr>
                        <td>Boots</td>
                        <td>Casual Trousers</td>
                        <td>Ethnic Sets</td>
                        <td>Backpacks</td>
                        <td>Watches Store</td>
                    </tr>
                    <tr>
                        <td>Running Shoes</td>
                        <td>Formal Trousers</td>
                        <td>Sherwanis</td>
                        <td>Wallets</td>
                        <td>Footwear Club</td>
                    </tr>
                    <tr>
                        <td>Sneakers</td>
                        <td>Track pants</td>
                        <td>Ethnic Pyjama</td>
                        <td>Belts</td>
                        <td>Bags & Wallet</td>
                    </tr>
                    <tr>
                        <th><div className="th">Men's Grooming <div className="tri"></div></div></th>
                        <td>Shorts</td>
                        <td>Dhoti</td>
                        <td>Sunglasses</td>
                        <td>T-Shirt Store</td>
                    </tr>
                    <tr>
                        <td>Deodorants</td>
                        <td>Cargos</td>
                        <td>Lungi</td>
                        <td>Luggage & Travel</td>
                        <td>Adidas</td>
                    </tr>
                    <tr>
                        <td>Perfumes</td>
                        <td>Three Fourths</td>
                        <th><div className="th">Innerwear & Loungewear <div className="tri"></div></div></th>
                        <td>Frames</td>
                        <td>Beardo</td>
                    </tr>
                    <tr>
                        <td>Beard Care & Grooming</td>
                        <th><div className="th">Suits, Blazers & Waistcoats <div className="tri"></div></div></th>
                        <td>Briefs & Trunks</td>
                        <td>Jewellery</td>
                        <td>Reebok</td>
                    </tr>
                    <tr>
                        <td>Shaving & Aftershave</td>
                        <th><div className="th">Ties, Socks, Caps & More <div className="tri"></div></div></th>
                        <td>Vests</td>
                        <th><div className="th">Sports & Fitness Store <div className="tri"></div></div></th>
                        <td>Skechers</td>
                    </tr>
                    <tr>
                        <td>Sexual Wellness</td>
                        <th><div className="th">Fabrics <div className="tri"></div></div></th>
                        <td>Boxers</td>
                        <td></td>
                        <td>Nike</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Pyjamas and Lounge Pants</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Thermals</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Night Suits</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <th><div className="th">Raincoats & Windcheaters <div className="tri"></div></div></th>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>

        <div className="a4">
            <div className="b4">Women
                <div className="arrow down4"></div>
            </div>

            <div className="table4">
                <table cellspacing="0" cellpadding="0">
                    <tr>
                        <th id="one"><div className="th">Clothing <div className="tri"></div></div></th>
                        <th id="one"><div className="th">Ethnic Wear<div className="tri"></div></div></th>
                        <th id="one"><div className="th">Footwear<div className="tri"></div></div></th>
                        <th id="one"><div className="th">Beauty & Grooming<div className="tri"></div></div></th>
                        <th id="one"><div className="th">Featured<div className="tri"></div></div></th>
                    </tr>
                    <tr>
                        <td>Women Western & Maternity</td>
                        <td>Sarees</td>
                        <th><div className="th">Sandals<div className="tri"></div></div></th>
                        <td>Make Up</td>
                        <td>Forever 21</td>
                    </tr>
                    <tr>
                        <td>Topwear</td>
                        <td>Kurtas & Kurtis</td>
                        <td>Flats</td>
                        <td>Skin Care</td>
                        <td>Accessorize</td>
                    </tr>
                    <tr>
                        <td>Dresses</td>
                        <td>Dress Material</td>
                        <td>Heels</td>
                        <td>Hair Care</td>
                        <td>W</td>
                    </tr>
                    <tr>
                        <td>Jeans</td>
                        <td>Lehenga Choli</td>
                        <td>Wedges</td>
                        <td>Bath & Spa</td>
                        <td>Pantaloons</td>
                    </tr>
                    <tr>
                        <td>Shorts</td>
                        <td>Blouse</td>
                        <th><div className="th">Shoes<div className="tri"></div></div></th>
                        <td>Deodorants & Perfumes</td>
                        <td>Chemistry</td>
                    </tr>
                    <tr>
                        <td>Skirts</td>
                        <td>Kurta Sets & Salwar Suits</td>
                        <td>Sports Shoes</td>
                        <th><div className="th">Jewellery<div className="tri"></div></div></th>
                        <td>Lakme</td>
                    </tr>
                    <tr>
                        <td>Jeggings & Tights</td>
                        <td>Gowns</td>
                        <td>Casual Shoes</td>
                        <td>Artificial Jewellery</td>
                        <td>Nivea</td>
                    </tr>
                    <tr>
                        <td>Trousers & Capris</td>
                        <td>Dupattas</td>
                        <td>Boots</td>
                        <td>Silver Jewellery</td>
                        <td>Catwalk</td>
                    </tr>
                    <tr>
                        <th><div className="th">Lingerie & Sleepwear<div className="tri"></div></div></th>
                        <th><div className="th">Ethnic Bottoms<div className="tri"></div></div></th>
                        <th><div className="th">Ballerinas<div className="tri"></div></div></th>
                        <td>Precious Jewellery</td>
                        <td>Titan-Raga</td>
                    </tr>
                    <tr>
                        <td>Bras</td>
                        <td>Leggings & Churidars</td>
                        <th><div className="th">Slippers & Flip- Flop's<div className="tri"></div></div></th>
                        <td>Coins and Bars</td>
                        <td>Fastrack</td>
                    </tr>
                    <tr>
                        <td>Panties</td>
                        <td>Palazzos</td>
                        <th><div className="th">Watches<div className="tri"></div></div></th>
                        <th><div className="th">Accessories<div className="tri"></div></div></th>
                        <td>Divastri</td>
                    </tr>
                    <tr>
                        <td>Lingerie Sets</td>
                        <td>Shararas</td>
                        <th><div className="th">Smart Watches<div className="tri"></div></div></th>
                        <td>Handbags</td>
                        <td>Rare Roots</td>
                    </tr>
                    <tr>
                        <td>Night Dresses & Nighties</td>
                        <td>Salwars & Patiala</td>
                        <th><div className="th">Personal Care Appliances<div className="tri"></div></div></th>
                        <td>Shoulder Bags</td>
                        <td>Anmi</td>
                    </tr>
                    <tr>
                        <td>Shapewear</td>
                        <td>Dhoti Pants</td>
                        <td>Hair Straightners</td>
                        <td>Totes</td>
                        <td>Coins & Bars</td>
                    </tr>
                    <tr>
                        <td>Camisoles & Slips</td>
                        <td>Ethnic Trousers</td>
                        <td>Hair Dryers</td>
                        <td>Sling bags</td>
                        <td>Crocs</td>
                    </tr>
                    <tr>
                        <th><div className="th">Swim & Beachwear<div className="tri"></div></div></th>
                        <td>Saree Shapewear & Petticoats</td>
                        <td>Epilators</td>
                        <td>Clutches</td>
                        <th><div className="th">Trending today!<div className="tri"></div></div></th>
                    </tr>
                    <tr>
                        <th><div className="th">Party Dresses<div className="tri"></div></div></th>
                        <td></td>
                        <td></td>
                        <td>Wallets & Belts</td>
                        <td>Ruffles & Frills</td>
                    </tr>
                    <tr>
                        <th><div className="th">Sports Wear<div className="tri"></div></div></th>
                        <td></td>
                        <td></td>
                        <td>Luggage & Travel</td>
                        <td>Pastel Kurtas & Kurtis</td>
                    </tr>
                    <tr>
                        <th><div className="th">Winter Wear<div className="tri"></div></div></th>
                        <td></td>
                        <td></td>
                        <td>Sunglasses</td>
                        <td>Designer Net Sarees</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Frames</td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>


        <div className="a5">
            <div className="b5">Baby & Kids
                <div className="arrow down5"></div>
            </div>
            
            <div className="table5">
                <table cellspacing="0" cellpadding="0">
                    <tr>
                        <th id="one"><div className="th">Kids Clothing <div className="tri"></div></div></th>
                        <th id="one"><div className="th">Kids' Footwear <div className="tri"></div></div></th>
                        <th id="one"><div className="th">Toys <div className="tri"></div></div></th>
                        <th id="one"><div className="th">Baby Care <div className="tri"></div></div></th>
                        <th id="one"><div className="th">Featured brands <div className="tri"></div></div></th>
                    </tr>
                    <tr>
                        <th><div className="th">Boys' Clothing <div className="tri"></div></div></th>
                        <th><div className="th">Boys' Footwear <div className="tri"></div></div></th>
                        <td>Remote Control Toys</td>
                        <td>Diapers</td>
                        <td>Miss & Chief</td>
                    </tr>
                    <tr>
                        <td>T-Shirts</td>
                        <td>Sandals</td>
                        <td>Educational Toys</td>
                        <td>Wipes</td>
                        <td>Barbie</td>
                    </tr>
                    <tr>
                        <td>Ethnic Wear</td>
                        <td>Sport Shoes</td>
                        <td>Soft Toys</td>
                        <td>Diapering & Potty Training</td>
                        <td>Disney</td>
                    </tr>
                    <tr>
                        <td>Shorts</td>
                        <th><div className="th">Girls' Footwear <div className="tri"></div></div></th>
                        <td>Cars & Die-cast Vehicles</td>
                        <td>Baby Bath, Hair & Skin Care</td>
                        <td>United Colors of Benetton</td>
                    </tr>
                    <tr>
                        <td>Shirts</td>
                        <td>Flats & Bellies</td>
                        <td>Outdoor Toys</td>
                        <td>Baby Grooming</td>
                        <td>The Children's Place</td>
                    </tr>
                    <tr>
                        <td>Innerwear</td>
                        <td>Sport Shoes</td>
                        <td>Action Figures</td>
                        <td>Baby Bathing Accessories</td>
                        <td>US Polo</td>
                    </tr>
                    <tr>
                        <th><div className="th">Girls' Clothing <div className="tri"></div></div></th>
                        <th><div className="th">Infant Footwear <div className="tri"></div></div></th>
                        <td>Board Games</td>
                        <td>Baby Gift Sets & Combo</td>
                        <td>Flying Machine</td>
                    </tr>
                    <tr>
                        <td>Dresses & Skirts</td>
                        <th><div className="th">Character Shoes <div className="tri"></div></div></th>
                        <td>Musical Toys</td>
                        <td>Baby Oral Care</td>
                        <td>Crocs</td>
                    </tr>
                    <tr>
                        <td>Ethnic Wear</td>
                        <td>Kids' Watches</td>
                        <td>Dolls & Doll Houses</td>
                        <td>Nursing & Breast Feeding</td>
                        <td>Puma</td>
                    </tr>
                    <tr>
                        <td>T-shirts & Tops</td>
                        <td>Kids' Sunglasses</td>
                        <td>Puzzles</td>
                        <td>Baby Food</td>
                        <td>Funskool</td>
                    </tr>
                    <tr>
                        <td>Innerwear</td>
                        <th><div className="th">Kids' Winter Wear <div className="tri"></div></div></th>
                        <td>S.T.E.M Toys</td>
                        <td>Baby Feeding Bottle & Accessories</td>
                        <td>Lego</td>
                    </tr>
                    <tr>
                        <th><div className="th">Baby Boys' Clothing <div className="tri"></div></div></th>
                        <th><div className="th">Boys' Winter Wear <div className="tri"></div></div></th>
                        <td>Helicopter & Drones</td>
                        <td>Baby Feeding Utensils & Accessories</td>
                        <td>Luvlap</td>
                    </tr>
                    <tr>
                        <td>Combos Sets</td>
                        <td>Boys' Sweatshirts</td>
                        <td>Toy Guns</td>
                        <td>Baby Bedding</td>
                        <td>Mamy Poko</td>
                    </tr>
                    <tr>
                        <td>T-Shirts</td>
                        <td>Boys' Jacket</td>
                        <td>Party Supplies</td>
                        <td>Baby Gear</td>
                        <td>Mee Mee</td>
                    </tr>
                    <tr>
                        <td>Innerwear</td>
                        <th><div className="th">Girls' Winter Wear <div className="tri"></div></div></th>
                        <th><div className="th">School Supplies <div className="tri"></div></div></th>
                        <td>Baby Medical & Health Care</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th><div className="th">Baby Girls' Clothing <div className="tri"></div></div></th>
                        <td>Girls' Sweatshirts</td>
                        <td>School Bags</td>
                        <td>Baby Proofing & Safety</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Combos Sets</td>
                        <td>Girls' Jackets</td>
                        <td>School Combo Sets</td>
                        <td>Baby Cleaners & Detergents</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Dresses & Gowns</td>
                        <td>Infant Winter Wear</td>
                        <td>Lunch Box</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Innerwear</td>
                        <td>Thermals</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>

        <div className="a6">
            <div className="b6">Home & Furniture
                <div className="arrow down6"></div>
            </div>

            <div className="table6">
                <table cellspacing="0" cellpadding="0">
                    <tr>
                        <th id="one"><div className="th">Kitchen, Cookware & Serveware <div className="tri"></div></div></th>
                        <th id="one"><div className="th">Furniture Top Offers <div className="tri"></div></div></th>
                        <th id="one"><div className="th">Furnishing <div className="tri"></div></div></th>
                        <th id="one"><div className="th">Home Decor <div className="tri"></div></div></th>
                        <th id="one"><div className="th">Durability Certified Furniture <div className="tri"></div></div></th>
                    </tr>
                    <tr>
                        <td>Pans</td>
                        <th><div className="th">Bed Room Furniture <div className="tri"></div></div></th>
                        <td>Bedsheets</td>
                        <td>Paintings</td>
                        <th><div className="th">Featured <div className="tri"></div></div></th>
                    </tr>
                    <tr>
                        <td>Tawas</td>
                        <td>Beds</td>
                        <td>Curtains</td>
                        <td>Clocks</td>
                        <th><div className="th">Christmas Store <div className="tri"></div></div></th>
                    </tr>
                    <tr>
                        <td>Pressure Cookers</td>
                        <td>Mattresses</td>
                        <td>Cushions & Pillows</td>
                        <td>Wall Shelves</td>
                        <td>Mugs Store</td>
                    </tr>
                    <tr>
                        <td>Kitchen tools</td>
                        <td>Wardrobes</td>
                        <td>Blankets</td>
                        <td>Stickers</td>
                        <th><div className="th">Gardening Store <div className="tri"></div></div></th>
                    </tr>
                    <tr>
                        <td>Gas Stoves</td>
                        <th><div className="th">Living Room Furniture <div className="tri"></div></div></th>
                        <td>Bath Towels</td>
                        <td>Showpieces & Figurines</td>
                        <td>Stainless Steel Store</td>
                    </tr>
                    <tr>
                        <th><div className="th">Tableware & Dinnerware <div className="tri"></div></div></th>
                        <td>Sofa</td>
                        <td>Kitchen & Table Linen</td>
                        <th><div className="th">Home Lighting <div className="tri"></div></div></th>
                        <td>Milton</td>
                    </tr>
                    <tr>
                        <td>Coffee Mugs</td>
                        <td>Sofa Beds</td>
                        <td>Floor Coverings</td>
                        <td>Bulbs</td>
                        <td>Bombay Dyeing</td>
                    </tr>
                    <tr>
                        <td>Dinner Set</td>
                        <td>TV Units</td>
                        <th><div className="th">Smart Home Automation <div className="tri"></div></div></th>
                        <td>Wall Lamp</td>
                        <td>@home</td>
                    </tr>
                    <tr>
                        <td>Barware</td>
                        <td>Dining Tables & Chairs</td>
                        <td>Smart Security System</td>
                        <td>Table Lamp</td>
                        <td>HomeTown</td>
                    </tr>
                    <tr>
                        <th><div className="th">Kitchen Storage <div className="tri"></div></div></th>
                        <td>Coffee Tables</td>
                        <td>Smart Door Locks</td>
                        <td>Ceiling Lamp</td>
                        <td>Ajanta</td>
                    </tr>
                    <tr>
                        <td>Water Bottles</td>
                        <td>Shoe Racks</td>
                        <th><div className="th">Home Improvement <div className="tri"></div></div></th>
                        <td>Emergency Lights</td>
                        <td>Spaces by Welspun</td>
                    </tr>
                    <tr>
                        <td>Lunch Boxes</td>
                        <th><div className="th">Office & Study Furniture <div className="tri"></div></div></th>
                        <td>Tools & Measuring Equipments</td>
                        <th><div className="th">Festive Decor & Gifts <div className="tri"></div></div></th>
                        <td>Prestige</td>
                    </tr>
                    <tr>
                        <td>Flasks</td>
                        <td>Kids Room Furniture</td>
                        <td>Home Utilities & Organizers</td>
                        <th><div className="th">Pet Supplies <div className="tri"></div></div></th>
                        <th><div className="th">Perfect Home Store <div className="tri"></div></div></th>
                    </tr>
                    <tr>
                        <td>Casseroles</td>
                        <th><div className="th">DIY Furniture <div className="tri"></div></div></th>
                        <td>Lawn & Gardening</td>
                        <td>Dogs</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Kitchen Containers</td>
                        <td>Bean Bags</td>
                        <td>Bathroom & Kitchen Fittings</td>
                        <td>Cats</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th><div className="th">Cleaning Supplies  <div className="tri"></div></div></th>
                        <td>Collapsible Wardrobes</td>
                        <td></td>
                        <td>Fish & Aquatics</td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>


        <div className="a7">
            <div className="b7">Sports, Books & More
                <div className="arrow down7"></div>
            </div>

            <div className="table7">
                <table cellspacing="0" cellpadding="0">
                    <tr>
                        <th id="one"><div className="th">Sports <div className="tri"></div></div></th>
                        <th id="one"><div className="th">Food Essentials <div className="tri"></div></div></th>
                        <th id="one"><div className="th">Books <div className="tri"></div></div></th>
                        <th id="one"><div className="th">Auto Accessories <div className="tri"></div></div></th>
                        <th id="one"><div className="th">Music <div className="tri"></div></div></th>
                    </tr>
                    <tr>
                        <td>Cricket</td>
                        <td>Nuts & Dry Fruits</td>
                        <td>Entrance Exams</td>
                        <td>Helmets & Riding Gears</td>
                        <td>Musical Instruments</td>
                    </tr>
                    <tr>
                        <td>Badminton</td>
                        <td>Tea, Coffee and Beverages</td>
                        <td>Academics</td>
                        <td>Car Audio/Video</td>
                        <td>Music</td>
                    </tr>
                    <tr>
                        <td>Cycling</td>
                        <td>Chocolates</td>
                        <td>Literature & Fiction</td>
                        <td>Car Mobile Accessories</td>
                        <td>Movies & Tv shows</td>
                    </tr>
                    <tr>
                        <td>Football</td>
                        <td>Snacks Corner</td>
                        <td>Non Fiction</td>
                        <td>Car & Bike Care</td>
                        <th><div className="th">Gaming <div className="tri"></div></div></th>
                    </tr>
                    <tr>
                        <td>Skating</td>
                        <td>Gifting Combos</td>
                        <td>Young Readers</td>
                        <td>Vehicle Lubricants</td>
                        <td>Gaming Consoles</td>
                    </tr>
                    <tr>
                        <td>Camping & Hiking</td>
                        <td>Sweets Store</td>
                        <td>Self-Help</td>
                        <th><div className="th">Industrial & Scientific tools <div className="tri"></div></div></th>
                        <td>Gaming Accessories</td>
                    </tr>
                    <tr>
                        <td>Swimming</td>
                        <td>Jams, Spreads and Honey</td>
                        <td>E-Learning</td>
                        <td>Industrial Measurement Devices</td>
                        <td>PS4 Games</td>
                    </tr>
                    <tr>
                        <th><div className="th">Exercise Fitness <div className="tri"></div></div></th>
                        <td>Breakfast Items</td>
                        <td>Preorders</td>
                        <td>Industrial Testing Devices</td>
                        <td>Smart Glasses (VR)</td>
                    </tr>
                    <tr>
                        <td>Cardio Equipment</td>
                        <th><div className="th">Health & Nutrition <div className="tri"></div></div></th>
                        <td>Indian Languages</td>
                        <td>Lab & Scientific Products</td>
                        <th><div className="th">Grocery (Only in Select Cities) <div className="tri"></div></div></th>
                    </tr>
                    <tr>
                        <td>Home Gyms</td>
                        <td>All Supplements</td>
                        <td>Stationery</td>
                        <th><div className="th">Packaging & Shipping Products <div className="tri"></div></div></th>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Support</td>
                        <td>Protein Supplements</td>
                        <td>Pens</td>
                        <td>Safety Products</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Dumbbells</td>
                        <td>Vitamin Supplements</td>
                        <td>Diaries</td>
                        <th><div className="th">Medical Supplies <div className="tri"></div></div></th>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Ab Exercisers</td>
                        <td>Health Drinks</td>
                        <td>Card Holders</td>
                        <td>Pregnancy and Fertility Kits</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Shakers & Sippers</td>
                        <td>Ayurvedic Supplements</td>
                        <td>Desk Organizers</td>
                        <td>Hot Water Bag</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Yoga Mat</td>
                        <td></td>
                        <td>Calculators</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Gym Gloves</td>
                        <td></td>
                        <td></td>
                        <td>Key Chains</td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>

        <div className="a8">
            <div className="b8">Flights</div>
        </div>

        <div className="a9">
            <div className="b9">Offer Zone</div>
        </div>

    </div>
    {/* ---------------------------------------------------------------------- */}
     <div className='content'>
        <div className='leftpart'>
            <Leftpart />
        </div>
        <div className='rightpart'>
            <Rightpart />
        </div>
    </div>

    <div className='downpart'>
        <div className='mightbeintrested'>
            <h2>You might be interested in</h2>
            <div className='intrested1'>
                <Mightbeintrested></Mightbeintrested>
            </div>
        </div>
    </div>

    <div className='downpart'>
        <div className='similarproducts'>
            <h2>Similar products</h2>
            <div className='intrested1'>
                <Similarproducts></Similarproducts>
            </div>
        </div>
    </div>

    <div className='downpart'>
        <div className='footer'>
            <Footerpart />
        </div>
    </div>
    
    </div>


  )
}

export default App