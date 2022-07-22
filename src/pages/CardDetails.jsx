import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ApiCards from "../API/ApiCards";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

import getCardStore from "../store/getCardStore";
import { observer } from "mobx-react-lite";

const CardDetails = observer(() => {
  const params = useParams();
  const [fetchCardById, isLoading] = useFetching(async (id) => {
    const response = await ApiCards.getById(id);
    getCardStore.setCard(response.data[0]);
  });

  useEffect(() => {
    fetchCardById(params.id);
  }, []);
  console.log(getCardStore.card);

  return (
    <div
      style={{
        marginTop: 50,
        width: 500,
        height: "95vh",
        overflowY: "hidden",
        scrollY: "none",
      }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <img
            style={{ height: 200 }}
            src={getCardStore.card.image_url}
            alt={getCardStore.card.name}
          />
          <h2>{getCardStore.card.name}</h2>
          <p>
            {getCardStore.card.id}.{getCardStore.card.description}
          </p>
          <p>Tagline - {getCardStore.card.tagline}</p>
          <p>Grade - {getCardStore.card.abv}</p>
          <p>Food pairing - {getCardStore.card.food_pairing}</p>
        </div>
      )}
    </div>
  );
});

export default CardDetails;
