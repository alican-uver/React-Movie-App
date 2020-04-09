import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BreadCrumbs = (props) => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item>
            <Link to ="/">
                Anasayfa
            </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
                {props.title}
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default BreadCrumbs;
