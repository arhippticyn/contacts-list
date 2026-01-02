import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../../redux/selectors";
import { FilterContacts } from "../../redux/FilterSlice";

const Filter = () => {
  const filter = useSelector(getFilter);
  console.log(filter, typeof filter);
  const dispatch = useDispatch();
  const handleFilter = (e) => dispatch(FilterContacts(e.target.value));
  return (
    <div>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
        placeholder="Search..."
      />
    </div>
  );
};

export default Filter;
