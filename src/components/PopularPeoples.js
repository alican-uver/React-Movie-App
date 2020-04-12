import React, { Component } from 'react';
import {BASE_URL, API_KEY, BASE_IMG} from '../config';
import ImageFrame from './elements/ImageFrame/ImageFrame';
import  no_img from './elements/img/no_image.jpg';
import { Row, Container } from 'react-bootstrap';

class PopularPeoples extends Component {

    state = {
        persons : []
    }

    componentDidMount() {
        let endPoint = `${BASE_URL}/person/popular?api_key=${API_KEY}`;
        this.getPeople(endPoint)
    }

    getPeople = (endpoint) => {
        fetch(endpoint)
        .then(response => response.json())
        .then((peoples) => {
            console.log(peoples.results);
            this.setState({
                persons: [...peoples.results]
            })
        })
    }

    render() {        
        return (
            <div>
                <Container>
                <Row>
                {
                   this.state.persons.map((person, i) => {
                       return (
                           <ImageFrame 
                            key = {i}
                            image={person.profile_path ? `${BASE_IMG}${person.profile_path}` : `${no_img}`}
                            clickable = {false}
                            name = {person.name}
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