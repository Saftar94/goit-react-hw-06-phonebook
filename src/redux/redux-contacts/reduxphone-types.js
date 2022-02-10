import { createSelector } from "@reduxjs/toolkit";

export const getContact = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;

export const filterContacts = createSelector(
  [getContact, getFilter],
  (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  }
);
