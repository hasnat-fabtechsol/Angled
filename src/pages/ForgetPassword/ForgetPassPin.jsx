import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ForgetPassPin(props) {
const [pin,setPin]=useState()
const [email,setEmail]=useState()
const [error,setError]=useState()
useEffect(()=>{
  
    const item=location.state
    console.log(item)
  setEmail(item)
    
    },[])

    const navigate=useNavigate()

const location=useLocation()
    function handleSubmit(e){
e.preventDefault()
if(pin!="1234")
return setError("Pin doesn't")

console.log("recieved from Forget Password now we will pass it with pin to api\n"+email)
console.log("pin:"+pin)

navigate('/reset-password')
    }
    function resetErrors(){
      setError('')
      console.log("hello")
    }
    return (
        <div className="container  mt-5" style={{height:'100vh'}}>
          <div className="row" style={{marginTop: '10%'}}>
        <div className="col-12 text-center">
          <img src={require("../../assests/logo.png")} style={{borderRadius: '8px'}} />
        </div>        
      </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
    <h5 style={{color: '00184c', fontWeight: 'bold'}}>Check Your Email<br></br> {email} to get pin</h5>
          </div>        
        </div>
        <div className="row mt-4">
          <div className="col-4" style={{margin: 'auto'}}>
            <form onSubmit={handleSubmit} className="card">
              <div className="card-body">
                <div className="col">
                  <label htmlFor="id_username" className="form-label">Pin</label>
                  <input type="text" 
                     value={pin}
                     onChange={(e)=>setPin(e.target.value)}
  onTouchStart={resetErrors}
                  className="form-control"   name="pincode" maxlength="4"  id="pin" pattern="\d{4}" required/>
                  <div className="form-text" />
                </div>
              
                <br />
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-success" fullwidth="{true}" style={{backgroundColor: '#00184c'}}>Reset Password</button>
                </div>
                <br />
                <p className="text-danger">{error}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    

    );
}

export default ForgetPassPin;