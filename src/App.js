import React from 'react';
import './App.css';
import ImageSearch from './components/ImageSearch/ImageSearch.js';
import AddImage from './components/AddImage/AddImage.js';
import Description from './components/Description/Description.js';
import 'bootstrap/dist/css/bootstrap.css';
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory as createHistory } from 'history'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const history = createHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Navbar bg="primary" expand="lg" variant="dark" >
          <Navbar.Brand href="/">Animal Image Repository </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/description">Description</Nav.Link>
              <Nav.Link href="/imagesearch">Image Search</Nav.Link>
              <Nav.Link href="/addimage">Add Image</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/description" exact component={Description} />
        <Route path="/imagesearch" exact component={ImageSearch} />
        <Route path="/addimage" exact component={AddImage} />
      </Router>
    </div>
  );
}
export default App;