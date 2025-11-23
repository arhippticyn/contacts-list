import React from "react";
import { nanoid } from 'nanoid'
import styles from './PhoneBook.module.css'
import { useDispatch } from "react-redux";
import { AddContasts } from "../../redux/ContactsSlice";

const Phonebook = () => {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    dispatch(AddContasts(form.elements.name.value, form.elements.number.value))
    form.reset()
    
  }
    return (
        <form className={styles.form} action="" onSubmit={handleSubmit}>
                <label className={styles.label} htmlFor="name">Name</label>
                <input
                className={styles.input}
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
                <label className={styles.label} htmlFor="number">Number</label>
                <input
                   className={styles.input}
                   type="tel"
                   name="number"
                   pattern="^\+?\d{1,4}[\s.-]?\(?\d{1,3}\)?[\s.-]?\d{1,4}[\s.-]?\d{1,4}[\s.-]?\d{1,9}$"
                   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                   required
                />
                <button className={styles.btn} type="submit">Add contact</button>
            </form>  
    )
}

export default Phonebook