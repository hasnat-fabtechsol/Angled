import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../../api/apiClient';
import AuthContext from '../../auth/auth-context';
import IsHospital from '../../hooks/IsHospital';
import useApi from '../../hooks/useApi';
// import './Styles/Login.css'




function LogIn(props) {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {request}=useApi((data)=>apiClient.post('/login/',data))


    const auth= useContext(AuthContext);
 
  const navigate=useNavigate()

   async function  handleSubmit(e){
    e.preventDefault()

console.log("sending data...................................")
const result= await request({username:email,password:password})
      if (!result.data) return null
      const userType=await IsHospital(result.data.token)
   auth.login(result.data.token,userType)
  navigate('/')
    }


    function navigateToForget(){
navigate('/forget-password')
    }
    
    return ( 
   
      <div className="container  " style={{height:'100vh'}}>
      <div className="row" style={{marginTop: '10%'}}>
        <div className="col-12 text-center">
          <img src={require("../../assests/logo.png")} className="img-fluid" style={{borderRadius: '8px',width:'13rem'}} />
        </div>        
      </div>
      
      <div className="row mt-4">
        <div className="col-12 text-center">
          <h5 style={{color: '00184c', fontWeight: 'bold'}}>Login Yourself here hello...</h5>
        </div>        
      </div>
      <div className="row mt-4">
        <div className="col-4" style={{margin: 'auto'}}>
          <form onSubmit={handleSubmit} className="card">
             <div className="card-body">
              <div className="col">
                <label htmlFor="id_username" className="form-label">Email</label>
                <input 
                
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                
                
                type="text" className="form-control " id="id_username" name="username" required="True" />
                <div className="form-text" />
              </div>
              <div className="col">
                <label htmlFor="id_password" className="form-label">Password</label>
                <input
                
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                
                type="password" className="form-control " id="id_password" name="password" required="True" />
                <div className="form-text" />
              </div>
              <br />
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-success" fullwidth="{true}" style={{backgroundColor: '#00184c'}}>Login</button>
              </div>
              <br />
              <div className="text-center">
                <a onClick={navigateToForget}  style={{textDecoration: 'none',color:'blue'}}>Forgot Password ?</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
    }

export default LogIn;