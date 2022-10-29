import { Box, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../../api/apiClient';
import AdminButton from '../../components/AdminButton';
import useApi from '../../hooks/useApi';
// import './Styles/css/style.css'

function SignUp() {


   
  const[firstName, setFirstName]=useState()
  const[lastName, setLastName]=useState()
  const[email, setEmail]=useState()
  const[password, setPassword]=useState()
  const[confirmPassword, setConfirmPassword]=useState()
  const[phone, setPhone]=useState()
  const[success, setSuccess]=useState()
  const[error, setError]=useState()
  const {request}=useApi((data)=>apiClient.post('/register/',data))
  async function  handleSubmit(e){

    e.preventDefault()
    resetErrors()
    console.log("sending data...................................")
    const result= await request( {
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      email: email,
      password: password,
    })
       console.log('hello')
          if (result.status!=200) return setError(true);
          setSuccess(true)
          console.log("Account created succesfully")
       console.log(result.data)
        }
    
    
        function resetErrors(){
          setError(false)
          setSuccess(false)
          console.log("hello")
        }
    return (
      <Container component="main" maxWidth="xs" style={{marginBottom:'25px'}}>

      <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box mb={3} sx={{ borderRadius: "10px", overflow: "hidden" }}>
        <img src={require('../../assests/logo.png')} alt="" />
      </Box>


<Typography
            component="h1"
            variant="h5"
            sx={{ color: "#00184c", fontWeight: "bold" }}
          >
            Registering Yourself here...
          </Typography>
          { error?<div className={'bg-danger p-1'}> 
              <span>Invalid Email or Password</span>
              </div>:
              success&&<div className={'bg-success p-1'}> 
              <span>Account Created Successfully</span>
              </div>}
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
        
           <Grid container spacing={2}>
              <Grid item xs={12}>
              
                <TextField
                 onFocus={resetErrors}
                  autoComplete="given-name"
                  name="first_name"
                  required
                  fullWidth
                  id="first_name"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={(e)=>setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 onFocus={resetErrors}
                  autoComplete="given-name"
                  name="last_name"
                  required
                  fullWidth
                  id="last_name"
                  label="Last Name"
                  value={lastName}
                  onChange={(e)=>setLastName(e.target.value)}
                />
              </Grid>


              <Grid item xs={12}>
                <TextField
                onFocus={resetErrors}
                  autoComplete="given-name"
                  name="phone"
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 onFocus={resetErrors}
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                onFocus={resetErrors}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
              onFocus={resetErrors}
                  required
                  fullWidth
                  name="confirm_password"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                  
                />
              </Grid>
            </Grid>

            <AdminButton
              name="Register"
              type="submit"
              size="large"
              fullWidth={true}
              style={{
                backgroundColor: "#00184c",
                "&:hover": { backgroundColor: "#002370" },
                whiteSpace: "nowrap",
                mt: 3,
                mb: 2,
              }}
            />
            <Grid container justifyContent="space-around">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>

            </Box>
            </Box>
            </Container>

         );
}

export default SignUp;