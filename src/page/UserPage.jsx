import React, { Fragment } from 'react'
import Carousel from '../components/carousel/Carousel'
import Article from '../components/article/Article'
import Slider from '../components/slider/Slider'

import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

function UserPage() {
    const [popup, setPopup] = useState(true);
    


    return (
        <Fragment>
            <Slider />
            
            <div className="home-page-carousel-section">
                <Modal show={popup} onHide={() => setPopup(false)}>
                    <div>
                        <button onClick={() => setPopup(false)}> X </button>
                        <h3> Wellcome, to our shop, Hope you will find which you need. </h3>
                        <Carousel className="Product" />
                    </div>
                </Modal>
                <h3>Loài chim</h3>
                <Carousel className="Bird" />
                <h3>Lồng chim</h3>
                <Carousel className="Product" />
                <h3>Phụ kiện - Đồ chơi</h3>
                <Carousel className="Toy" />
            </div>
            <Article />

        </Fragment>
    )
}

export default UserPage