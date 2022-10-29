import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgetPassword(props) {
    const [email,setEmail]=useState('')

    const navigate=useNavigate()

    function forgetPassword(e){
        e.preventDefault()

navigate('/forget-pass-pin',{state:email})
    }
    return (
        <div className="container  " style={{height:'100vh'}}>
          
        <div className="row" style={{marginTop: '10%'}}>
          <div className="col-12 text-center">
            <img src={require("../../assests/logo.png")} style={{borderRadius: '8px'}} />
          </div>        
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <h5 style={{color: '00184c', fontWeight: 'bold'}}>Forget Password here...</h5>
          </div>        
        </div>
        <div className="row mt-4">
          <div className="col-4" style={{margin: 'auto'}}>
            <form onSubmit={forgetPassword} className="card">
              <div className="card-body">
                <div className="col">
                  <label htmlFor="id_username" className="form-label">Email</label>
                  <input type="text"  type="text"
                  value={email}
           onChange={(e)=>setEmail(e.target.value)}
            className="form-control " id="id_username" name="username" required="True" />
                  <div className="form-text" />
                </div>
              
                <br />
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-success" fullwidth="{true}" style={{backgroundColor: '#00184c'}}>Forget Password</button>
                </div>
                <br />
              
              </div>
            </form>
          </div>
        </div>
      </div>
    
    );
}

export default ForgetPassword;