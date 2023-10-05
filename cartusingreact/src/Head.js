import React,{useState} from 'react'
import './App.css'
function Head() {
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
      {/* </div> */}


      <div className="head">
        <div className="flipkart">
          <div className='flip_1'><a href="https://www.flipkart.com/">Flipkart</a></div>
          <div className='flip_2'><a href=""><i>Explor <span>Plus</span></i></a></div>
        </div>
        <input type="search" placeholder="Search for products, brands and more"/>
        <i className="fa fa-search"></i>
        <div className="login">
          <button><a onClick={()=>setA(true)} style={{color:"rgb(37,125,240"}}>Login</a></button>
          <div className="drop">
              <strong id="newcust">New customer?</strong><a href="#" id="signup" style={{paddingRight: "10px",border: "none", color: "blue"}}>Sign Up</a>
              <a href="#">My Profile</a>
              <a href="#">Flipkart Plus Zone</a>
              <a href="#">Orders</a>
              <a href="#">Wishlist</a>
              <a href="#">Rewards</a>
              <a href="#">Gift Cards</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Head