import React from 'react'
import Loader from "./Loader";
import CareerAdvice  from "./CareerAdvice"
import  { useState, useEffect, useRef } from "react";
import axios from "axios";

const Home = () => {
    const [internshipData, setInternshipData] = useState([]);
  const loaderRef = useRef();

  useEffect(() => {
    loaderRef.current.style.display = "flex";
    axios
      .get("https://internships-web-scraper.herokuapp.com/results")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setInternshipData(data);
        loaderRef.current.style.display = "none";
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
        <section className="internships-section">
          <Loader loaderRef={loaderRef} />
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
        <CareerAdvice />
      </main>
  )
}

export default Home