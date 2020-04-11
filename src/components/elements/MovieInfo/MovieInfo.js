import React from "react";
import Actors from '../Actors/Actors';
import { Row, Col, Container, ProgressBar } from "react-bootstrap";
import BreadCrumbs from "../BreadCrumb/BreadCrumbs";
import { BASE_IMG, IMAGE_BASE_URL, BACKDROP_SIZE } from "../../../config";
import './MovieInfo.css';
import no_img from '../img/no_image.jpg';
import no_img_bg from '../img/bg-not-found.jpg';
import MovieInfoBar from "../MovieInfoBar/MovieInfoBar";


const MovieInfo = (props) => {
    // console.log(props.actors)

    const editReleaseDate = (date) => {  //? Idk why doesn't work !
        // return date.substring(5).split("-").concat(date.substring(0,4)).join("/")
        return date;
    }
   
    console.log(props.movieInfo)
    return (
        <Container fluid="xs">
            <Row>
                <Col sm={12} >
                    <BreadCrumbs 
                    title={props.movieInfo.title} 
                    searchWord = {props.searchWord}                
                    />
                </Col>
            </Row>

            <Row
                className="p-5 justify-content-md-center text-light movieInfoContainer "
                style={{
                    backgroundImage: props.movieInfo.backdrop_path
                        ? `url("${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.movieInfo.backdrop_path}")`
                        : `url(${no_img_bg})`
                }}
            >
                <Col sm={4} className="pr-0 animated fadeInLeftBig">
                    {
                        props.movieInfo.poster_path ? 
                        <img 
                        src={`${BASE_IMG}${props.movieInfo.poster_path}`}
                        alt="movieImg"
                        className="img-fluid"
                        /> : 
                        <img 
                        src={`${no_img_bg}`}
                        alt="movieImg"
                        className="img-fluid"
                        />
                    }
                </Col>
                <Col sm={5} className="movieInfo p-4 animated fadeInRightBig">
                    <h1 className="display-4">{props.movieInfo.title} </h1>
                    <h5 className="mb-4">Yayınlanma Tarihi: <span>{editReleaseDate(props.movieInfo.release_date)}</span></h5>
                    <h5>Açıklama</h5>
                    <p>{props.movieInfo.overview} </p>
                    <ProgressBar label={`IMDB: ${props.movieInfo.vote_average}`} animated now={`${props.movieInfo.vote_average}`} min={0} max={10} />
                    <h5>Türü: 

                    {  //? Idk why doesn't work !
                        // props.movieInfo.genres.map((genre, i) => {
                        //     return <span key = {i} >{genre.name}</span>
                        // })
                    }

                    </h5>
                    <h4 className ="mt-2">Yönetmen: {props.directors}  </h4>
                    <div><i className="fas fa-film fa-5x"></i> </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <MovieInfoBar 
                    revenue={props.movieInfo.revenue}
                    runtime={props.movieInfo.runtime}
                    budget={props.movieInfo.budget}
                    />
                </Col>
            </Row>
            <Container>
                    <Row>
                        <Col sm = {12}>
                            <h1 className= "text-center py-4">Oyuncular</h1>
                        </Col>
                    </Row>
                <Row>
                    {
                        props.actors.map((actor, i) => {
                            return <Actors
                                key={i}
                                name={actor.name}
                                image={actor.profile_path ? `${BASE_IMG}${actor.profile_path}` : `${no_img}`}
                                character={actor.character}
                                personId = {actor.id}
                                movieId = {props.movieInfo.id}
                            />
                        })
                    }
                </Row>
            </Container>
        </Container>
    );
};

export default MovieInfo;
