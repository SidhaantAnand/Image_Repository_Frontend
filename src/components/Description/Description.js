import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Description.css';
class Description extends React.Component {
    render() {
        return ( 
            <div>
                <Card style={{ width: '25rem' }}  className="text-center" id = "card1">
                    <Card.Body>
                    <Card.Title>Features</Card.Title>
                    <Card.Text>
                        <b>Smart Search Image:</b>
                        <ul>
                        <li>Search on the Animal images stored in Mongo</li>
                        <li>Search is powered by NLP</li>
                        </ul>
                    </Card.Text>
                    <Card.Text>
                        <b>Add Image:</b>
                        <ul>
                        <li>Insert an image in Mongo which can be viewed later through Search</li>
                        <li>Labels are suggested using Google's Vision API</li>
                        </ul>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="text-center" id = "card2">
                    <Card.Body>
                    <Card.Title>Technologies used</Card.Title>
                        <ListGroup variant="flush">
                        <ListGroup.Item>Node</ListGroup.Item>
                        <ListGroup.Item>React</ListGroup.Item>
                        <ListGroup.Item>MongoDB</ListGroup.Item>
                        <ListGroup.Item>Dialogflow NLP</ListGroup.Item>
                        <ListGroup.Item>Google Vision API</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
                <Card style={{ width: '25rem' }} className="text-center" id = "card3">
                    <Card.Body>
                    <Card.Title>URLs</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item><a href="https://github.com/SidhaantAnand/Image_Repository_Frontend">Frontend Repository</a></ListGroup.Item>
                        <ListGroup.Item><a href="https://github.com/SidhaantAnand/Image_Repository_Backend">Backend Repository</a></ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Description;
