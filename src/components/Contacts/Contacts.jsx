import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";
import { FetchContacts, DeleteContacts } from "../../redux/operations";
const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const visible = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
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
