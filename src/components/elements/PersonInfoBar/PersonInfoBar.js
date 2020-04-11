import React from "react";
import "./PersonInfoBar.css";
import { BASE_IMG } from "../../../config";
import { Image, Row, Col } from "react-bootstrap";


const PersonInfoBar = ({ info }) => {
    
  return (
    <div className="p-4 person-info-bar-container">
      <Row className = "d-flex justify-content-center align-items-center">
        <Col sm={4} className = "animated fadeInLeftBig">
          <Image
            src={`${BASE_IMG}${info.profile_path}`}
            roundedCircle
            className="person-img"
          />
        </Col>
        <Col sm={8} className = "person-info animated fadeInRightBig">
            <h5>Oyuncu Adı : <small> {info.name} </small></h5>
            <h5>Doğum Tarihi : <small> {info.birthday} </small></h5>
             {
                 info.deathday ? <h5>Ölüm Tarihi : <small> {info.deathday} </small> </h5> : null
             }
            <h5>Doğum Yeri : <small> {info.place_of_birth} </small></h5>
            <h5>Biyografi : <small> {info.biography} </small></h5> 
        </Col>
      </Row>
    </div>
  );
};

export default PersonInfoBar;
