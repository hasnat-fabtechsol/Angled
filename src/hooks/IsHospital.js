import apiClient from "../api/apiClient";

const IsHospital=async (authToken )=>{

const api=apiClient
api.addAsyncRequestTransform(async (request) => {
 
    
    if (!authToken) return;
    request.headers.authorization = `Token ${authToken}`;
  });


    const response=await api.get('/ishospital/')
   console.log(response)
                
       if(response.status!=200){
     
        
       return console.log("error while validating")
       }

    
      return response.data
    
     
     
}



export default IsHospital;