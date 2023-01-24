import { createSelector } from '@reduxjs/toolkit';

export const getContact = state => state.contacts.items;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getStatusFilter = state => state.filters.value;

export const getFilteredContacts = createSelector(
  [getContact, getStatusFilter],
  (contacts, filters) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filters.toLowerCase())
    );
  }
);
