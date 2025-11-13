import { nanoid } from "nanoid"

export const AddContasts = (name, number) => {
    return {
        type: 'contacts/AddContacts',
        payload: {
            id: nanoid(),
            name,
            number
        }
    }
}

export const DeleteContacts = ( id ) => {
    return {
        type: 'contacts/DeleteContacts',
        payload: id
    }
}

export const FilterContacts = ( value ) => {
    return {
        type: 'filter/FilterContacts',
        payload: value
    }
}