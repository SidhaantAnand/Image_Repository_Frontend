import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import './AddImage.css';

class AddImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { url: '',suggestions : [], final_suggestion: '', post_submission: false, success:false};
    }
    suggest = (event) => {
        event.preventDefault();
        axios.get(`https://fast-forest-10902.herokuapp.com/label?url=${this.state.url}`).then(data => {
            this.setState({suggestions: data.data, post_submission: false})
        }).catch(err => {
            this.setState({suggestions: ['Failed to get suggested labels, please enter manually'], post_submission: false})
        });
    }

    submit = (event) => {
        event.preventDefault();
        this.setState({ url: '',suggestions : [], final_suggestion: '' });
        axios.post('https://fast-forest-10902.herokuapp.com/update', {tag:this.state.final_suggestion, url:this.state.url}).then(data => {
            this.setState({post_submission:true, success:true})
        }).catch(err => {
            this.setState({post_submission:true,success:false})
        })
    }

    suggestChange = (event) => {
        this.setState({final_suggestion: event.target.value});
    }

    urlChange = (event) => {
        this.setState({url: event.target.value});
    }

    updatePostSubmission = () => {
        if(this.state.post_submission) {
            this.setState({ url: '',suggestions : [], final_suggestion: '', post_submission: false, success:false});
        }
    }

    render() {
        if(this.state.suggestions.length === 0 && !this.state.post_submission) {
            return (
                <div>
                     <h3> Add Image to Gallery </h3>
                     <Form onSubmit={this.suggest}>
                    <Form.Group>
                    <Form.Control type="text" placeholder="Enter image url" onChange={this.urlChange}/>
                    <Form.Text className="text-muted">
                    `     Add image URL and let AI suggest you tags or suggest your own tags
                    </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Suggest Tags
                    </Button>
                    </Form>
                    </div>
            )
        }

        else if(!this.state.post_submission) {
            return (
                <div>
                     <h3> Add Image to Gallery </h3>
                     <Form onSubmit={this.submit}>
                        <Form.Group>
                        <Form.Control type="text" placeholder={this.url} readOnly/>
                        </Form.Group>

                        <Form.Group>
                        <Form.Label>Suggested Tags</Form.Label>
                        <Form.Control type="text" placeholder={this.state.suggestions.join(" , ")} readOnly/>
                        </Form.Group>

                        <Form.Group>
                        <Form.Label>Chosen Tag</Form.Label>
                        <Form.Control type="text" placeholder="Enter the tag for this image" onChange={this.suggestChange}/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Add image
                        </Button>
                    </Form>
                </div>
            )
        }

        else if(this.state.post_submission && this.state.success) {
            return (
                <Modal show={true}>
                <Modal.Header>
                <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>Image successfully added</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={this.updatePostSubmission}>
                    Ok
                </Button>
                </Modal.Footer>
            </Modal>
            );
        }

        else {
            return (
                
                <Modal show={true}>
                <Modal.Header>
                <Modal.Title>Failure</Modal.Title>
                </Modal.Header>
                <Modal.Body>Database error: Failed to add URL</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={this.updatePostSubmission}>
                    Ok
                </Button>
                </Modal.Footer>
            </Modal>
            );
        }
       
    }
}

export default AddImage;