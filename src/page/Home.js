import React, { useEffect, useMemo, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import './home.css' 
function Home() {

    const default_weight=50
    const default_height=150
 const [weight,setWeight]=useState(default_weight)
 const [height,setHeight]=useState(default_height)
 const [show, setShow] = useState(false);
   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
 const weightChange=(e)=>{
    const input=e.target.value
    setWeight(input)
 }
 const heightChange=(e)=>{
    const input=e.target.value
    setHeight(input)
 }
 const output=useMemo(()=>{
    const calculatedHeight = height / 100;
    return (weight / (calculatedHeight * calculatedHeight));
  }, [weight, height]
)
 

 


  return (
    <div>
        <div className='container pb-5 pt-5'>
<Row className='justify-content-between'>
      <Col className='box1 p-3' sm={6}>
      <h1 className='text-center'>BMI CALCULATOR</h1>
    <div className='d-flex'>
          <p className='mb-1 pe-2' >Male</p>
          <input onClick={handleClose}  name='gender' type="radio"  />
    </div>
    <div className='d-flex mb-3'>
          <p className='mb-1 pe-2'>Female</p>
          <input onClick={handleShow} name='gender' type="radio" />
    </div>
                    <p className='mb-1'>Weight : {weight}</p>
                  <input className=' w-75' type="range" min={50} max={220} onChange={(e)=>weightChange(e)} />
                  <p className='mb-1'>Height : {height}</p>
                  <input className='w-75 text-danger' type="range" min={150} max={300} onChange={(e)=>heightChange(e)} />
        
                  <div className='mt-2 text-center w-50'> <p className='mb-1'>Your BMI is :</p> <p className='p-2' style={{backgroundColor:'#34eb95'}}><strong>{output.toFixed(1)}</strong></p></div>
   
      </Col>
      <Col className='box1' sm={5}>
        <h2>Check Your Results</h2>
     <div> {show?<img   style={{width:'100%'}} src="https://i.postimg.cc/vTf1T32b/bmi-chart-women-1143x800.jpg" alt="" />:
    
      <img style={{width:'100%'}}  src="https://i.postimg.cc/wxZnVkq5/man-body-mass-index-vector.jpg" alt="" />
}</div>
      </Col>
</Row>
       </div>
    </div>
  )
}

export default Home