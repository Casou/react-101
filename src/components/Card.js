import React from 'react';
import './Card.css';

const Card = ({ message }) => (
    <section className="card person-card">
        <div className="card-image">
            <img src="https://uinames.com/api/photos/female/1.jpg" />
        </div>
        <div className="card-content">
            <div className="card-title">
                Stéphanie Tixier
            </div>
            <div className="card-sub-title">
                Développeur.se
            </div>
            <div className="card-info">
                <i className="material-icons" title="email">email</i>
                <span>
                    <a href="mailto:s.tixier@proxiad.com">
                        s.tixier@proxiad.com
                    </a>
                </span>
            </div>

            <div className="card-info">
                <i className="material-icons" title="phone">phone</i>
                <span>
                    <a href="tel:0637234221">0637234221</a>
                </span>
            </div>
        </div>
    </section>
);

export default Card;