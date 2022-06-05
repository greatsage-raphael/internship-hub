import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [internshipData, setInternshipData] = useState([]);

  useEffect(() => {
    fetch("https://internships-web-scraper.herokuapp.com/results")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setInternshipData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
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
