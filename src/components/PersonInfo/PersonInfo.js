import React, { Component } from 'react';
import { BASE_URL, API_KEY, BASE_IMG } from '../../config';
import Spinner from '../elements/Spinner/Spinner';
import ImageFrame from '../elements/ImageFrame/ImageFrame';
import no_img from '../elements/img/no_image.jpg';
import { Row, Container,Col } from 'react-bootstrap';
import BreadCrumb from '../elements/BreadCrumb/BreadCrumbs';
import PersonInfoBar from '../elements/PersonInfoBar/PersonInfoBar';
import './PersonInfo.css';
import LoadMoreBtn from '../elements/LoadMore/LoadMoreBtn';

class PersonInfo extends Component { //  depending on the person id, I do request operations in this Class !

    state = {
        personMovies: [],
        loading: false,
        personDetails: {},
        visible : 8
    }

    componentDidMount() {
        this.setState({
            loading: true
        });

        let endPoint = `${BASE_URL}/person/${this.props.match.params.personId}/movie_credits?api_key=${API_KEY}`
        this.getMovieAndPersonDetails(endPoint)
    }

    getMovieAndPersonDetails = endPoint => {
        fetch(endPoint)
            .then(response => response.json())
            .then((personMovies) => {
                console.log(personMovies)
                this.setState({
                    personMovies: personMovies.cast,
                    loading: false
                }, () => { //CallBack Function with get personal details
                    let endPoint = `${BASE_URL}/person/${this.props.match.params.personId}?api_key=${API_KEY}`
                    fetch(endPoint)
                        .then(response => response.json())
                        .then((personDetails => {
                            this.setState({
                                personDetails
                            })
                        }))
                })
            })
    }

    loadMoreMovies = () => {
        this.setState({
            loading : true
        })

        setTimeout(() => {
            this.setState({
                visible : this.state.visible + 4,
                loading : false
            })
        }, 500);
        
    }

    render() {
        console.log(this.state.filteredMovie)
        const { personMovies, personDetails, loading, visible } = this.state;

        return (
            <div>
                {
                    loading ? <Spinner /> : null
                }
                <BreadCrumb
                    title={this.props.location.actorName}
                />
                <Container fluid="xs">
                    <Row className ="no-gutters person-info-container ">
                        <Col sm ={10} className = "offset-sm-1" >
                            <PersonInfoBar 
                                info = {personDetails}
                            />
                        </Col>
                    </Row>
                </Container>
                <Container className = "animated fadeIn">
                    <Row className = "mt-4">
                        <Col sm = {12} className = "text-center">
                                <h1>Rol Aldığı Filmler</h1>
                        </Col>
                    </Row>
                    <Row>
                        {
                            personMovies.slice(0, visible).map((movie, i) => {
                                return <ImageFrame
                                    key={i}
                                    image={movie.poster_path ? `${BASE_IMG}${movie.poster_path}` : `${no_img}`}
                                    id = {movie.id}
                                    clickable = {false}
                                />
                            })
                        }
                    </Row>

                    {
                        loading ? <Spinner /> : null
                    }

                    {
                        visible < personMovies.length && loading === false ? 
                        <LoadMoreBtn
                        loadMoreMovies = {this.loadMoreMovies}
                        text = {personMovies.length - visible + " Film Daha Göster"}
                        /> : null
                    }
                    
                    
                </Container>
            </div>
        )
    }
}


export default PersonInfo;
