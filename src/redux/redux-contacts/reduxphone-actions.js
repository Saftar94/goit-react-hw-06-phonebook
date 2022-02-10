import { createAction } from "@reduxjs/toolkit";

export const addContacts = createAction("contacts/addcontacts");
export const deleteContacts = createAction("contacts/deletecontacts");
export const addfilterContacts = createAction("contacts/filtercontacts");
