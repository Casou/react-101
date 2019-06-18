import React from 'react';
import './Card.css';

const Card = ({ message }) => (
    <section className="card person-card">
        <div className="card-content">
            Insérez le message passé en props ({ message });
        </div>
    </section>
);

export default Card;