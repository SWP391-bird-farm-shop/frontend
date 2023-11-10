import React, { Fragment } from 'react';
import About from '../components/about/About';
import Carousel from '../components/carousel/Carousel';
import CageList from '../components/cage-list/CageList'
import './SpeciesPage.css';

const SpeciesPage = () => {
    return (
        <Fragment>
            <About />
            <div className="bird-of-species-section">
                <h3>Lồng phù hợp với chim</h3>
                <CageList />
            </div>
            <div className="different-species-carousel">
                <h3>Các loài chim khác</h3>
                <Carousel className="Bird"/>
            </div>
        </Fragment>
    );
}

export default SpeciesPage;
