import React, { Component } from 'react';
import { BASE_URL, API_KEY, BASE_IMG } from '../../config'
import ImageFrame from '../elements/ImageFrame/ImageFrame';
import Spinner from '../elements/Spinner/Spinner';
import LoadMoreBtn from '../elements/LoadMore/LoadMoreBtn'
import SearchBar from '../elements/SearchBar/SearchBar';
import { Row, Col, Container } from 'react-bootstrap';
import no_img from '../elements/img/no_image.jpg';
import '../../index.css';


class Home extends Component {

    state = {
        movies: [],
        currentPage: 0,
        totalPage: 0,
        loading: false, // Loading Effect
        searchWord: "",
    }

    componentDidMount() {
        const endPoint = `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=1`;
        this.getRequest(endPoint);

        this.setState({
            loading: true
        })
    };

    searchMovies = searchWord => { // This function trigger the Get Request Function
        // console.log(searchWord);

        let endPoint = "";
        this.setState({
            movies: [],
            searchWord,
            loading: true
        });

        if (this.state.searchWord === "") {
            endPoint = `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=1`;
        }
        else {
            endPoint = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${this.state.searchWord}`
        }

        this.getRequest(endPoint)
    }

    loadMoreMovies = () => {
        let endPoint = "";
        this.setState({
            loading: true
        });

        if (this.state.searchWord === "") {
            endPoint = `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${this.state.currentPage + 1}`;
        }
        else {
            endPoint = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${this.state.searchWord}&page=${this.state.currentPage + 1}`
        }

        this.getRequest(endPoint)
    }

    getRequest = (endPoint) => {
        fetch(endPoint)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                this.setState({
                    movies: [...this.state.movies, ...data.results],
                    currentPage: data.page,
                    totalPage: data.total_pages,
                    loading: false
                })
            })
    };

    render() {
        return (
            <>
                <SearchBar callback={this.searchMovies} />
                <Container className = "animated zoomIn" >
                    <Row>
                        <Col sm = {6} className = "offset-sm-3 text-center">
                            {this.state.searchWord ? <h2 className = "text-capitalize">{this.state.searchWord} için bulunan sonuçlar </h2> : <h2>Popüler Filmler</h2>}
                        </Col>
                    </Row>
                    <Row>
                        {
                            this.state.movies.map((movie, i) => {
                                return <ImageFrame
                                    key={i}
                                    image={movie.poster_path ? `${BASE_IMG}${movie.poster_path}` : `${no_img}`}
                                    clickable={true}
                                    movieId={movie.id}
                                    movieName={movie.original_title}
                                    searchWord = {this.state.searchWord}
                                />
                            })
                        }
                    </Row>
                </Container>
                {this.state.loading ? <Spinner /> : null}
                {(this.state.currentPage <= this.state.totalPage && !this.state.loading) ?
                    <LoadMoreBtn loadMoreMovies={this.loadMoreMovies} text="Sayfa" currentPage={this.state.currentPage} /> : null
                }
            </>
        )
    }
}

export default Home;