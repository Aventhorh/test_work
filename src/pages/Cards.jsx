import React, { useEffect, useState } from "react";

import CardList from "../components/CardList";
import CardFilter from "../components/CardFilter";

import Loader from "../components/UI/Loader/Loader";
import Header from "../components/UI/Header/header";
import Pagination from "../components/UI/Pagination/Pagination";

import { getPageCount } from "../components/utils/pages";

import { useCards } from "../hooks/useCards";
import { useFetching } from "../hooks/useFetching";

import ApiCards from "../API/ApiCards";

import getAllCardsStore from "../store/getAllCardsStore";
import { observer } from "mobx-react-lite";

const Cards = observer(() => {
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const sortedAndSearch = useCards(
    getAllCardsStore.cards,
    filter.sort,
    filter.query
  );

  const [fetchCards, isCardsLoading] = useFetching(async (limit, page) => {
    const response = await ApiCards.getAll(limit, page);
    getAllCardsStore.setCards(response.data);
    setTotalPages(getPageCount(100, limit));
  });

  // eslint-disable-next-line
  useEffect(() => fetchCards(10, page), []);

  const changePage = (page) => {
    setPage(page);
    fetchCards(10, page);
  };

  return (
    <div className="App">
      <Header />

      <hr style={{ margin: "15px 0", backgroundColor: "#C5C6C7" }} />

      <CardFilter filter={filter} setFilter={setFilter} />

      {isCardsLoading ? (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 120 }}
        >
          <Loader />
        </div>
      ) : (
        <CardList cards={sortedAndSearch} title="List of Bears" />
      )}

      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
});

export default Cards;
