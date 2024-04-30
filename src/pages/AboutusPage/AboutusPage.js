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
            <div>
                <Container>
                    <h1>{text3}</h1>
                    <Row className='Aboutus2 grid'>
                        <Col sm={4}>
                            <CardGroup lg={3} className='CardGroup'>
                                    <Card className='card'>
                                        <Card.Img
                                        variant="top"
                                        src="https://www.simplyrecipes.com/thmb/HyxSNZsB-YsfJPpiYfSMpkoGlig=/300x450/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SRHeadshots-EmmaChristensen-dacf1e23a5224a72bfbaa1c84a353b24.jpg"
                                        style={{ width: '200px', height: '300px' }}
                                        />
                                        <Card.Body>
                                        <Card.Title className='card-title'>Emma Christensen</Card.Title>
                                        <Card.Text>
                                        GENERAL MANAGER
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card className='card'>
                                        <Card.Img
                                        variant="top"
                                        src="https://www.simplyrecipes.com/thmb/s1IGrjFplCWvOYwYP3Pv1PznEV4=/300x450/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SRHeadshots-MyoQuinn2b-ce880f9bd09f4b0b89b729505c457df4.jpg"
                                        style={{ width: '200px', height: '300px' }}
                                        />
                                        <Card.Body>
                                        <Card.Title className='card-title'>Myo Quinn</Card.Title>
                                        <Card.Text>
                                        ART DIRECTOR
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card className='card'>
                                        <Card.Img
                                        variant="top"
                                        src="https://www.simplyrecipes.com/thmb/_d12A_WDLFUu1nwHpIzKCOQP3sA=/300x450/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SRHeadshots-LaurelRandolph-98d7d28e116c4268ae452e0601664c15.jpg"
                                        style={{ width: '200px', height: '300px' }}
                                        />
                                        <Card.Body>
                                        <Card.Title className='card-title'>Laurel Randolph</Card.Title>
                                        <Card.Text>
                                        SENIOR EDITOR
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                            </CardGroup>
                        </Col>
                    
                    </Row>
                </Container>
            </div>
            
         </div>
      );
}

export default AboutusPage;

