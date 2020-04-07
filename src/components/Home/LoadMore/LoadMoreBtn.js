import React from 'react';
import { Button, Row, Col, Badge } from 'react-bootstrap';

const LoadMoreBtn = (props) => {
    return (
        <div>
            <Row className="my-4">
                <Col className="text-center">
                    <Button variant="primary"
                        className = "px-3"
                        onClick={props.loadMoreMovies}
                        >
                        {props.text} <Badge variant="light">{props.currentPage}</Badge>
                        <span className="sr-only">unread messages</span>
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default LoadMoreBtn;
