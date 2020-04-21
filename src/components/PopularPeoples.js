import React, { Component } from 'react';
import { BASE_URL, API_KEY, BASE_IMG } from '../config';
import no_img from './elements/img/no_image.jpg';
import { Row, Col, Container } from 'react-bootstrap';
import SearchBar from './elements/SearchBar/SearchBar';
import Actors from './elements/Actors/Actors';
import PageTitle from './elements/PageTitle/PageTitle';
import Spinner from './elements/Spinner/Spinner';

class PopularPeoples extends Component {

    state = {
        persons: [],
        currentPage : 0,
        totalPage : 0,
        searchWord : "",
        loadingPersons : false 
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            loadingPersons : true
        })

        let endPoint = `${BASE_URL}/person/popular?api_key=${API_KEY}&page=1`;
        this.getPeople(endPoint)
    }

    getPeople = (endpoint) => {
        fetch(endpoint)
            .then(response => response.json())
            .then((peoples) => {
                console.log(peoples.results);

                this.setState({
                    persons: peoples.results,
                    loadingPersons: false,
                })
            })
    }

    // loadMorePeoples = () => {
        
    // }

    render() {
            const { loadingPersons, persons } = this.state;

        return (
            <React.Fragment>
                {
                    loadingPersons ? <Spinner /> : 
                    (   persons.length &&  
                        
                        <Container>
                        <Row>
                            <Col sm={12}>
                                <SearchBar
                                    placeHolder="Lütfen Aradığınız Oyuncunun Adını Yazınız.."
                                />
                            </Col>
                        </Row>
                        <PageTitle title = "popüler oyuncular" />
                        <Row>
                            {
                                this.state.persons.map((person, i) => {
                                    return (
                                        <Actors
                                            key={i}
                                            image={person.profile_path ? `${BASE_IMG}${person.profile_path}` : `${no_img}`}
                                            name={person.name}
                                            personId = {person.id}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Container>
                    )
                }
            </React.Fragment>
        )
    }
}
export default PopularPeoples;