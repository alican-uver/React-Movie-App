import React from "react";
import "./PersonInfoBar.css";
import { BASE_IMG } from "../../../config";
import { Image, Row, Col } from "react-bootstrap";
import no_img from '../img/no_image.jpg'


const PersonInfoBar = ({ info }) => {
    
    const isPropsNull = value => {
        if (value === null || value === "") {
            return "Bilgi Yok"
        }
        else {
            return value;
        }
    }
    // `${BASE_IMG}${info.profile_path}`

  return (
    <div className="p-4 person-info-bar-container">
      <Row className = "d-flex justify-content-center align-items-center">
        <Col sm={4} className = "animated fadeInLeftBig">
          <Image
            src = {info.profile_path ? `${BASE_IMG}${info.profile_path}` : `${no_img}`}
            roundedCircle
            className="person-img"
          />
        </Col>
        <Col sm={8} className = "person-info animated fadeInRightBig">
            <h5>Oyuncu Adı : <small> {isPropsNull(info.name)} </small></h5>
            <h5>Doğum Tarihi : <small> {isPropsNull(info.birthday)} </small></h5>
             {
                 info.deathday ? <h5>Ölüm Tarihi : <small> {info.deathday} </small> </h5> : null
             }
            <h5>Doğum Yeri : <small> {isPropsNull(info.place_of_birth)} </small></h5>
            <h5>Biyografi : <small> {isPropsNull(info.biography)} </small></h5> 
        </Col>
      </Row>
    </div>
  );
};

export default PersonInfoBar;
