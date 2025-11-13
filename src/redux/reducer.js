import { combineReducers } from "redux";


const intialState = {
 contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
 filter: ""
}

const ContactsReducer = ( state = intialState, action) => {
    switch (action.type) {
        case 'contacts/AddContacts':
            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    action.payload
                ]
            };

        case 'contacts/DeleteContacts':
            return {
                ...state,
                contacts: state.contacts.filter((contact) => contact.id !== action.payload)
            }
    
        default:
            return state
    }
}

const FilterReducer = ( state = '', action) => {
    switch (action.type) {
        case 'filter/FilterContacts':
            return action.payload
    
        default:
            return state
    }
}
export const rootReducer = combineReducers({
    contacts: ContactsReducer,
    filter: FilterReducer
})

