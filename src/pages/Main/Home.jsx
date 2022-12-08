import { Box, Button, Container, Grid, TextField, Toolbar, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import apiClient from '../../api/apiClient';
import AuthContext from '../../auth/auth-context';
import { AdminButton, SelectOption } from '../../components/mui';
import colors from '../../config/colors';
import IsHospital from '../../hooks/IsHospital';
import useApi from '../../hooks/useApi';
import './styles/Home.css'
function Home(props) {
    const auth = useContext(AuthContext);
    const {formEnable,setFormEnable}=useOutletContext()


    
return (
<div>       
    <div className='home-poster'>
    <Toolbar />
    <Toolbar />
 
    <div className="d-lg-flex justify-content-between  mb-5 align-items-center  px-5">
    
        <div class="text-center ms-lg-5 ms-sm-3 ms-2">
            <h1 class="font50px text-white mb-4">BROWSE JOBS BY <br />SPECIALITY </h1>
            <h1 class="font25px text-white mb-4">In publishing and graphic design, Lorem ipsum is a placeholder text <br/>
commonly used to demonstrate the visual form of a document or a </h1>
           
    

           <Stack spacing={2} direction="row" sx={{justifyContent:'center'}}>
          <SelectOption
            name="speciality"
            label="Job Speciality"
            size="small"
            selectCss={{ width: "200px" }}
            style={{border:'2px solid white',borderRadius:2}}
            labelStyle={{color:'white'}}
            data={[{"id":2,"name":"Developer"},{"id":1,"name":"Designer"}]}
        

          />
           <Link class="web-btn bg-green clr-white py-2" style={{textDecoration:'none'}} to="/jobs"><span>Lets Go</span></Link>
         
        </Stack>



       
           
          


        </div>
        <div className="text-center ms-lg-5 ms-sm-3 ms-2">
           
       {!formEnable?
       <LogIn formEnable={formEnable} setFormEnable={setFormEnable} auth={auth} />:
     <SignUp formEnable={formEnable} setFormEnable={setFormEnable} auth={auth} /> }
        </div>
    </div>
    </div>

    <div className="container bg-white mt-4 pt-4 ps-5">
    <Container maxWidth="lg" className='g-3'  style={{height:700,backgroundColor:'yellow'}}>
    <Typography
component="h1"
variant="h5"
sx={{ color: colors.primary, fontWeight: "bold" }}
>
All Jobs Available
</Typography>
    <Typography
>
All Jobs Available with respect to Speciality
</Typography>

<div className='row'>

<div className='col-3 d-flex align-items-center text-start bg-dark' style={{borderRadius: 13,border: "1px solid #1A75BB"}}>
    <img src={require("../../assests/Home/speciality.png")}/>
    <Typography
component="h1"
variant="h5"
sx={{ color: colors.primary, fontWeight: "bold" }}
>
Speciality1
</Typography>
  </div>
<div className='col-3 d-flex align-items-center text-start bg-dark' style={{borderRadius: 13,border: "1px solid #1A75BB"}}>
    <img src={require("../../assests/Home/speciality.png")}/>
    <Typography
component="h1"
variant="h5"
sx={{ color: colors.primary, fontWeight: "bold" }}
>
Speciality1
</Typography>
  </div>
<div className='col-3 d-flex align-items-center text-start bg-dark' style={{borderRadius: 13,border: "1px solid #1A75BB"}}>
    <img src={require("../../assests/Home/speciality.png")}/>
    <Typography
component="h1"
variant="h5"
sx={{ color: colors.primary, fontWeight: "bold" }}
>
Speciality1
</Typography>
  </div>
<div className='col-3 d-flex align-items-center text-start bg-dark' style={{borderRadius: 13,border: "1px solid #1A75BB"}}>
    <img src={require("../../assests/Home/speciality.png")}/>
    <Typography
component="h1"
variant="h5"
sx={{ color: colors.primary, fontWeight: "bold" }}
>
Speciality1
</Typography>
  </div>
 

</div>
</Container>
        <div className="flex-center position-relative gap-3 mb-3 rounded form-poster"
            >
            <div className=" flex-center flex-wrap gap-4">
                <div className=" pointer bg-white shadow rounded text-center p-md-3 p-2"><img
                        src={require('../../assests/Home/icons/icon7.png')} alt="instantForms" style={{width: '3rem'}} />
                    <h6 className="mt-3">Instant Online Forms</h6>
                </div>
                <div className=" pointer bg-white shadow rounded text-center p-md-3 p-2"><img
                       src={require('../../assests/Home/icons/icon8.png')} alt="downloadForm" style={{width: '2.5rem'}} />
                    <h6 className="mt-3">Download Pdf Forms</h6>
                </div>
            </div>
            <div className="position-absolute" style={{top: '100%', left: '50%', transform: 'translate(-50%, -100%)'}}>
                <img src={require('../../assests/Home/HomeBottom.png')} alt="home2Bottom" /></div>
        </div>
        <div className="text-center mb-5">
            <h2 className="f700 mb-5" style={{lineHeight: '3rem'}}>We'll always match you up with opportunities <br />
                that are the right fit</h2>
            <div className="m-auto"
                style={{width: '75%', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 1fr))', gap: '2rem'}}>
                <div className="bg-white rounded shadow p-3"><img  src={require('../../assests/Home/icons/icon1.png')} alt="opportunity1"
                        style={{width: '5rem'}} />
                    <h5 className="my-4">Policies &amp; Procedures</h5>
                    <p className="font14px">This manual is intended to provide employees with a general understanding of
                        our personnel policies and procedures.</p>
                </div>
                <div className="bg-white rounded shadow p-3"><img  src={require('../../assests/Home/icons/icon2.png')} alt="opportunity1"
                        style={{width: '5rem'}} />
                    <h5 className="my-4">COMPETENCIES</h5>
                    <p className="font14px">Asses your workforce through our online clinical competencies exams.</p>
                </div>
                <div className="bg-white rounded shadow p-3"><img  src={require('../../assests/Home/icons/icon3.png')} alt="opportunity1"
                        style={{width: '5rem'}} />
                    <h5 className="my-4">FORMS</h5>
                    <p className="font14px">Whenever you struggle with anything regarding Rife Pro, just hit us a
                        message on our support forum.</p>
                </div>
                <div className="bg-white rounded shadow p-3"><img  src={require('../../assests/Home/icons/icon4.png')} alt="opportunity1"
                        style={{width: '5rem'}} />
                    <h5 className="my-4">APPLY ONLINE</h5>
                    <p className="font14px">Ready to Apply? You’re in the right spot.</p>
                </div>
                <div className="bg-white rounded shadow p-3"><img  src={require('../../assests/Home/icons/icon5.png')} alt="opportunity1"
                        style={{width: '5rem'}} />
                    <h5 className="my-4">SKILLS CHECKLIST</h5>
                    <p className="font14px">Please provide us with your skills, knowledge, and abilities.</p>
                </div>
                <div className="bg-white rounded shadow p-3"><img  src={require('../../assests/Home/icons/icon6.png')} alt="opportunity1"
                        style={{width: '5rem'}} />
                    <h5 className="my-4">STAFFING NEEDS</h5>
                    <p className="font14px">Tell us your staffing needs.</p>
                </div>
            </div>
        </div>
        <div className="mb-3">
            <div className="row">
                <div className="col-sm-5 col-12 mb-3"><img src={require('../../assests/Home/mission-pic.png')} alt="missionStatement"
                        style={{width: '100%'}} /></div>
                <div className="col-sm-7 col-12">
                    <h2 className="f700">Mission Statement</h2>
                    <p className>Our mission at HHI is to help companies meet their staffing needs. We will provide
                        superior health care. HHI will work with organizations of all sizes, providing them with
                        productive and efficient temporary personnel. HHI markets personnel to business, industry,
                        government and healthcare facilities as well as to individuals at home. HHI complies with The
                        Joint Commission Accreditation of Health Care Organizations standards. Ensuring consistent
                        operating policies and procedures is critical to the clients we serve. Below is a summary of the
                        type of healthcare personnel we hire: Clinical: Registered Nurses, Licensed Practical Nurses,
                        Certified Home Health Aides, Physical Therapist, Nursing Assistants, Respiratory Therapists and
                        a variety of Allied Health Professionals. Keeping both employee and client happy is our goal. We
                        must be aware of the needs of our clients so that they are fully satisfied with every assignment
                        for which we are responsible. Our growth will be evidence that we do this well. We will retained
                        clients who have the skills and the experience from the very inception of our business.</p>
                </div>
            </div>
        </div>
        <div className="text-center clr-purple p-4"><img src={require('../../assests/Home/cpr.png')} alt="crpExpert"
                style={{width: '17rem'}} />
            <p>AN AMERICAN HEART ASSOCIATION TRAINING WEB SITE.</p>
            <p>ONLINE COURSES OFFERED:</p>
            <p>ACLS, BLS, FIRST AID, NRP, PALS, PEDIATRIC FIRST AID AND CEUS</p><img src={require('../../assests/Home/lacy.png')}
                alt="lacyFinancial" style={{width: '17rem'}} />
            <p>AN INVESTMENT ADVISORY FIRM</p>
            <p>OFFER CONSULTING SERVICES HELPING YOU EVERY STEP OF THE WAY TO SUCCESS: PLAN, BUDGET., INVEST AND MANAGE.
            </p>
            <p>TRY US OUT!</p>
        </div>
    </div>
</div>
);
}

export default Home;



function LogIn({formEnable,setFormEnable}) {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const {request}=useApi((data)=>apiClient.post('/login/',data))
  const[error, setError]=useState()

  const auth= useContext(AuthContext);

const navigate=useNavigate()

 async function  handleSubmit(e){
  e.preventDefault()

console.log("sending data...................................")
const result= await request({username:email,password:password})
console.log(result);
    if (result.status!=200) return setError(true)
    const userType=await IsHospital(result.data.token)
 auth.login(result.data.token,userType)
navigate('/')
  }


  function navigateToForget(){
navigate('/forget-password')
  }
  function resetErrors(){
    setError(false)
    console.log("hello")
  }
  
  return ( 
    <Container maxWidth="xs" className="d-flex align-items-center my-auto" style={{height:700}}>
  {!auth.isLoggedIn&&  <Container component="main"    style={{backgroundColor:'white',justifyContent:'center',paddingBottom:60,borderRadius:10}}>


<Box
sx={{
marginTop: 8,
display: "flex",
flexDirection: "column",
alignItems: "center",
}}
>

<Box className="text-start w-100">

<Typography
component="h1"
variant="h5"
sx={{ color: colors.primary, fontWeight: "bold" }}
>
Login Now
</Typography>
{ error&&<div className={'bg-danger p-1'}> 
              <span>Invalid Email or Password</span>
              </div>}
</Box>
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
    required
    fullWidth
    label="name"
    name="username"
    autoComplete="username"
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
    autoComplete="new-password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
  />
</Grid>

</Grid>

<AdminButton
name="Login"
type="submit"
size="large"
fullWidth={true}
style={{
  backgroundColor: colors.primary,
  "&:hover": { backgroundColor: "#002370" },
  whiteSpace: "nowrap",
  mt: 3,
  mb: 2,
}}
/>
<Grid container justifyContent="space-around">
<Grid item>
  <Button onClick={()=>setFormEnable(!formEnable)}  >
    Create a New Account
  </Button>
</Grid>
</Grid>

</Box>
</Box>
</Container>}
</Container>

  );
  }
  function SignUp({formEnable,setFormEnable}) {


   
    const[firstName, setFirstName]=useState()
    const[lastName, setLastName]=useState()
    const[email, setEmail]=useState()
    const[password, setPassword]=useState()
    const[confirmPassword, setConfirmPassword]=useState()
    const[phone, setPhone]=useState()
    const[success, setSuccess]=useState()
    const[error, setError]=useState()
    const {request}=useApi((data)=>apiClient.post('/register/',data))
    const auth=useContext(AuthContext)
    async function  handleSubmit(e){
     
  
      e.preventDefault()
      resetErrors()
      if(password!==confirmPassword)
      return
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
emptyForm()
         console.log(result.data)
          }
      
      
          function resetErrors(){
            setError(false)
            setSuccess(false)
            console.log("hello")
          }
          function emptyForm(){
            setFirstName("")
            setLastName("")
            setEmail("")
            setPhone("")
            setPassword("")
            setConfirmPassword("")
          }
      return (
        <Container  maxWidth="xs" className="d-flex align-items-center my-auto" style={{height:700}}>
       {!auth.isLoggedIn&&<Container component="main" maxWidth="xs"   style={{backgroundColor:'white',justifyContent:'center',paddingBottom:30,borderRadius:10}}>



        <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        >
        
        <Box className="text-start w-100">
        
        <Typography
              component="h1"
              variant="h5"
              sx={{ color: colors.primary, fontWeight: "bold" }}
            >
              Register Now
            </Typography>
            { error?<div className={'bg-danger p-1'}> 
              <span>Invalid Email or Password</span>
              </div>:
              success&&<div className={'bg-success p-1'}> 
              <span>Account Created Successfully Login Now</span>
              </div>}
        </Box>
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
                    required
                    fullWidth
                    size='small'
                    id="fname"
                    label="Firstname"
                    name="firstname"
                    autoComplete="firstname"
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  onFocus={resetErrors}
                    required
                    fullWidth
                    size='small'
                    name="lastname"
                    type="text"
                    label="Lastname"
                    id="lname"
                    autoComplete="lastname"
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  onFocus={resetErrors}
                    required
                    fullWidth
                    size='small'
                    id="phone"
                    label="Phone"
                    name="phone"
                    autoComplete="phone"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  onFocus={resetErrors}
                    required
                    fullWidth
                    size='small'
                    name="email"
                    label="Email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  onFocus={resetErrors}
                    required
                    fullWidth
                    size='small'
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
                    size='small'
                    name="confirm-password"
                    label="Confirm Password"
                    type="password"
                    id="confirm-password"
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                  />
                </Grid>
               
              </Grid>
        
              <AdminButton
                name="Register"
                type="submit"
                size="medium"
                fullWidth={true}
                style={{
                  backgroundColor: colors.primary,
                  "&:hover": { backgroundColor: "#002370" },
                  whiteSpace: "nowrap",
                  mt: 3,
                  mb: 2,
                }}
              />
              <Grid container justifyContent="space-around">
                <Grid item>
                  <Link onClick={()=>setFormEnable(!formEnable)} variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
        
              </Box>
              </Box>
              </Container>}
              </Container>
  
           );
  }