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

const Card = ({ avatar, children }) => (
    <section className="card person-card">
        <div className="card-image">
            { avatar }
        </div>
        <div className="card-content">
            { children }
        </div>
    </section>
);

Card.Avatar = Avatar;
Card.Title = Title;
Card.Job = Job;
Card.Info = Info;

export default Card;