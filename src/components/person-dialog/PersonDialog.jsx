import React from 'react';
import PropTypes from 'prop-types';
import {Dialog, DialogContent, Icon, Link} from "@material-ui/core";
import {lpad} from "common";

import "./PersonDialog.css";

const PersonDialog = ({ open, handleClose, person }) => {
  if (!person) {
    return "";
  }

  const sex = person.sex === 1 ? "men" : "women";
  const photo = `https://randomuser.me/api/portraits/${sex}/${person.pictureIndex}.jpg`;
  const birthdate = lpad(person.birthDate[2]) + "/" + lpad(person.birthDate[1]) + "/" + lpad(person.birthDate[0]);
  const arrivalDate = lpad(person.arrivalDate[2]) + "/" + lpad(person.arrivalDate[1]) + "/" + lpad(person.arrivalDate[0]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll={'paper'}
      aria-labelledby="scroll-dialog-title"
      classes={{root : "person-dialog"}}
      fullWidth={true}
      maxWidth={'md'}
    >
      <DialogContent classes={{root : "person-dialog__content"}}>
        <div id="person-dialog__background"><div id="person-dialog__background-overlay"></div></div>
        <div id={"person-dialog__head"}>
          <div id={"person-dialog__head-img"}>
            <img src={ photo } alt={ photo } />
            <h1>{person.name} {person.surname}</h1>
            <h2>
              {person.job}
            </h2>
          </div>

          <aside>
            <h1>Profil :</h1>
            <ul>
              <li><label>Date de naissance : </label><span>{ birthdate } ({ person.age } ans)</span></li>
              <li><label>Date d'arrivée : </label><span>{ arrivalDate }</span></li>
              <li><label>Email : </label><span>{ person.email }</span></li>
              <li><label>Téléphone : </label><span>{ person.phone }</span></li>
              <li><label>Lieu de travail : </label><span>{ person.workPlace }</span></li>
            </ul>
          </aside>
        </div>

        <main>
          <div>
            <h1>
              <div className="person-dialog__icon">
                <Icon>computer</Icon>
              </div>
              Compétences
            </h1>
            {
              Object.entries(person.skillMap).map(([key, value]) =>
                <div key={ key } className="person-dialog__skill-category">
                  <h2>{ key }</h2>
                  <ul>
                    { value.map(skill => <li key={skill}>{ skill }</li>) }
                  </ul>
                </div>
              )
            }
          </div>

          <div>
            <h1>
              <div className="person-dialog__icon">
                <Icon>comment</Icon>
              </div>
              Langues
            </h1>
            <div className="person-dialog__languages">
              <ul>
                {
                  person.languages.map(language =>
                    <li key={ language.icon }>
                      <div className="person-dialog__languages-icon">
                        <i className={"flagIcon " + language.icon} title={language.icon} />
                      </div>
                      <label>{ language.label }</label>
                    </li>
                  )
                }
              </ul>
            </div>
          </div>

          <div>
            <h1>
              <div className="person-dialog__icon">
                <Icon>directions_bike</Icon>
              </div>
              Intérêts
            </h1>
            <div className="person-dialog__interets">
              <ul>
                {
                  person.interets.map(interet =>
                    <li key={ interet }>
                      <Icon className="icon">check</Icon>
                      { interet }
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
        </main>

      </DialogContent>
    </Dialog>
  );
};

PersonDialog.propTypes = {
  open : PropTypes.bool.isRequired,
  handleClose : PropTypes.func.isRequired,
  person : PropTypes.any
};


export default PersonDialog;