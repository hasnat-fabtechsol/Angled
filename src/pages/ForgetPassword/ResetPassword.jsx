import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function ResetPassword(props) {
const [info,setInfo]=useState()
const [password,setPassword]=useState()
const [password2,setPassword2]=useState()
const [success,setSuccess]=useState(false)
const [error,setError]=useState()
useEffect(()=>{
  
    const item=location.state
    console.log(item)
setInfo(item)
    
    },[])

const location=useLocation()
    function handleSubmit(e){
e.preventDefault()
if(password===password2)
return setSuccess(true)

setError("Password doesn't match")


    }
    return (
        <div className="container mt-5 " style={{height:'100vh'}}>
         <div className="row" style={{marginTop: '10%'}}>
        <div className="col-12 text-center">
          <img src={require("../../assests/logo.png")} style={{borderRadius: '8px'}} />
        </div>        
      </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
    <h5 style={{color: '00184c', fontWeight: 'bold'}}>Enter New Password</h5>
          </div>        
        </div>
        <div className="row mt-4">
          <div className="col-4" style={{margin: 'auto'}}>
            <form onSubmit={handleSubmit} className="card">
              <div className="card-body">
                <div className="col">
                  <label htmlFor="id_username" className="form-label">Password</label>
                  <input type="text"
                     value={password}
                     onChange={(e)=>setPassword(e.target.value)}
                  className="form-control"   name="pincode"  required/>
                  <div className="form-text" />
                </div>
                <div className="col">
                  <label htmlFor="id_username" className="form-label">Confirm Password</label>
                  <input type="text"
                  
                  value={password2}
                  onChange={(e)=>setPassword2(e.target.value)}
                  className="form-control"   name="pincode"  required/>
                  <div className="form-text" />
                </div>
              
                <br />
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-success" fullwidth="{true}" style={{backgroundColor: '#00184c'}}>Reset Password</button>
                </div>
                <br />
    <p className="text-danger">{error}</p>
   {success&& <p className="text-success">Password Reset Successfull</p>}
              
              </div>
            </form>
          </div>
        </div>
      </div>
    

    );
}

export default ResetPassword;