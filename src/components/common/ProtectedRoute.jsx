import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";
import Loader from "./Loader";


const ProtectedRoute = ({ children }) => {


  const { user, loading } = useContext(AuthContext);

  const location = useLocation();



  // Authentication checking

  if (loading) {

    return (

      <Loader fullScreen />

    );

  }



  // User login illa na

  if (!user) {

    return (

      <Navigate

        to="/login"

        replace

        state={{
          from: location
        }}

      />

    );

  }



  // User irundha page show

  return children;


};


export default ProtectedRoute;
