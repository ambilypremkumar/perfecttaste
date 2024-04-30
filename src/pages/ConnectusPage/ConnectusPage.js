import React from 'react';
//import "./ConnectusPage.scss";
import App from "../../App.scss";
//import { useMealContext } from '../../context/mealContext';
import Loader from "../../components/Loader/Loader";
//import CategoryList from "../../components/Category/CategoryList";
//import NotFound from "../../components/NotFound/NotFound";
//import MealList from "../../components/Meal/MealList";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
//import { Container } from 'react-bootstrap/lib/Tab';
import { Container } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';

const ConnectusPage = () => {
    const text3="You can send your delicioius recipes to us at perfecttaste@gmail.com including the videos and details ";
    return (
        <div>
            <div className='contact' id='contact'>
                <h1 className='contact-title'>Send us your feedback</h1>
                <div className="contact-container">
                    <img className='contact-image' src='./assets/contact.png' alt=''></img>
                    <form >
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your name.." required/>

                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" placeholder="Your email..." required/>

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" placeholder="Write something.." required></textarea>

                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
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
