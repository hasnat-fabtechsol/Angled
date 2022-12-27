import * as yup from 'yup';

let schema = yup.object().shape({
  email: yup.string().email(),
});

const isValidEmail=async(email)=>{

   var result=await schema.isValid({
        email: email,
      })
      return result
}


export {isValidEmail}

