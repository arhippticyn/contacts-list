import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";
import { DeleteContacts } from "../../redux/actions";

const Contacts = () => {
    const contacts = useSelector(getContacts)
    const filter = useSelector(getFilter)
    const dispatch = useDispatch()

    const handleDelete = () => dispatch(DeleteContacts(contacts.id))

    const VisibleFilter = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
    return (
        <ul>
            {VisibleFilter.map(({name, id, number}) => (
                <li id={id}>
                    {name}: {number} <button onClick={handleDelete}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default Contacts