import React from 'react'
import  { useState } from "react";
import { Link } from "react-router-dom";




export default function SearchBar (){
    const [query, setQuery] = useState("");
    return (
        <form>
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
          <Link to={{ pathname: "/results/" + query }}>
            <button type="submit" onClick={() => setQuery(() => "")}>
            </button>
          </Link>
      </form>
    )
}