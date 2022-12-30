import { create } from "apisauce";
import axios from 'axios'


const baseURL = "http://34.229.12.119:83/api/";
const mediaURL = "http://34.229.12.119:83/";

const apiClient= create({
    baseURL:baseURL
  });

  


  apiClient.addAsyncRequestTransform(async (request) => {
    
    const authToken = localStorage.getItem('token')
    if (!authToken) return;
    request.headers.authorization = `Token ${authToken}`;
  });



  // const apiClient= axios.create({
  //   baseURL:baseURL
  // });
  // const authToken = localStorage.getItem('token')
  //   if (authToken)
  // apiClient.defaults.headers.common = {'Authorization': `Token ${authToken}`}



  export default apiClient

  export {baseURL,mediaURL} 