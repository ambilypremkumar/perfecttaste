import React from 'react';

import App from "../../App.scss";

import Loader from "../../components/Loader/Loader";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import { Container } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';

const ConnectusPage = () => {
    const text3="You can send your delicioius recipes to us at perfecttaste@gmail.com including the videos and details ";
    return (
        <div>
            <Container>
                <div className="contactus-form">
                    <h4>Send us your feedback</h4>
                    <form>
                        <input type="text" id="name" name="name" required="" placeholder="Name" />
                        <input
                        type="email"
                        id="email"
                        name="email"
                        required=""
                        placeholder="Email"
                        />
                        <input
                        type="text"
                        id="subject"
                        name="subject"
                        required=""
                        placeholder="Subject"
                        />
                        <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required=""
                        placeholder="Your Message"
                        defaultValue={""}
                        />
                        <button type="submit" className="submit-button-style">
                        SEND MESSAGE
                        </button>
                    </form>
                </div>
            </Container>

            <div className='contact1'>
                <Container>
                    <Row>
                        <h2>{text3}</h2>
                    </Row>
                </Container>
            </div>
        </div>
        
    );
  
    
}

export default ConnectusPage;
