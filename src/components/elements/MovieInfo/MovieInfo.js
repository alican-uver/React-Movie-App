import React from "react";
import Actors from '../Actors/Actors';
import { Row, Col, Container, ProgressBar, Badge } from "react-bootstrap";
import BreadCrumbs from "../BreadCrumb/BreadCrumbs";
import { BASE_IMG, IMAGE_BASE_URL, BACKDROP_SIZE } from "../../../config";
import './MovieInfo.css';
import no_img from '../img/no_image.jpg';
import no_img_bg from '../img/bg-not-found.jpg';
import MovieInfoBar from "../MovieInfoBar/MovieInfoBar";
import Proptypes from 'prop-types';
import LoadMoreBtn from "../LoadMore/LoadMoreBtn";
import Spinner from "../Spinner/Spinner";
import { editReleaseDate } from '../../../Functions/CommonFunctions/commonFunctions';
import MovieVideos from '../MovieVideos/MovieVideos';
import PageTitle from "../PageTitle/PageTitle";


const MovieInfo = ({ movieInfo, searchWord, directors, actors, visible, loadMore, loading, getFavouriteMovies, movieVideos }) => {

    console.log(movieVideos)
    return (
        <Container fluid = "xs">
            <Row>
                <Col sm = {12} >
                    <BreadCrumbs 
                    title = {movieInfo.title} 
                    searchWord = {searchWord}  
                    movieId = {movieInfo.id}              
                    />
                </Col>
            </Row>

            <Row
                className = "p-5 justify-content-md-center text-light movieInfoContainer "
                style = {{
                    background: movieInfo.backdrop_path
                        ? `url("${IMAGE_BASE_URL}${BACKDROP_SIZE}${movieInfo.backdrop_path}")`
                        : '#000'
                }}
            >
                <Col sm={4} className = "pr-0 animated fadeInLeftBig">
                    {
                        movieInfo.poster_path ? 
                        <img 
                        src = {`${BASE_IMG}${movieInfo.poster_path}`}
                        alt = "movieImg"
                        className = "img-fluid" />
                        : 
                        <img 
                        src = {`${no_img_bg}`}
                        alt = "movieImg"
                        className = "img-fluid"
                        /> 
                    }
                </Col>
                <Col sm={5} className="movieInfo p-4 animated fadeInRightBig">
                    <span //Add To Favourites Icon
                    onClick = { () => getFavouriteMovies(movieInfo)}
                    className = "add-to-favourites"> 
                        <i className="fas fa-heart fa-2x"></i>
                    </span>
                    <p className = "movie-title" > {movieInfo.title} </p>
                    <h5 className = "mb-4 text-warning">Yayınlanma Tarihi: <span className = "text-light">{editReleaseDate(movieInfo.release_date)}</span></h5>
                    <h5 className = "text-warning">Açıklama</h5>
                    <p>{movieInfo.overview} </p>
                    <ProgressBar label={`IMDB: ${movieInfo.vote_average}`} animated now = {`${movieInfo.vote_average}`} min={0} max={10} />
                    <div className = "text-warning mt-3 h5">Türü:
                    
                     <span> 
                    {  
                        movieInfo.genres.map((genre, i) => {
                            return <Badge
                            className = "ml-2 mb-2"
                            variant = "primary" 
                            key = {i}  
                            >
                            {genre.name}
                            </Badge>
                        })
                    }
                    </span>

                    </div>

                    <h5 className ="mt-3 text-warning">Yönetmen:  <span className = "text-light">{directors} </span> </h5>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <MovieInfoBar 
                    revenue = {movieInfo.revenue}
                    runtime = {movieInfo.runtime}
                    budget = {movieInfo.budget}
                    />
                </Col>
            </Row>
            <Container>
                    <Row className = "animated fadeIn delay-2s movie-videos">
                        <Col sm = {12}>
                            <MovieVideos 
                                movieVideos = {movieVideos}
                            />
                        </Col>
                    </Row>

                   <PageTitle title = "oyuncular" />
                    <Row>
                    {
                        actors.slice(0, `${visible}`).map((actor, i) => {
                            return <Actors
                                key = {i}
                                name = {actor.name}
                                image = {actor.profile_path ? `${BASE_IMG}${actor.profile_path}` : `${no_img}`}
                                character = {actor.character}
                                personId = {actor.id}
                                // movieId = {movieInfo.id}
                                forActors = {true}
                            />
                        })
                    }
                </Row>
                {
                    loading ? <Spinner/> :         
                    (
                        visible < actors.length ? <LoadMoreBtn   
                        text = {(actors.length - visible) + ' Oyuncu Daha Göster '}
                        loadMoreMovies = {loadMore}
                        /> : null
                    )
                }
            </Container>
        </Container>
    );
};

MovieInfo.propTypes = {
    searchWord : Proptypes.string
}

export default MovieInfo;


