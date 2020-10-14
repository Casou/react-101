import React from 'react';
import './Card.css';

const Avatar = ({ pictureIndex }) => (
    <div className="card-image">
        <img src={ `https://randomuser.me/api/portraits/women/${ pictureIndex }.jpg` } alt="Avatar" />
    </div>
);

const Title = ({ firstName, lastName }) => (
    <div className="card-title">
        { firstName } { lastName }
    </div>
);

const Job = ({ job }) => (
    <div className="card-sub-title">
        { job }
    </div>
);

const Info = ({ icon, children }) => (
    <div className="card-info">
        <i className="material-icons" title={icon}>{ icon }</i>
        <span>
            { children }
        </span>
    </div>
);

const Email = ({ mail }) => (
    <Info icon="email">
        <a href={ `mailto:${ mail }` }>{ mail }</a>
    </Info>
);

const Phone = ({ phone }) => (
    <Info icon="phone">
        <a href={ `tel:${ phone }` }>{ phone }</a>
    </Info>
);

const Card = ({ avatar, children }) => (
    <section className="card person-card">
        { avatar }
        <div className="card-content">
            { children }
        </div>
    </section>
);

Card.Avatar = Avatar;
Card.Title = Title;
Card.Job = Job;
Card.Email = Email;
Card.Phone = Phone;

export default Card;