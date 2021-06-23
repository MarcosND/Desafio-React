import React from 'react';
import './userCard.css';

function userCard(props) {
  return (
    <div className="user-card">
      <img src={props.image} alt="Imagem de perfil"/>
      <div className="TextSection">
      <div className="FirstSection">
      <h2>Nome: {props.userName}</h2>
      <h2>Empresa: {props.company}</h2>
      <h2>Twitter: {props.social}</h2>
      </div>
      <div className="SecondSection">
      <h2>Repositórios: {props.repos}</h2>
      <h2>Bio: {props.bio}</h2>
      <h2>Localização: {props.location}</h2>
      </div>
      </div>
    </div>
  );
}

export default userCard;
