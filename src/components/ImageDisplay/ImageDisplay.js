import React, { useEffect, useReducer } from 'react';
import './ImageDisplay.css';
import { fetchPichers } from '../../helpers/fetch_pitchers.js'
import Alert from 'react-bootstrap/Alert';


const  ImgDisplay = (props) => {
    const reducer = (state, action) => {
          return { images: state.images.concat(action.images), message: action.message, success: action.success }
    }
    const inital_state = { images:[], message: '', success: -1};
    const [img_state, setImgState] = useReducer(reducer,inital_state);
    
    useEffect(() => {
        fetchPichers(props.search)
          .then(images => {
            if(images.data.data.length === 0) {
              setImgState({ images : [], message:`No such tags in the database, please add images for ${images.data.message}`,success: 0 })
            }
            else {
              setImgState({ images : images.data.data[0].urls, message:images.data.message,success: 1 })
            }
            
          })
          .catch(e => {
            try {
              setImgState({ images: [], message: e.response.data.message,success: 0 })
            }
            catch( exception) {
              setImgState({ images: [], message: 'Server error',success: 0 })
            }
            
          })
      }, [ setImgState,props.search ])
      
      if(img_state.success === 1) {
        return (
          <div>
              <br>
              </br>
              <div className="title">
                <Alert  variant="success">
                <Alert.Heading>Success</Alert.Heading>
                <p>
                  Following images match the tag of <b> {img_state.message} </b>
                </p>
                </Alert>
              </div>
            <div id='images' className="container">
              <div className="row">
              <div className="column">
                  {img_state.images.slice(0,Math.ceil(img_state.images.length/2)).map((image_url,i) => {
                    return (
                      <div key={i} className="card">
                        <div className="card-body ">
                          <img
                            className="card-img-top"
                            src={image_url}
                          />
                        </div>
                      </div>
                    )
                  })}
              </div>
              <div className="column">
                {img_state.images.slice(Math.ceil(img_state.images.length/2),img_state.images.length).map((image_url,i) => {
                  return (
                    <div key={i} className="card">
                      <div className="card-body ">
                        <img
                          className="card-img-top"
                          src={image_url}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            </div>
          </div>
        );
      }

      else if(img_state.success === 0) {
        return (
          <div className="title">
            <Alert  variant="danger">
            <Alert.Heading>Failure!</Alert.Heading>
            <p>
              {img_state.message}
            </p>
            </Alert>
          </div>
        );
      }

      else {
        return ( <p></p>);
      }
  }

export default ImgDisplay;
