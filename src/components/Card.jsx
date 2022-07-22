import React from "react";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(`/cards/${props.card.id}`)}>
      <div className="card__content">
        <img
          style={{ height: 100 }}
          src={props.card.image_url}
          alt={props.card.name}
        />
        <div className="card__container">
          <strong className="card__title">{props.card.name}</strong>
          <p className="card__descr">{props.card.description}</p>
        </div>
      </div>
      <div className="card__btns"></div>
    </div>
  );
};

export default Card;
