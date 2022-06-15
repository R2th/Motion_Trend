import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Carousel from "../../Components/Slider";
import MovieCollection from "../../Components/MovieCollection";
import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer";
import { moviesList } from "../../Utils/data";
// import {moviesList} from "../../Utils/data";
// import {moviesList} from "../../Utils/data";

const headers = {
  // "Content-Type": "application/json;charset=UTF-8",
  // Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
};

const Home = () => {
  const [movies, setMovies] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const [viewDetail, setDetail] = useState({
    id: 0,
    isOpened: false,
  });

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          `https://yts.torrentbay.to/api/v2/list_movies.json?limit=25&page=${page}`,
          {
            headers,
            data: {},
          }
        );

        setMovies((prevState) => [...prevState, ...res.data.data.movies]);

        setLoading(false);
      } catch (err) {}
    };

    getMovie();
  }, [page]);

  return (
    <div className="home-page">
      <Header />
      <Carousel />
      <MovieCollection
        movies={movies}
        moviesList={moviesList}
        viewDetail={viewDetail}
        setDetail={setDetail}
        page={page}
        setPage={setPage}
      />
      <Banner
        movies={movies}
        viewDetail={viewDetail}
        setDetail={setDetail}
        page={page}
        setPage={setPage}
      />

      <Carousel
        movies={movies}
        moviesList={moviesList}
        viewDetail={viewDetail}
        setDetail={setDetail}
      />
      <Footer />
    </div>
  );
};

export default Home;
