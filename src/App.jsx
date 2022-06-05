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
      <section className="internships-section">
        {internshipData.map((internship, index) => (
          <>
            <div key={index} className="internship">
              <img
                src={internship.logo}
                alt={internship.company + " logo"}
                className="logo"
              />
              <div className="internship-detail">
                <a
                  href={internship.link}
                  className="title"
                  target="_blank"
                  rel="noreferrer"
                >
                  {internship.title}
                </a>
                <p className="company">{internship.company}</p>
                <p className="location">{internship.location}</p>
                <small>{internship.datePosted}</small>
              </div>
            </div>
            <hr />
          </>
        ))}
      </section>
    </>
  );
}

export default App;
