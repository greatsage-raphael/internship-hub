import axios from "axios";
import React, { useState, useEffect } from "react";

const CareerAdvice = () => {
  const [careerAdvice, setCareerAdvice] = useState([]);

  const options = {
    method: "GET",
    params: {
      q: "resume job themuse.com interview",
      pageNumber: "1",
      pageSize: "10",
      autoCorrect: "true",
      safeSearch: "true",
    },
    headers: {
      "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "f4b65f8b71mshd94f1c8f39c24c8p1db2e3jsn34588fe4b357",
    },
  };

  useEffect(() => {
    axios
      .get(
        "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?'",
        options
      )
      .then((response) => response.data)
      .then((data) => {
        setCareerAdvice(data.value);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <aside>
      <h2>Career Advice</h2>
      <ul>
        {careerAdvice.map((resource, index) => (
          <li key={resource.id} className="career-advice-item">
            <img src={resource.image.url} alt={resource.title} />
            <a href={resource.url} target="_blank" rel="noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CareerAdvice;