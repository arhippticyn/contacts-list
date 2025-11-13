import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import PhoneBook from "./components/PhoneBook/PhoneBook";
import Contacts from "./components/Contacts/Contacts";
import Filter from "./components/Filter/Filter";

function App() {
  // const [contacts, setContacts] = useState([
  //    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ])
  // const [filter, setFilter] = useState('')
  // const [name, setName] = useState('')
  // const [number, setNumber] = useState('')

//   const handleChangeName = e => {
//     setName(e.target.value)
//   }

//   const handleChangeNum = e => {
//     setNumber(e.target.value)
//   }

//   const handleFilterChange = e => {
//     setFilter(e.target.value)
//   }

//   const handleSubmit = e => {
//     e.preventDefault()

//     if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
//   alert(`${name} is already in contacts`);
//   return;
// }


//     const newContacts = {
//       id: nanoid(),
//       name: name,
//       number: number
//     }

//     setContacts(prev => [...prev, newContacts])
//     setName('')
//     setNumber('')
//     setFilter('')
//   }

// const getFilteredContacts = () => {
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };


//  const deleteBtn = (id) => {
//  setContacts(prev => prev.filter(contact => contact.id !== id));
// }

//   return (
//    <div>
//     <h2>PhoneBook</h2>

//     <PhoneBook 
//     name={name}
//     number={number}
//     sub={handleSubmit}
//     changeN={handleChangeName}
//     changeNum={handleChangeNum} />

//     <h2>Contacts</h2>
//     <h3>Find contacts by name</h3>

//     <Filter filter={filter} onFilter={handleFilterChange} />
// <Contacts contacts={getFilteredContacts()} deleteBtn={deleteBtn} />
//     </div>
//   );

return (
  <div>
    <h2>PhoneBook</h2>
    <PhoneBook />
    <h2>Contacts</h2>
    <h3>Find contacts by name</h3>
    <Filter />
    <Contacts />
  </div>
)
}

export default App;