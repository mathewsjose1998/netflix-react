import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
const baseUrl = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movies);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseUrl}${movies.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      {/* BAckground image>>> title>>>2 buttons>> description */}
      <div className="banner_content">
        <h1 className="banner_title">
          {/* {movies?.name || movies?title || movies?.original_name||} */}
          {movies.name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h3 className="banner_discription">
          {truncate(movies?.overview, 150)}
        </h3>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
}

export default Banner;
