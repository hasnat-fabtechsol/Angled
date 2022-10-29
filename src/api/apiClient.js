import { create } from "apisauce";
import axios from 'axios'
const baseURL = "http://34.229.12.119:83/api/";

// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

export default create({
    baseURL:baseURL
  });

  // export default axios.create({
  //   baseURL:baseURL
  // });