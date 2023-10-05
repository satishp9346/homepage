import React,{useState} from 'react'
import dataRef from './Firebase';
import './App.css';
function Leftpart() {
    const [a,setA]=useState(false);
    const divStyle={
        transform : a ? 'translateY(-150px)' : 'none'
    };
    const c={
        display: a ? "none" :"flex"
    }
    const d={
        display: a ? "flex" : "none"
    }
    const arr=[
        {
            'id':1,
            'image':"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/x/x/-original-imagp55frhhddu6n.jpeg?q=70"
        },
        {
            'id':2,
            'item':<iframe width="75px" height="75px" src="https://www.youtube.com/embed/KCx-uWtT7ro" title="Realme C55" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        },
        {
            'id':3,
            'image': "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/s/t/6/-original-imagp55fswcsqfmy.jpeg?q=70"
        },
        {
            'id':4,
            'image': "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/q/l/-original-imagzmerf9zzezva.jpeg?q=70"
        },
        {
            'id':5,
            'image':"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/i/v/m/-original-imagp55fe3khzzfe.jpeg?q=70"
        },
        {
            'id':6,
            'image':"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/w/x/-original-imagp55fzhffzx4f.jpeg?q=70"
        },
        {
            'id':7,
            'image':"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/q/i/q/-original-imagp55ffvqaj9ws.jpeg?q=70"
        },
        {
            'id':8,
            'image':"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/x/y/i/-original-imagzbs5vfdkfrhw.jpeg?q=70"
        },
        {
            'id':9,
            'image':"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/l/n/m/-original-imagzbs5cbht2k6z.jpeg?q=70"
        }
    ];
    const cartarr={
        image:arr[0].image,
        name:"realme C55 (Sunshower, 64 GB)",
        ram:"4 GB RAM",
        seller:"Seller:ECOMTAMSINRetail",
        actualcost:"12,999",
        cost:"9,999",
        off:"23% off 2 offers applied",
        deliverydate:"Thu Oct 5"

    };
    
    const onclickHandler=()=>{
        dataRef.child("satthi").push(cartarr);   
    }
    
    const [b,setB]=useState(0);  
    const bStyle={
        width:'31vw',
        height:'33vw'
    }
    function satthi(b){
        if(b==1){
            return (<div key={b} style={bStyle}>
                    <iframe width="590" height="563" src="https://www.youtube.com/embed/KCx-uWtT7ro" title="Realme C55" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>)
        }
        else{
            return <div key={b} ><img style={bStyle} src={arr[b].image}/></div>
        }
    };
    const x= satthi(b);

  return (
    <div>
        <div>
      {/* -----------------------left part--------------------------------------------------------- */}
      <div className='z'>
        <div className='y1' >
        <div className='z1' style={divStyle}>
        {
            arr.map((value,index)=>{
                if(value.id==2){
                    return <div className='z1_1' key={value.id} onMouseOver={()=>setB(index)}>{value.item}</div>
                }
                else{
                return <div className='z1_1' key={value.id} onMouseOver={()=>setB(index)}><img src={value.image}/></div>
                }
            })
        }
          
        </div>
        </div>
        <div className='zprev' style={d} onClick={()=>setA(false)}><a >&#10094;</a></div>
        <div className='znext' style={c} onClick={()=>setA(true)}><a >&#10095;</a></div>
        
        <div className='z2'>
            {x}
          <div className='z2_1'>
            <div className='z2_1_1'>
            <i className="fa fa-shopping-cart" style={{"fontSize":"25px","color":"#fff"}}></i>
            <h3><a onClick={onclickHandler} href='http://localhost:3002/FlipkartinCart' target='_blank' style={{color:"#fff"}}>ADD TO CART</a></h3>
            </div>
            <div className='z2_1_1' style={{backgroundColor:"orangered"}}>
            <i class="fa fa-bolt" style={{"fontSize":"22px","color":"#fff"}}></i>
            <h3>BUY NOW</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Leftpart