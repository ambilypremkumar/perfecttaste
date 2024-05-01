import React from 'react';
import App from  "../../App.scss";

import Loader from "../../components/Loader/Loader";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdMargin } from 'react-icons/md';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image';


const AboutusPage = () => {
    const text1="Who we are";
    const text2="Our History";
    const text3="Our Team";
    const p1="Perfect taste is here to help you cook delicious meals with less stress and more joy. We offer recipes and cooking advice for home cooks, by home cooks. Helping create “kitchen wins” is what we’re all about.Perfect taste was founded in 2003 by Elise Bauer as a home cooking blog to record her favorite family recipes. Today, Perfect taste has grown into a trusted resource for home cooks with more than 3,000 tested recipes, guides, and meal plans, drawing over 15 million readers each month from around the world. We’re supported by a diverse group of recipe developers, food writers, recipe and product testers, photographers, and other creative professionals.";
    const p2="Elise Bauer was a busy Silicon Valley executive when she became sick with a flu that wouldn’t go away in 2001. In 2003, Elise moved home with her parents and lived with them for several years, recovering from chronic fatigue and documenting her parents’ cooking on Perfect taste. (Here’s more of that story.) Over the years, what started as a small blog grew to reach millions of readers every month! In 2020, perfect taste was acquired by Dotdash Meredith, a New York-based media company.Our recipes primarily use fresh, unprocessed ingredients but we also believe there is a time and a place for canned, frozen, and other prepared ingredients. We believe in a diet that includes a wide variety of foods: real butter and cream, extra virgin olive oil, eggs, lots of fruits and vegetables, and protein from meat, fish, beans, and cheese. Plus cake for dessert.";

    return (
        <div>
            <div className='Aboutus1'>
                <Container>
                    <Row>
                        <Col sm={8}>
                            <h1>{text1}</h1>
                            <p>{p1}</p>
                        </Col>
                        
                    </Row>
                    <Row className='history'>
                        <Col sm>
                            <h1>{text2}</h1>
                            <p>{p2}</p>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
            <section className="our-team">
                <h2 style={{ textAlign: "center" }}>Our Team</h2>
                <div className="row">
                    <div className="column">
                    <div className="card">
                        <img
                        src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg"
                        alt="Julia"
                        style={{ width: "100%" }}
                        />
                        <div className="container">
                        <h2>Julia Susan</h2>
                        <p className="title">CEO &amp; Founder</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>juliaa@example.com</p>
                        <p>
                            <button className="button">Contact</button>
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="column">
                    <div className="card">
                        <img
                        src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg"
                        alt="Rose"
                        style={{ width: "100%" }}
                        />
                        <div className="container">
                        <h2>Rose Fadrik</h2>
                        <p className="title">Manager</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>rose@example.com</p>
                        <p>
                            <button className="button">Contact</button>
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="column">
                    <div className="card">
                        <img
                        src="https://img.freepik.com/free-photo/cheerful-dark-skinned-woman-smiling-broadly-rejoicing-her-victory-competition-among-young-writers-standing-isolated-against-grey-wall-people-success-youth-happiness-concept_273609-1246.jpg"
                        alt="Alice"
                        style={{ width: "100%" }}
                        />
                        <div className="container">
                        <h2>Alice Jacob</h2>
                        <p className="title">Employee</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>alice@example.com</p>
                        <p>
                            <button className="button">Contact</button>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            
         </div>
      );
}

export default AboutusPage;

