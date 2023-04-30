import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getMoviesDetails } from "../reduxToolkit/MoviesSlice";
import Loader2 from "./loader/Loader2";

function MoviesDetails() {
  const { id } = useParams();
  const [load, setLoad] = useState(false);

  const [movie, setMovie] = useState([]);
  const getMoviesDetails = async () => {
    setLoad(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=5cbe6922781890ae984d75eed8341dd8&language=ar`
      );
      setMovie(res.data);
      console.log(res.data);
      setLoad(false);
    } catch (err) {
      console.log(err);
      setLoad(false);
    }
  };
  useEffect(() => {
    getMoviesDetails();
  }, [id]);

  return (
    <>
      {load ? (
        <Loader2 width="200px" height="200px" />
      ) : (
        <div>
          <Row>
            <Col>
              <div className="card-details d-flex align-item-center">
                <img
                  className="img-movie w-30"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="ascad"
                />
                <div className="justify-content-center text-center mx-auto pt-5">
                  <p className="card-text-details border-bottom">
                    اسم الفيلم: {movie.title}
                  </p>
                  <p className="card-text-details border-bottom">
                    تاريخ الفيلم: {movie.release_date}
                  </p>
                  <p className="card-text-details border-bottom">
                    عدد المقيمين: {movie.vote_count}
                  </p>
                  <p className="card-text-details border-bottom">
                    التقييم: {movie.vote_average}
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col md="12" xs="12" sm="12" className="mt-1">
              <div className="card-story d-flex flex-colum align-item-start">
                <div className="text-end p-4">
                  <p className="card-text-title border-bottom">
                    {movie.overview}{" "}
                  </p>
                </div>
                <div className="text-end px-2">
                  <p className="card-text-story">قصة الفيلم</p>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center mb-5">
            <Col
              md="10"
              xs="12"
              sm="12"
              className="mt-2 d-flex justify-content-center"
            >
              <Link to="/">
                <button
                  style={{ backgroundColor: "#b45b35", border: "none" }}
                  className="btn btn-primary mx-2"
                >
                  عودة للرئيسية
                </button>
              </Link>
              <a href={movie.homepage}>
                <button
                  style={{ backgroundColor: "#b45b35", border: "none" }}
                  className="btn btn-primary"
                >
                  مشاهدة الفيلم
                </button>
              </a>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}

export default MoviesDetails;
