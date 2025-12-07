import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import PhoneBook from "./components/PhoneBook/PhoneBook";
import Contacts from "./components/Contacts/Contacts";
import Filter from "./components/Filter/Filter";

function App() {

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