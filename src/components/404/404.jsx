import React from "react";
import animationData from "../../assets/PageNotFound/PageNotFound.json";

import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";

function PageNotFound() {
    const navigation = useNavigate();
  return (
    
    <div className="min-h-screen flex justify-center align-items-center flex-col">
      <Lottie animationData={animationData} loop={true} autoPlay={true} style={
       {
        width: "400px",
        height: "600px"    }
      } />
      {/* <Link to={"/"} className="bg-red-500 p-2 rounded">Back to home</Link> */}
      <button onClick={() => { navigation("/")
      }} className="bg-red-500 p-2 rounded">Back to home</button>
    </div>
  );
}

export default PageNotFound;
