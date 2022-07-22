import React from "react";
import Input from "./UI/input/Input";

const CardFilter = ({ filter, setFilter }) => {
  return (
    <div style={{ marginTop: 20 }}>
      <Input
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search"
      />
    </div>
  );
};

export default CardFilter;
