import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContacts,
  deleteContacts,
  addfilterContacts,
} from "./reduxphone-actions";

const itemAddcontacr = createReducer([], {
  [addContacts]: (state, action) => action.payload,
  [deleteContacts]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filterReducer = createReducer("", {
  [addfilterContacts]: (state, action) => action.payload,
});

export default combineReducers({
  items: itemAddcontacr,
  filter: filterReducer,
});
