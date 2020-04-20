import React, { Component } from 'react';
import ImageFrame from '../elements/ImageFrame/ImageFrame';
import { BASE_IMG } from '../../config';
import no_img from '../elements/img/no_image.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import HaveNotFavouriteMovies from '../elements/HaveNotFavouriteMovies/HaveNotFavouriteMovies';

class FavouriteMovies extends Component {

  render() {
    const { favouriteMovies, clearAllFavouriteMovies, clearFavouriteMovie, loadMovies } = this.props;

    return (
      <Container>
        {
          favouriteMovies.length ?
            <React.Fragment>
              <Row className="my-3">
                <Col sm={12}>
                  <h1 className="text-center">Favori Filmlerim</h1>
                </Col>
              </Row>
              <Row>
                {
                  favouriteMovies.map((movie, i) => {
                    return (
                      <ImageFrame
                        key={i}
                        movieId={movie.id}
                        image={movie.poster_path ? `${BASE_IMG}${movie.poster_path}` : `${no_img}`}
                        clickable={true}
                        clearFavouriteMovie={clearFavouriteMovie}
                      />
                    )
                  })
                }
              </Row>
              {favouriteMovies.length > 1 &&
                <Row className = "my-5">
                  <Col className="text-center">
                    <button className="btn btn-danger"
                      onClick={clearAllFavouriteMovies}
                    >
                      Hepsini Temizle
                    </button>
                  </Col>
                </Row>
              }

            </React.Fragment>
            :
            <HaveNotFavouriteMovies />

        }

      </Container>
    )
  }
}

export default FavouriteMovies;
