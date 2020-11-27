import React from "react";
import Card from 'react-bootstrap/Card'

export default function Hero(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.hero.thumbnail.path+"."+props.hero.thumbnail.extension} alt={props.hero.name + " - Image"} />
            <Card.Body>
                <Card.Title>{props.hero.name}</Card.Title>
                <Card.Text>
                    {props.hero.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}