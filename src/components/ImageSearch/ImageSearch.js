import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ImageDisplay from '../ImageDisplay/ImageDisplay.js';

class ImageSearch extends React.Component {
    constructor(props) {
      super(props);
      this.state = { search: '', submitted:false };
    }
    mySubmitHandler = (event) => {
      event.preventDefault();
      this.setState({submitted: true});
    }

    myChangeHandler = (event) => {
        this.setState({submitted: false});
        this.setState({search: event.target.value});
      }

    render() {
      if(this.state.submitted === false) {
        return (
            <div>
                <h3> Image Search </h3>
                <Form onSubmit={this.mySubmitHandler}>
                <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter search query" onChange={this.myChangeHandler}/>
                <Form.Text className="text-muted">
                    Smart search on the animal you want to view pictures of
                </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
                </Form>
            </div>
            
          );
      }
      else {
          return (
            <div>
                <h3> Image Search </h3>
                <Form onSubmit={this.mySubmitHandler}>
                <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder={this.state.search} onChange={this.myChangeHandler}/>
                <Form.Text className="text-muted">
                    Smart search on the animal you want to view pictures of
                </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
                </Form>
                <ImageDisplay { ...this.state} />
            </div>
          );
      }
      
    }
  }
  export default ImageSearch;
  