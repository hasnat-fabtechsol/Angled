import { create } from "apisauce";
import axios from 'axios'


// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
const baseURL = "http://34.229.12.119:83/api/";

const apiClient= create({
    baseURL:baseURL
  });

  //  const apiClient= axios.create({
  //   baseURL:baseURL
  // });


  apiClient.addAsyncRequestTransform(async (request) => {
    
    const authToken = localStorage.getItem('token')
    if (!authToken) return;
    request.headers.authorization = `Token ${authToken}`;
  });


  export default apiClient

  export {baseURL} 