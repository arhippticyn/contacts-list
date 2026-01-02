import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";
import { FetchContacts, DeleteContacts } from "../../redux/operations";
const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchContacts());
  }, [dispatch]);

  const filterValue = String(filter).toLowerCase();

  const visible = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue)
  );
  return (
    <ul>
      {visible.map(({ name, id, number }) => (
        <li key={id}>
          {name}: {number}{" "}
          <button onClick={() => dispatch(DeleteContacts(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
