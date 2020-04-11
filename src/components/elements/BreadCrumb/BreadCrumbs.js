import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BreadCrumbs = (props) => {

    return (
        <Breadcrumb>
            <Link to ="/">
                Anasayfa / 
            </Link>
            {
                props.searchWord ? 
                <Breadcrumb.Item active = {props.clickable ? true : false}>
                {props.searchWord} 
                {/* This props comes = Home ----> ImageFrame ----> Movie (with Link url way) ----> MovieInfo ----> Here  */}
                </Breadcrumb.Item> : null
            }
            <Breadcrumb.Item active>
                {props.title}
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default BreadCrumbs;
