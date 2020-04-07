import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

const LoadMoreBtn = (props) => {
    return (
        <div>
            <Row className = "my-4">
                <Col className = "text-center">
                    <Button variant="primary"
                        onClick={props.loadMoreMovies}
                    >
                        {props.text}
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default LoadMoreBtn;