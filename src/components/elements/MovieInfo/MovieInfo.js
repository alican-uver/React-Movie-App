import React from "react";
import Actors from '../Actors/Actors';
import { Row, Col, Container } from "react-bootstrap";
import BreadCrumbs from "../BreadCrumb/BreadCrumbs";
import { BASE_IMG, IMAGE_BASE_URL, BACKDROP_SIZE } from "../../../config";
import './MovieInfo.css';
import ImageFrame from "../ImageFrame/ImageFrame";
import no_img from '../img/no_image.jpg';


const MovieInfo = (props) => {
  console.log(props.actors)  

  return (
    <Container fluid="xs">
      <Row>
        <Col sm={12}>
          <BreadCrumbs title={props.movieInfo.title} />
        </Col>
      </Row>

      <Row
        className="p-5 justify-content-md-center text-light"
        style={{
          backgroundImage: props.movieInfo.backdrop_path
            ? `url("${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.movieInfo.backdrop_path}")`
            : "#000",
          backgroundSize: "cover"
        }}
      >
        <Col sm={3} className = "pr-0">
          <img
            src={`${BASE_IMG}${props.movieInfo.poster_path}`}
            alt="movieImg"
            className="img-fluid"
          />
        </Col>
        <Col sm={6} className = "movieInfo p-4">
          <h1 className = "display-4">{props.movieInfo.title} </h1>
          <h5>Açıklama</h5>
          <p>{props.movieInfo.overview} </p>
          <meter min = "0" max = "100" optimum = "100" low = "40" high = "70" value = { props.movieInfo.vote_average * 10}></meter>
          <h3 className ="mb-2"> Imdb:  {props.movieInfo.vote_average} </h3>
          <h2>Yönetmen: {props.directors}  </h2>  
          <div><i className="fas fa-film fa-6x"></i> </div>
        </Col>
      </Row>
      <Container>
        <Row>
          {
            props.actors.map((actor, i) => {
              return <Actors 
                    key = {i}
                    name = {actor.name}
                    image={actor.profile_path ? `${BASE_IMG}${actor.profile_path}` : `${no_img}`} 
                    character = {actor.character}
                 />
            })
          }
        </Row>
        </Container>
    </Container>
  );
};

export default MovieInfo;
