import React from 'react';
import { Button, Row, Col, Badge, Container } from 'react-bootstrap';

const LoadMoreBtn = (props) => {
    return (
        <div>
            <Container>
                <Row className="my-4">
                    <Col className="text-center">
                        <Button variant="primary" block
                            size="lg"
                            className="px-3"
                            onClick={props.loadMoreMovies}
                        >
                            {props.text} <Badge variant="light">{props.currentPage}</Badge>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoadMoreBtn;
