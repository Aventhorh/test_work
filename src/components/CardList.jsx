import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Card from "./Card";

const CardList = ({ cards, title, remove }) => {
  if (!cards.length) {
    return <h2 style={{ textAlign: "center" }}>Пива нет</h2>;
  }

  return (
    <div>
      <h1 style={{ fontSize: 50, textAlign: "center", color: "#66FCF1" }}>
        {title}
      </h1>
      <TransitionGroup>
        {cards.map((card, index) => (
          <CSSTransition key={card.id} timeout={500} classNames="card">
            <Card remove={remove} number={index + 1} card={card} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default CardList;
