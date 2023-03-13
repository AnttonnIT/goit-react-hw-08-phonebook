import { List, Button, LoadingContainer } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';

import { deleteContact, fetchContacts } from 'redux/contacts/operation';
import { RotatingLines } from 'react-loader-spinner';
import { useEffect } from 'react';

export const ContactList = () => {
  const { items: contacts, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (contacts.length > 0) {
      return;
    }

    dispatch(fetchContacts());
  }, [contacts, dispatch]);

  const getFilteredContacts = () => {
    const regExp = new RegExp(filter, 'gi');
    return contacts.filter(({ name }) => name.match(regExp));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      {isLoading && !error && (
        <LoadingContainer>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </LoadingContainer>
      )}

      {error && !isLoading && <h2>Oops, something went wrong ({error}) </h2>}
      {!error && (
        <List>
          {contacts.length === 0 && !isLoading && (
            <h3>here will be your contacts</h3>
          )}
          {filter && filteredContacts.length === 0 && <h3>no matches found</h3>}
          {filteredContacts.map(({ name, id, number }) => {
            return (
              <li key={id}>
                <b>{name}:</b> {number}
                <Button
                  type="button"
                  disabled={isLoading}
                  onClick={() => {
                    dispatch(deleteContact(id));
                  }}
                >
                  Delete
                </Button>
              </li>
            );
          })}
        </List>
      )}
    </>
  );
};
