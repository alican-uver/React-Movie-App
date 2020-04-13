import React, { Component } from 'react';
import { BASE_URL, API_KEY, BASE_IMG } from '../config';
import ImageFrame from './elements/ImageFrame/ImageFrame';
import no_img from './elements/img/no_image.jpg';
import { Row, Col, Container } from 'react-bootstrap';
import SearchBar from './elements/SearchBar/SearchBar';

class PopularPeoples extends Component {

    state = {
        persons: [],
        currentPage : 0,
        totalPage : 0,
        searchWord : "",
        loading : false 
    }

    componentDidMount() {
        let endPoint = `${BASE_URL}/person/popular?api_key=${API_KEY}&page=1`;
        this.getPeople(endPoint)
    }

    getPeople = (endpoint) => {
        fetch(endpoint)
            .then(response => response.json())
            .then((peoples) => {
                console.log(peoples.results);
                this.setState({
                    persons: [...peoples.results],
                    loading: true,
                })
            })
    }





    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <SearchBar
                                placeHolder="Lütfen Aradığınız Oyuncunun Adını Yazınız.."
                            />
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col sm={12} >
                            <h1 className="text-center">Popüler Oyuncular</h1>
                        </Col>
                    </Row>
                    <Row>
                        {
                            this.state.persons.map((person, i) => {
                                return (
                                    <ImageFrame
                                        key={i}
                                        image={person.profile_path ? `${BASE_IMG}${person.profile_path}` : `${no_img}`}
                                        clickable={false}
                                        name={person.name}
                                    />
                                )
                            })
                        }
                    </Row>
                </Container>

            </div>
        )
    }
}
export default PopularPeoples;