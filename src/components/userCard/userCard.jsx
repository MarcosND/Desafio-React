import React from 'react';
import './userCard.css';

function userCard(props) {
  return (
    <div className="user-card">
      <img src={props.image} alt="Imagem de perfil"/>
      <h2>Nome: {props.userName}</h2>
      <h2>Empresa: {props.company}</h2>
      <h2>Twitter: {props.social}</h2>
      <h2>Quantidade de Repositórios: {props.repos}</h2>
      <h2>Bio: {props.bio}</h2>
      <h2>Localização: {props.location}</h2>
    </div>
  );
}

export default userCard;
