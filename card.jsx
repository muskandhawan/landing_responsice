import React from "react";

import './card.scss';

const Card = (props) => {
    return(
        <div className="Card">
            <img src={props.src} className="Card--Img" alt="Card1" />
            <div className="Card--Rule"> </div>
            <h1 className="Card--Heading">{props.title}</h1>
        </div>
    )
}

export default Card;
