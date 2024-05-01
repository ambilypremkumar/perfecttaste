import React from 'react';
import App from '../../App';
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



const BlogPage = () => {
    return(
        <div>
            <section className="campus">
                <h1>Customer Preperations</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor
                    nisi at arcu tempus, in tincidunt sem maximus. Vivamus hendrerit, felis in
                    condimentum ultricies, elit sem bibendum sapien, sed molestie turpis{" "}
                </p>
                <div className="row">
                    <div className="campus-col">
                        <img src="https://www.fannetasticfood.com/wp-content/uploads/2023/03/Crockpot-Chicken-Noodle-Soup-featured-image-578x578.jpg" />
                        <div className="layer">
                            <h3>chicken soup</h3>
                        </div>
                    </div>
                    <div className="campus-col">
                        <img src="https://www.fannetasticfood.com/wp-content/uploads/2021/03/Tomato-Garlic-Pasta-featured-image-578x578.png" />
                        <div className="layer">
                            <h3>Creamy alfredo pasta</h3>
                        </div>
                    </div>
                    <div className="campus-col">
                        <img src="https://miro.medium.com/v2/resize:fit:578/1*cDZdB_kwHJHGt_eA9qLoaw.png" />
                        <div className="layer">
                            <h3>Biriyani</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="campus-col">
                        <img src="https://www.fannetasticfood.com/wp-content/uploads/2014/02/Chocolate-Cherry-Cookies-Process-2-578x578.png" />
                        <div className="layer">
                            <h3>chocolate cherry cookies</h3>
                        </div>
                    </div>
                    <div className="campus-col">
                        <img src="https://www.fannetasticfood.com/wp-content/uploads/2021/02/Cherry-Chocolate-Oats-featured-image-1-578x578.png" />
                        <div className="layer">
                            <h3>Chocolate oats</h3>
                        </div>
                    </div>
                    <div className="campus-col">
                        <img src="https://www.fannetasticfood.com/wp-content/uploads/2022/02/IP-Pork-Roast-Featured-Image-578x578.png" />
                        <div className="layer">
                            <h3>Pork Roast</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="course">
            <h1>Client review</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor
              nisi at arcu tempus, in tincidunt sem maximus. Vivamus hendrerit, felis in
              condimentum ultricies, elit sem bibendum sapien, sed molestie turpis enim
              sed nibh. Morbi diam magna, varius condimentum commodo at, lobortis a dolor.{" "}
            </p>
            <div className="row">
              <div className="course-col" style={{ backgroundColor: "#fcedda" }}>
                <h3>Excellent recipes</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  porttitor nisi at arcu tempus, in tincidunt sem maximus. Vivamus
                  hendrerit, felis in condimentum ultricies, elit sem bibendum sapien, sed
                  molestie turpis enim sed nibh. Morbi diam magna, varius condimentum
                  commodo at, lobortis a dolor.
                </p>
              </div>
              <div className="course-col" style={{ backgroundColor: "#f2fbcb" }}>
                <h3>Worth visiting </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  porttitor nisi at arcu tempus, in tincidunt sem maximus. Vivamus
                  hendrerit, felis in condimentum ultricies, elit sem bibendum sapien, sed
                  molestie turpis enim sed nibh. Morbi diam magna, varius condimentum
                  commodo at, lobortis a dolor.
                </p>
              </div>
              <div className="course-col" style={{ backgroundColor: "#f7d8f9" }}>
                <h3>Easy and short recipes</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  porttitor nisi at arcu tempus, in tincidunt sem maximus. Vivamus
                  hendrerit, felis in condimentum ultricies, elit sem bibendum sapien, sed
                  molestie turpis enim sed nibh. Morbi diam magna, varius condimentum
                  commodo at, lobortis a dolor.
                </p>
              </div>
            </div>
          </section>
        </div>  
    );
}

export default BlogPage;
