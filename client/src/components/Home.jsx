import React from "react";
import Loader from "./Loader";
import CareerAdvice from "./CareerAdvice";
import SearchForm from "./SearchForm";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [internshipData, setInternshipData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://internships-web-scraper.herokuapp.com/results/${searchText}`
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setInternshipData(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [searchText]);

  return (
    <main>
      <section className="internships-section">
        {isLoading && <Loader />}
        {!isLoading && (
          <>
            <SearchForm handleSearchTextChange={handleSearchTextChange} />
            {internshipData.map((internship, index) => (
              <div key={index}>
                <div className="internship">
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
              </div>
            ))}
          </>
        )}
      </section>
      {!isLoading && <CareerAdvice />}
    </main>
  );
};

export default Home;
