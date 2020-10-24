import React from 'react';
import "./../assets/css/bookedCard.css";
import StarIcon from "@material-ui/icons/Star";

function BookedCard({src, price, description, star, className}) {
    return (
        <div className='card'>
            <img src={src} alt="" />
            <div className="card_info">
                <h2>{price}</h2>
                <h4>{description}</h4>
                <div className="card_stars">
                    <StarIcon className="card_star" />
                    <StarIcon className="card_star" />
                    <StarIcon className="card_star" />
                    <StarIcon className="card_star" />
                    <StarIcon className="card_star" />
                    <p className='review'>{star}</p>
                </div>
            </div>
        </div>
    )
}

export default BookedCard
