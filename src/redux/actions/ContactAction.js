import {
  CREATE_CONTACT,
  DELETE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONTACT,
  DELETE_SELECTED_CONTACT,
} from "../../utils/types";

// add contact
export const addContact = (contact) => ({
  type: CREATE_CONTACT,
  payload: contact,
});

// get contact from id
export const getContact = (id) => ({
  type: GET_CONTACT,
  payload: id,
});

// update contact
export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

//delete a contact
export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

//select all contacts
export const selectAllContact = (id) => ({
  type: SELECT_CONTACT,
  payload: id,
});

// clear selected contact
export const clearAllContact = () => ({
  type: CLEAR_CONTACT,
});

// delete selected contacts
export const deleteSelectedContact = (payload) => ({
  type: DELETE_SELECTED_CONTACT,
  payload,
});
