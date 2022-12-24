import { Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";


export default function () {


    const location = useLocation();
    console.log(location.pathname);

    const blog=location.state
console.log(blog);


  return (
 <Container>

    {location.pathname.search("/admin/blog/detail")==-1&&<><Toolbar/>
    <Toolbar/>
    </>}
 <h1>{blog.title}</h1>
 <img  src={blog.image} alt="Card image" style={{width: '30%'}} />
 <div style={{marginTop:40}}>
 <div dangerouslySetInnerHTML={{ __html: blog.content}} />
 </div>
  
      </Container>
  );
}
