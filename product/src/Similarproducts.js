import React,{useState,useEffect} from 'react'
import './mightbeintrested.css'
function Similarproducts() {
    const arr=[{
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/8/4/-original-imagfhu75eupxyft.jpeg?q=70",
        name:"SAMSUNG Galaxy F13 (Waterfall Blue, 64 GB)",
        rating:"4.3 ★",
        noofratings:"(1,73,223)",
        cost:"9,199",
        actualcost:"14,999",
        off:"38% off"
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/l/a/x3-x3-cellecor-original-imagntqzem3dphhy.jpeg?q=70",
        name:"Cellecor X3",
        rating:"3.6 ★",
        noofratings:"(1,614)",
        cost:"965",
        actualcost:"1749",
        off:"44% off"
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/2/z/note-12-mzb0e6fin-redmi-original-imagz62gzggajgz4.jpeg?q=70",
        name:"REDMI Note 12 (Sunrise Gold, 64 GB)",
        rating:"4.1 ★",
        noofratings:"(16,428)",
        cost:"11,999",
        actualcost:"18,999",
        off:"36% off"
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/9/l/3/-original-imaghgcktmwxthzc.jpeg?q=70",
        name:"realme 10 (Rush Black, 128 GB)",
        rating:"4.3 ★",
        noofratings:"(9,635)",
        cost:"13,999",
        actualcost:"19,999",
        off:"30% off"
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/kzblocw0/mobile/u/e/3/r50-r50-cellecor-original-imagbcufg3p7my76.jpeg?q=70",
        name:"Cellecor R50",
        rating:"3.8 ★",
        noofratings:"(176)",
        cost:"1,300",
        actualcost:"1,849",
        off:"29% off"
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/o/w/narzo-n55-rmx3710-realme-original-imagzuft22eh48at.jpeg?q=70",
        name:"realme Narzo N55 (Prime Black, 128 GB)",
        rating:"4.2 ★",
        noofratings:"(2,189)",
        cost:"12,258",
        actualcost:"14,999",
        off:"18% off"
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/n/m/-original-imagna3rjqn8vqxb.jpeg?q=70",
        name:"Infinix SMART 7 (Emerald Green, 64 GB)",
        rating:"4.3 ★",
        noofratings:"(77,958)",
        cost:"6,699",
        actualcost:"9,999",
        off:"33% off"
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/u/s/-original-imagkp8yreabrzh2.jpeg?q=70",
        name:"realme 10 Pro 5G (Dark Matter, 128 GB)",
        rating:"4.3 ★",
        noofratings:"(33,143)",
        cost:"17,999",
        actualcost:"22,999",
        off:"21% off"
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/i/k/galaxy-f14-5g-sm-e146bzggins-samsung-original-imagnzdkprfwj9hv.jpeg?q=70",
        name:"SAMSUNG Galaxy F14 5G (GOAT Green, 128 GB)",
        rating:"4.2 ★",
        noofratings:"(37,823)",
        cost:"15,990",
        actualcost:"18,490",
        off:"13% off"
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/a/g/-original-imags37h4prxjazz.jpeg?q=70",
        name:"REDMI 12 (Pastel Blue, 128 GB)",
        rating:"4.2 ★",
        noofratings:"(24,192)",
        cost:"9,999",
        actualcost:"14,999",
        off:"33% off"
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70",
        name:"SAMSUNG Galaxy F13 (Nightsky Green, 64 GB)",
        rating:"4.3 ★",
        noofratings:"(1,73,378)",
        cost:"9,199",
        actualcost:"14,999",
        off:"38% off"
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/j/j/-original-imagnvvwvzyhfvx9.jpeg?q=70",
        name:"MOTOROLA G32 (Mineral Gray, 128 GB)",
        rating:"4.1 ★",
        noofratings:"(58,139)",
        cost:"9,999",
        actualcost:"18,999",
        off:"47% off"
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/l1zc6fk0/mobile/u/7/w/f21-pro-cph2363-oppo-original-imagdf4jphscz9jz.jpeg?q=70",
        name:"OPPO F21 Pro (Sunset Orange, 128 GB)",
        rating:"4.3 ★",
        noofratings:"(5,812)",
        cost:"18,640",
        actualcost:"27,999",
        off:"33% off"
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/3/4/-original-imagz3cuyhmc45pc.jpeg?q=70",
        name:"Infinix HOT 30i (Diamond White, 128 GB)",
        rating:"4.2 ★",
        noofratings:"(84,072)",
        cost:"8,499",
        actualcost:"11,999",
        off:"29% off"
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/q/g/-original-imagtqqd4vcdzqdg.jpeg?q=70",
        name:"realme 11x 5G (Purple Dawn, 128 GB)",
        rating:"4.4 ★",
        noofratings:"(14,975)",
        cost:"14,999",
        actualcost:"16,999",
        off:"11% off"
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/a/x/-original-imaghmtch6qfmfxg.jpeg?q=70",
        name:"POCO C50 (Royal Blue, 32 GB)",
        rating:"4.2 ★",
        noofratings:"(61,424)",
        cost:"6,499",
        actualcost:"8,999",
        off:"27% off"
    },
    {
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/i/0/-original-imagnqpnhtwr8chu.jpeg?q=70",
        name:"POCO X5 5G (Supernova Green, 128 GB)",
        rating:"4.1 ★",
        noofratings:"(23,883)",
        cost:"18,999",
        actualcost:"20,999",
        off:"9% off"
    }    
]
    const [a,setA]=useState(0)
    
    const b={
        transform:(a%3==1)? "translateX(-95vw)" : (a%3==2)?"translateX(-182vw)":"translateX(0px)"
    }
    const [c,setC]=useState(false);
    const [d,setD]=useState(false);
    useEffect(()=>{
        if(a===0){
            setC(true);
        }
        else if(a===2){
            setD(true);
        }
        else{
            setC(false);
            setD(false);
        }
    },[a])
    const e={
        display: c ? "none" :"block"
    }
    const f={
        display: d ? "none" : "block"
    }
  return (
    <div className='u'>
        <div className='u1' style={b}>
          {
          arr.map((item,index)=>{
            return(
              <div className='u1_1'>
                <div className='u2'>
                  <img src={item.image} width={150} height={200} />
                </div>
                <div className='u3'>
                  <h5>{item.name}</h5>
                </div>
                <div className='u4'>
                  <span id='rating'>{item.rating}</span>
                  <span id='light'>{item.noofratings}</span>
                  <span><img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" width={90} height={28} /></span>
                </div>
                <div className='u5'>
                  <span id='cost'>&#8377;{item.cost}</span>
                  <span id='light'><strike>&#8377;{item.actualcost}</strike></span>
                  <span id='green'>{item.off}</span>
                </div>
              </div>
            )
          })}

        </div>
        <button className='rightbtn1' style={f} onClick={()=>setA(a+1)}>&#10095;</button>
        <button className='leftbtn1' style={e}  onClick={()=>setA(a-1)}>&#10094;</button>
    </div>
  )
}

export default Similarproducts