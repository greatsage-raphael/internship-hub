import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

function App() {
  const [internshipData, setInternshipData] = useState([]);
  const loaderRef = useRef();

  useEffect(() => {
    loaderRef.current.style.display = "flex";
    fetch("https://internships-web-scraper.herokuapp.com/results")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setInternshipData(data);
        loaderRef.current.style.display = "none";
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <Loader loaderRef={loaderRef} />
      <div>
        {internshipData.map((internship, index) => (
          <div key={index}>
            <a href={internship.link}>{internship.title}</a>
            <p>{internship.company}</p>
            <p>{internship.location}</p>
            <img src={internship.logo} alt={internship.company + " logo"} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
