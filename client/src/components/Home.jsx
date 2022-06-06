import React from 'react'
import Loader from "./Loader";
import CareerAdvice  from "./CareerAdvice"
import  { useState, useEffect, useRef } from "react";
import axios from "axios";

const Home = () => {
    const [internshipData, setInternshipData] = useState([]);const [query, setQuery] = useState("");
  const loaderRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
    .get(`https://internships-web-scraper.herokuapp.com/results/:${query}`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      setInternshipData(data);
      loaderRef.current.style.display = "none";
    })
    .catch((err) => console.log(err));
  }
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
         <div>
            {/* Search Bar form */}
          <form onSubmit={(e) => handleSubmit(e)}>
          <input
            id="searchInput"
            className="focus:outline-none"
            type="text"
            placeholder="Search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
      </form>
      </div>
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