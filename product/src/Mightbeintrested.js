import React,{useState} from 'react'
import './mightbeintrested.css'
function Mightbeintrested() {
    const arr=[
        {
            id:1,
            image:"https://rukminim2.flixcart.com/image/400/400/xif0q/shopsy-power-bank/o/x/o/pp-111-10000-ambrane-original-imagg7nqgb8zr3zt.jpeg?q=90",
            name1:"Power Banks",
            off:"Min. 50% Off",
            shop:"Shop Now"
        },
        {
          id:2,
          image:"https://rukminim2.flixcart.com/image/400/400/kltryq80/selfie-stick/p/9/x/selfie-stick-r1-holdup-original-imagyv32ezbk4jds.jpeg?q=90",
          name1:"Selfie Sticks",
          off:"Min. 50% Off",
          shop:"Shope Now"
        },
        {
          id:3,
          image:"https://rukminim2.flixcart.com/image/400/400/jh6l2fk0/headphone/v/t/7/sony-mdr-zx310apbce-original-imaf59ebhygmdhgv.jpeg?q=90",
          name1:"Wired Headphones",
          off:"Min. 50% Off",
          shop:"Shope Now"
        },
        {
            id:4,
            image:"https://rukminim2.flixcart.com/image/400/400/kqwobrk0/headphone/3/n/b/bassheads-100-boat-original-imag4tgdrpxfh3pk.jpeg?q=90",
            name1:"Wired Earphones",
            off:"Min. 50% Off",
            shop:"Shop Now"
        }
    ]

    const [a,setA]=useState(false)
    const b={
        transform: a ? "translateX(-400px)" : "translateX(0px)"
    }
    const c={
        display: a ? "none" :"block"
    }
    const d={
        display: a ? "block" : "none"
    }
  return (
    <div className='t'>
        <div className='t1' style={b}>
          {
          arr.map((item,index)=>{
            return(
              <div className='t1_1'>
                <div className='t2'>
                  <img src={item.image} width={145} height={195} />
                </div>
                <div className='t3'>
                  <h3>{item.name1}</h3>
                  <p>{item.off}</p>
                  <a href="#">{item.shop}</a>
                </div>
              </div>
            )
          })}
        </div>
        <button className='rightbtn' style={c} onClick={()=>setA(true)}>&#10095;</button>
        <button className='leftbtn' style={d} onClick={()=>setA(false)}>&#10094;</button>
    </div>
  )
}

export default Mightbeintrested