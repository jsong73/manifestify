import React from "react";
import "../../App.css";
import { Link } from 'react-router-dom';

const Enter = () => {
    return (
        <div className="circular-gradient text-white">
            <div className="flex flex-col items-center justify-center h-screen">
                 <h1 className="text-center mb-14 text-7xl text-shadow"> Your digital manifestation journal </h1>

                 <Link to="/signup" className="button text-xl text-shadow border border-white rounded-full px-8 py-8"> Start documenting your manifestations </Link>

    
            </div>
      </div>
    );
  };
  
  export default Enter;
  