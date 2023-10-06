import React from "react";
import Nav from "../../components/Nav"
import Fortune from "../../components/Fortune";

const Home = () => {

  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })


    return (
      <main className="circular-gradient text-white text-center">
          <Nav />
             <h1 className="text-8xl mb-10">333</h1>
              <h2 className="text-2xl"> {formattedDate} </h2>

              <Fortune />


      </main>
    );
  };
  
  export default Home;
  