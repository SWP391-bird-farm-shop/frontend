import React, { useEffect, useState } from "react";
import './About.css';
import api from "../utils/requestAPI";
import { useParams } from "react-router-dom";

const About = () => {

    const { birdId } = useParams();
    const [bird, setBird] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const url = '';
            try {
                const response = await api.get(url);
                console.log(response.data);
                setBird(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [birdId])

    return (
        <div className="about-container">
            {bird?.map((bird) => {
                <div className="about-section">
                    <div className="image-container">
                        <img src={bird?.imageUrl} alt="Vet" key={bird?.birdId}/>
                    </div>
                    <div className="description-container">
                        <h2>{bird?.birdName}</h2>
                        <p>{bird?.description}</p>
                    </div>
                </div>
            })}

        </div>
    )
}

export default About;