import React,{useEffect, useState} from 'react';
import Head from './Head';
import FlipkartinCart from './FlipkartinCart';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import GroceryinCert from './GroceryinCert';
import dataRef from './Firebase'
function App() {
  const [a,setA]=useState(true);
  const b={
    borderBottom: a ? "4px solid rgb(37, 125, 240)":"none",
    color : a ? "rgb(37,125,240":"black"
    
  }
  const c={
    borderBottom: a ? "none" : "4px solid rgb(37, 125, 240)",
    color : a ? "black" : "rgb(37,125,240"
  }
  
  const [getdata,setGetdata]=useState({});
  useEffect(()=>{
    dataRef.child('satthi').on('value',data=>{
      setGetdata(data.val());
    });
  });

  const len=getdata && Object.keys(getdata).length;
  var d={}
  if(len!==null){
  d={
    width: a ? "62vw" : "91vw"
  }
  }
  else{
  d={
      width: "91vw"
    }
  }
  return (
    <div>
        <Router>
          <Head />
          
              
            <div className='a'>
              <div className='a1' style={d} >
                <div className='a1_1'>
                  <Link className='a1_1_1' style={b} onClick={()=>{setA(true)}} to='/FlipkartinCart'>Flipkart ({len})</Link>
                </div>
                <div className='a1_1'>
                  <Link className='a1_1_1' style={c} onClick={()=>setA(false)} to='/GroceryinCart'>Grocery</Link>
                </div>
              </div>
          
            <div className='a2' style={d}> 
            <Routes>
              <Route path='/FlipkartinCart' element={<FlipkartinCart />}></Route>    
              <Route path='/GroceryinCart' element={<GroceryinCert />}></Route>
            </Routes>
            </div>
          </div>
        </Router>
        
    </div>
  );
}

export default App