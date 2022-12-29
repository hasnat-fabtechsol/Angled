import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import apiClient from "../../api/apiClient";
import AuthContext from "../../auth/auth-context";
import { AdminButton,Popup, SelectOption } from "../../components/mui";
import colors from "../../config/colors";
import IsHospital from "../../hooks/IsHospital";
import useApi from "../../hooks/useApi";
import {isMobile} from 'react-device-detect';
import "./styles/Home.css";
import LoadingOverlay, { LoadingOverlaySmall } from "../../components/mui/LoadingOverlay";
import Joi from "joi-browser";
function Home(props) {
  const auth = useContext(AuthContext);
  const { formEnable, setFormEnable,open,setOpen } = useOutletContext();
  const [loading,setLoading]=useState(false)

  const [speciality, setSpeciality] = useState("Choose Speciality");

  return (
    <div>
      <div className="position-relative">
      <LoadingOverlay open={loading}/>
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item home-poster active"></div>
            <div class="carousel-item cpr"></div>
            <div class="carousel-item facebook"></div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleSlidesOnly"
            data-bs-slide="prev"
          >
            <span aria-hidden="true">
              <i class="bi bi-arrow-left-circle"></i>
            </span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleSlidesOnly"
            data-bs-slide="next"
          >
            <span aria-hidden="true">
              <i class="bi bi-arrow-right-circle"></i>
            </span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div className="position-absolute w-100 " style={{top:0}}>
          <div className="d-lg-flex justify-content-between  mb-5 align-items-center  px-5">
            <div class="text-center ms-lg-5 ms-sm-3 ms-2">
              <h1 class="font50px text-white mb-4 mt-sm-0 ">
                BROWSE JOBS BY <br />
                SPECIALITY{" "}
              </h1>
              <h1 class="font25px text-white mb-4">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text <br />
                commonly used to demonstrate the visual form of a document or a{" "}
              </h1>

              <Stack
                spacing={2}
                direction="row"
                sx={{ justifyContent: "center" }}
              >
                <div class="dropdown">
                  <a
                    class="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {speciality}
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <button
                        class="dropdown-item"
                        onClick={() => setSpeciality("Doctore")}
                      >
                        Doctor
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        onClick={() => setSpeciality("Nurse")}
                      >
                        Nurse
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        onClick={() => setSpeciality("Dentist")}
                      >
                        Dentist
                      </button>
                    </li>
                  </ul>
                </div>
                <Link
                  class="web-btn bg-green clr-white py-2"
                  style={{ textDecoration: "none" }}
                  to="/jobs"
                >
                  <span>Lets Go</span>
                </Link>
              </Stack>
            </div>
            <div className="text-center ms-lg-5 ms-sm-3 ms-2">
              {isMobile?<MobileContent formEnable={formEnable}
              open={open}
              setOpen={setOpen}
                  setFormEnable={setFormEnable}
                  auth={auth}/>:!formEnable ? (
                    <Container
                    maxWidth="xs"
                    className="d-flex align-items-center my-auto"
                    style={{ height: 700 }}
                  >
                <LogIn
                  formEnable={formEnable}
                  setFormEnable={setFormEnable}
                  auth={auth}
                />
                </Container>
              ) : (
                <Container
      maxWidth="xs"
      className="d-flex align-items-center my-auto"
      style={{ height: 700 }}>
                <SignUp
                  formEnable={formEnable}
                  setFormEnable={setFormEnable}
                  auth={auth}
                />
                </Container>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container bg-white mt-4 pt-4">
        <div class="container mb-5">
          <div class="row px-sm-5">
            <h2 className="text-primary">All Jobs Available</h2>
            <p>All Jobs Available with respect to specialty</p>
            <div class="cards text-primary">
              <div class="card ">
                <div class="d-flex py-4 px-2">
                  <img
                    className="image_style"
                    src={require("../../assests/Home/speciality.png")}
                  />
                  <h6 class="my-auto ms-2 job_fs_size">Job speciality 1</h6>
                </div>
              </div>
              <div class="card ">
                <div class="d-flex py-4 px-2">
                  <img
                    className="image_style"
                    src={require("../../assests/Home/speciality.png")}
                  />
                  <h6 class="my-auto ms-2 job_fs_size">Job speciality 2</h6>
                </div>
              </div>
              <div class="card ">
                <div class="d-flex py-4 px-2">
                  <img
                    className="image_style"
                    src={require("../../assests/Home/speciality.png")}
                  />
                  <h6 class="my-auto ms-2 job_fs_size">Job speciality 3</h6>
                </div>
              </div>
              <div class="card ">
                <div class="d-flex py-4 px-2">
                  <img
                    className="image_style"
                    src={require("../../assests/Home/speciality.png")}
                  />
                  <h6 class="my-auto ms-2 job_fs_size">Job speciality 4</h6>
                </div>
              </div>
              <div class="card ">
                <div class="d-flex py-4 px-2">
                  <img
                    className="image_style"
                    src={require("../../assests/Home/speciality.png")}
                  />
                  <h6 class="my-auto ms-2 job_fs_size">Job speciality 5</h6>
                </div>
              </div>
              <div class="card ">
                <div class="d-flex py-4 px-2">
                  <img
                    className="image_style"
                    src={require("../../assests/Home/speciality.png")}
                  />
                  <h6 class="my-auto ms-2 job_fs_size">Job speciality 6</h6>
                </div>
              </div>
              <div class="card ">
                <div class="d-flex py-4 px-2">
                  <img
                    className="image_style"
                    src={require("../../assests/Home/speciality.png")}
                  />
                  <h6 class="my-auto ms-2 job_fs_size">Job speciality 7</h6>
                </div>
              </div>
              <div class="card ">
                <div class="d-flex py-4 px-2">
                  <img
                    className="image_style"
                    src={require("../../assests/Home/speciality.png")}
                  />
                  <h6 class="my-auto ms-2 job_fs_size">Job speciality 8</h6>
                </div>
              </div>
              <div class="card ">
                <div class="d-flex py-4 px-2">
                  <img
                    className="image_style"
                    src={require("../../assests/Home/speciality.png")}
                  />
                  <h6 class="my-auto ms-2 job_fs_size">Job speciality 9</h6>
                </div>
              </div>
              <div class="card ">
                <div class="d-flex py-4 px-2">
                  <img
                    className="image_style"
                    src={require("../../assests/Home/speciality.png")}
                  />
                  <h6 class="my-auto ms-2 job_fs_size">Job speciality 10</h6>
                </div>
              </div>
              <div class="card ">
                <div class="d-flex py-4 px-2">
                  <img
                    className="image_style"
                    src={require("../../assests/Home/speciality.png")}
                  />
                  <h6 class="my-auto ms-2 job_fs_size">Job speciality 11</h6>
                </div>
              </div>
              <div class="card ">
                <div class="d-flex py-4 px-2">
                  <img
                    className="image_style"
                    src={require("../../assests/Home/speciality.png")}
                  />
                  <h6 class="my-auto ms-2 job_fs_size">Job speciality 12</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row justify-content-center px-sm-5">
            <h2 className="text-primary">Join the Angled INC Family</h2>
            <p>Sign Up in less then 30 seconds to continue.</p>
            <div className=" mb-5">
              <div
                className="m-auto"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
                  gap: "2rem",
                }}
              >
                <div className="bg-white rounded shadow_style p-3">
                  <div class="icon_height justify-content-center text-center ">
                    <div class="py-3">
                      <i class="bi bi-bag-plus-fill bag_style"></i>
                    </div>
                  </div>
                  <h6 className="my-4">Top Facilities</h6>
                  <div class="row">
                    <div class="col-6 white_space">
                      {" "}
                      <i class="bi bi-dot dot_style"></i>
                      <label class="fs_10">Exclusive Contracts</label>
                    </div>
                    <div class="col-6 white_space">
                      {" "}
                      <i class="bi bi-dot dot_style"></i>
                      <label class="fs_10">Nationwide</label>
                    </div>
                    <div class="col-6 white_space">
                      {" "}
                      <i class="bi bi-dot dot_style"></i>
                      <label class="fs_10">Great Locations</label>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded shadow_style p-3">
                  <div class="icon_height justify-content-center text-center ">
                    <div class="py-3">
                      <i class="bi bi-bag-plus-fill bag_style"></i>
                    </div>
                  </div>
                  <h6 className="my-4">Top Facilities</h6>
                  <div class="row">
                    <div class="col-6 white_space">
                      {" "}
                      <i class="bi bi-dot dot_style"></i>
                      <label class="fs_10">Exclusive Contracts</label>
                    </div>
                    <div class="col-6 white_space">
                      {" "}
                      <i class="bi bi-dot dot_style"></i>
                      <label class="fs_10">Nationwide</label>
                    </div>
                    <div class="col-6 white_space">
                      {" "}
                      <i class="bi bi-dot dot_style"></i>
                      <label class="fs_10">Great Locations</label>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded shadow_style p-3">
                  <div class="icon_height justify-content-center text-center ">
                    <div class="py-3">
                      <i class="bi bi-bag-plus-fill bag_style"></i>
                    </div>
                  </div>
                  <h6 className="my-4">Top Facilities</h6>
                  <div class="row">
                    <div class="col-6 white_space">
                      {" "}
                      <i class="bi bi-dot dot_style"></i>
                      <label class="fs_10">Exclusive Contracts</label>
                    </div>
                    <div class="col-6 white_space">
                      {" "}
                      <i class="bi bi-dot dot_style"></i>
                      <label class="fs_10">Nationwide</label>
                    </div>
                    <div class="col-6 white_space">
                      {" "}
                      <i class="bi bi-dot dot_style"></i>
                      <label class="fs_10">Great Locations</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-3">
          <div className="row px-sm-5">
            <div className="col-md-7 col-12 fs_md_12">
              <h2>About Us</h2>
              <p className>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. In
                publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a
                typeface without relying on meaningful content.<br></br>
                <br></br>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </p>
              <button className="btn btn-primary mb-md-0 mb-4" type="button">
                Get Started{" "}
              </button>
            </div>
            <div className="col-md-5 col-12 mb-3">
              <img
                src={require("../../assests/Home/mission-pic.png")}
                alt="missionStatement"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div class="row">
            <div className="background_img">
              <div className="background_border py-3 d-flex">
                <div class="bg_bag_plus my-auto mx-2">
                  <i class="bi bi-bag-plus-fill bag_style p-2 text-white"></i>
                </div>
                <p className="mb-0 mx-2 text-white">
                  Angled INC Staffing is great!! They make you feel like family.
                  I would<br></br> recommend them to anyone.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div class="row my-5 dubl_color">
          <div class="col">
            <div class="row  py-5">
              <div className="col-sm-6 text-center text-sm-start text-md-end  mt-2">
                <img
                  src={require("../../assests/Home/humberto.png")}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-sm-6 ps-md-5 d-flex justify-content-center justify-content-sm-start">
                <div>
                  <div className="py-3 d-flex">
                    <div class="bg-white my-auto mx-2 p-2 border_radu">
                      <img
                        src={require("../../assests/Home/search_job.png")}
                        style={{ width: "20px", height: "20px" }}
                      />
                    </div>
                    <p className="mb-0 mx-2 text-white">
                      Search Jobs <br />
                      <span style={{ fontSize: "10px" }}>
                        Match availability to open positions
                      </span>
                    </p>
                  </div>
                  <div className="py-3 d-flex">
                    <div class="bg-white my-auto mx-2 p-2 border_radu">
                      <img
                        src={require("../../assests/Home/schedual.png")}
                        style={{ width: "20px", height: "20px" }}
                      />
                    </div>
                    <p className="mb-0 mx-2 text-white">
                      Manage Your Schedule <br />
                      <span style={{ fontSize: "10px" }}>
                        View calendar of scheduled shifts
                      </span>
                    </p>
                  </div>
                  <div className="py-3 d-flex">
                    <div class="bg-white my-auto mx-2 p-2 border_radu">
                      <img
                        src={require("../../assests/Home/time_cord.png")}
                        style={{ width: "20px", height: "20px" }}
                      />
                    </div>
                    <p className="mb-0 mx-2 text-white">
                      Submit Timecards <br />
                      <span style={{ fontSize: "10px" }}>
                        Conveniently document and submit timecards
                      </span>
                    </p>
                  </div>
                  <div className="py-3 d-flex">
                    <div class="bg-white my-auto mx-2 p-2 border_radu">
                      <img
                        src={require("../../assests/Home/GetNotified.png")}
                        style={{ width: "20px", height: "20px" }}
                      />
                    </div>
                    <p className="mb-0 mx-2 text-white">
                      Get Notified <br />
                      <span style={{ fontSize: "10px" }}>
                        receive notifications on saved job searches
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


const validateData = (user) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
  });

  const val = schema.validate(user);
  if (val.error) return val.error.message;
};
function LogIn({setOpen, formEnable, setFormEnable}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { request } = useApi((data) => apiClient.post("/login/", data));
  const [message, setMessage] = useState({text:"",color:""});
  const [loading, setLoading] = useState(false);
  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    resetErrors()
    if(validateData({email:email}))
    return setMessage({text:"Not A Valid Email Please Enter a Valid Email",color:"danger"})
    if(password.length<6)
    return setMessage({text:"Password should be atleast 6 characters",color:"danger"})
  
setLoading(true)
    console.log("sending data...................................");
    const result = await request({ username: email, password: password });
    setLoading(false)
    if (result.status != 200) return setMessage({text:"Email or Password is Incorrect",color:"danger"});
    const userType = await IsHospital(result.data.token);
    auth.login(result.data.token, userType ? userType : false);
    if(isMobile)
    setOpen(false)
   
    navigate("/");
  }

  function navigateToForget() {
    navigate("/forget-password");
  }
  function resetErrors() {
      setMessage({text:"",color:""})
    
  }

  return (
    <>
      {!auth.isLoggedIn && (
        <Container
          component="main"
          style={{
            backgroundColor: "white",
            justifyContent: "center",
            paddingBottom:isMobile?10:60,
            borderRadius: 10,
          }}
        >
          <Box
            sx={{
              marginTop: isMobile?0:8,
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
              {message.text&& <div className={`bg-${message.color} p-1 m-1`}>
                  <span>{message.text}</span>
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
              </Grid>

            { !loading? <AdminButton
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
              />: <LoadingOverlaySmall open={loading}/>}
              
              <Grid container justifyContent="space-around">
                <Grid item>
                  <Button onClick={() => setFormEnable(!formEnable)}>
                    Create a New Account
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
}
function SignUp({ formEnable, setFormEnable }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({text:"",color:""});

  const { request } = useApi((data) => apiClient.post("/register/", data));
  const auth = useContext(AuthContext);
function checkEmpty(){

  if(!firstName){
    setMessage({text:"firstName is Required",color:"danger"})
    return true
  }
  if(!lastName){
    setMessage({text:"lastName is Required",color:"danger"})
    return true
  }
  if(!phone){
    setMessage({text:"phone is Required",color:"danger"})
    return true
  }
  if(!email){
    setMessage({text:"Email is Required",color:"danger"})
    return true
  }
  return false

  
}
  async function handleSubmit(e) {
    e.preventDefault();
    resetErrors();
    console.log(checkEmpty())
    if(checkEmpty())
    return
    if(validateData({email:email}))
  return setMessage({text:"Not A Valid Email Please Enter a Valid Email",color:"danger"})

  if(password!=confirmPassword)
  return setMessage({text:"Password doesn't match please enter again",color:"danger"})
  if(password.length<6)
  return setMessage({text:"Password should be atleast 6 characters",color:"danger"})

    setLoading(true)
    if (password !== confirmPassword) return;
    const result = await request({
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      email: email,
      password: password,
    });
    console.log("hello");
    setLoading(false)
    if (result.status != 200)
    {
      if(result.data.email[0].search('email already exists')!=-1)
      return  setMessage({text:"Email Already Exist Please use different email",color:"danger"});
      else
      return  setMessage({text:"Error Occured while creating Account try again",color:"danger"});
    }
    setMessage({text:"Successfully Added",color:"success"})
    console.log("Account created succesfully");
    emptyForm();
    console.log(result.data);
  }

  function resetErrors() {
    setMessage({text:"",color:""})
  }
  function emptyForm() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
  }
  return (
    <>
   
      {!auth.isLoggedIn && (
        <Container
          component="main"
          
          style={{
            backgroundColor: "white",
            justifyContent: "center",
            paddingBottom:isMobile?10:30,
            borderRadius: 10,
          }}
        >
        
          <Box
            sx={{
              marginTop: isMobile?0:8,
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
              > Register Now
              </Typography>
              {message.text&& <div className={`bg-${message.color} p-1 m-1`}>
                  <span>{message.text}</span>
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
                    size="small"
                    id="fname"
                    label="Firstname"
                    name="firstname"
                    autoComplete="firstname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onFocus={resetErrors}
                    required
                    fullWidth
                    size="small"
                    name="lastname"
                    type="text"
                    label="Lastname"
                    id="lname"
                    autoComplete="lastname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onFocus={resetErrors}
                    required
                    fullWidth
                    size="small"
                    id="phone"
                    label="Phone"
                    name="phone"
                    autoComplete="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onFocus={resetErrors}
                    required
                    fullWidth
                    size="small"
                    name="email"
                    label="Email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onFocus={resetErrors}
                    required
                    fullWidth
                    size="small"
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onFocus={resetErrors}
                    required
                    fullWidth
                    size="small"
                    name="confirm-password"
                    label="Confirm Password"
                    type="password"
                    id="confirm-password"
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Grid>
              </Grid>

             {!loading? <AdminButton
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
              />:
              <LoadingOverlaySmall open={loading}/>}
              <Grid container justifyContent="space-around">
                <Grid item>
                  <Link
                    onClick={() => setFormEnable(!formEnable)}
                    variant="body2"
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
}


function MobileContent({auth,open,setOpen,formEnable, setFormEnable }){

  
  return(

    <Popup
    title="Account"
    content={!formEnable?
      <LogIn
      formEnable={formEnable}
      setFormEnable={setFormEnable}
      auth={auth}
      setOpen={setOpen}
    />
   : 
    <SignUp
      formEnable={formEnable}
      setFormEnable={setFormEnable}
      auth={auth}
      setOpen={setOpen}

    />}
    isOpen={open}
    />
  
  )

}
