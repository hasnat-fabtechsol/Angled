// import React, { useState, useEffect, useCallback } from 'react';


// const AuthContext = React.createContext({
//   token: '',
//   isLoggedIn: false,
//   login: (token) => {},
//   logout: () => {},
// });


// const retrieveStoredToken = () => {
//   const storedToken = localStorage.getItem('token');



//   return storedToken
// };

// export const AuthContextProvider = (props) => {
//   const tokenData = retrieveStoredToken();
  
//   let initialToken;
//   if (tokenData) {
//     initialToken = tokenData;
//   }

//   const [token, setToken] = useState(initialToken);

//   const userIsLoggedIn = !!token;

//   const logoutHandler = useCallback(() => {
//     setToken(null);
//     localStorage.removeItem('token');

   
//   }, []);

//   const loginHandler = (token) => {
//     console.log(token)
//     setToken(token);
//     localStorage.setItem('token', token);
//   };

//   useEffect(() => {
//     if (tokenData) {
//       console.log(tokenData);
//     }
//   }, [tokenData, logoutHandler]);

//   const contextValue = {
//     token: token,
//     isLoggedIn: userIsLoggedIn,
//     login: loginHandler,
//     logout: logoutHandler,
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;



















import React, { useState, useEffect, useCallback } from 'react';


const AuthContext = React.createContext({
  token: '',
  userType:false,
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});


const retrieveStoredData = () => {
  const storedToken = localStorage.getItem('token');
  const storedType = (localStorage.getItem('userType') === 'true')



  return {storedToken,storedType}
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredData();
  
  let initialToken;
  let initialType;
  if (tokenData) {
    initialToken = tokenData.storedToken;
    initialType=tokenData.storedType
  }

  const [token, setToken] = useState(initialToken);
  const [userType, setuserType] = useState(initialType);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userType');

   
  }, []);

  const loginHandler = (token,type) => {
    console.log(token)
    setToken(token);
    setuserType(type)
    localStorage.setItem('token', token);
    localStorage.setItem('userType', type);
  };


  useEffect(() => {
    if (tokenData) {
      console.log(tokenData);
    }

  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    userType:userType,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

