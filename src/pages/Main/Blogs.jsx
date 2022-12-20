import { Toolbar } from '@mui/material'
import React from 'react'
import './styles/blogs.css'

export default function Blogs() {
  return (
    <div>
       <Toolbar/>
  <Toolbar/>
    <div className="container-fluid">
      <div className="row back_img my-3 mx-0 mx-sm-4">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 pt-3 ps-sm-5 my-auto">
          <h1 className="Hfs_16">Our Blogs</h1>
          <button type="button" className="px-4 py-2 mt-3 Contact_btn">Sign in to Apply</button>
          <img  src={require("../../assests/Blogs/play-circle.png")} alt="" className="play_img ms-3" />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img className="card-img-top" src={require("../../assests/Blogs/blog_img.png")} alt="Card image" style={{width: '100%'}} />
            <div className="card-body">
              <div className="d-flex">
                <div className="blog_profile_img">
                  <img src={require("../../assests/Blogs/blog_img.png")}  className="img-fluid rounded-circle h-100 w-100" alt="" />
                </div>
                <div className="my-auto mx-2">
                  <h6 className="mb-0">Ashley Tran</h6>
                </div>
                <div className="my-auto">
                  <p className="mb-0">September 14, 2022</p>
                </div>
              </div>
              <h5 className="card-title">5 Ways to Become a Successful Travel Nurse</h5>
              <div id="section">
                <div className="article">
                  <p className="mb-0 fs_12">Whether you’re a seasoned travel nurse or brand new to the 
                    field, you might be looking for a few ways you can thrive as a travel nurse. 
                    Inside this article we dive into five different.</p>
                  <p className=" fs_12 moretext" style={{display: 'none'}}>Whether you’re a seasoned travel nurse or brand new to the 
                    field, you might be looking for a few ways you can thrive as a travel nurse. 
                    Inside this article we dive into five different.</p>
                </div>
                <button type="button" className="btn btn-link moreless-button">Read more</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img className="card-img-top" src={require("../../assests/Blogs/blog_img.png")} alt="Card image" style={{width: '100%'}} />
            <div className="card-body">
              <div className="d-flex">
                <div className="blog_profile_img">
                  <img src={require("../../assests/Blogs/blog_img.png")} className="img-fluid rounded-circle h-100 w-100" alt="" />
                </div>
                <div className="my-auto mx-2">
                  <h6 className="mb-0">Ashley Tran</h6>
                </div>
                <div className="my-auto">
                  <p className="mb-0">September 14, 2022</p>
                </div>
              </div>
              <h5 className="card-title">5 Ways to Become a Successful Travel Nurse</h5>
              <div id="section">
                <div className="article">
                  <p className="mb-0 fs_12">Whether you’re a seasoned travel nurse or brand new to the 
                    field, you might be looking for a few ways you can thrive as a travel nurse. 
                    Inside this article we dive into five different.</p>
                  <p className=" fs_12 moretext" style={{display: 'none'}}>Whether you’re a seasoned travel nurse or brand new to the 
                    field, you might be looking for a few ways you can thrive as a travel nurse. 
                    Inside this article we dive into five different.</p>
                </div>
                <button type="button" className="btn btn-link moreless-button">Read more</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img className="card-img-top" src={require("../../assests/Blogs/blog_img.png")} alt="Card image" style={{width: '100%'}} />
            <div className="card-body">
              <div className="d-flex">
                <div className="blog_profile_img">
                  <img src={require("../../assests/Blogs/blog_img.png")} className="img-fluid rounded-circle h-100 w-100" alt="" />
                </div>
                <div className="my-auto mx-2">
                  <h6 className="mb-0">Ashley Tran</h6>
                </div>
                <div className="my-auto">
                  <p className="mb-0">September 14, 2022</p>
                </div>
              </div>
              <h5 className="card-title">5 Ways to Become a Successful Travel Nurse</h5>
              <div id="section">
                <div className="article">
                  <p className="mb-0 fs_12">Whether you’re a seasoned travel nurse or brand new to the 
                    field, you might be looking for a few ways you can thrive as a travel nurse. 
                    Inside this article we dive into five different.</p>
                  <p className=" fs_12 moretext" style={{display: 'none'}}>Whether you’re a seasoned travel nurse or brand new to the 
                    field, you might be looking for a few ways you can thrive as a travel nurse. 
                    Inside this article we dive into five different.</p>
                </div>
                <button type="button" className="btn btn-link moreless-button">Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* same_javascrept_in_about_us_and_this_page */}
  </div>
  
  )
}
