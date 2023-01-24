import styled from 'styled-components';

export const ContactsList = styled.ul`
  display: flex;
  margin-right: auto;
  flex-direction: column;
  padding: 12px;
  margin: auto;
  max-width: 450px;
  gap: 5px;
`;
export const ContactsListItem = styled.li`
  display: flex;
`;
export const ContactsListInf = styled.p`
  margin-left: 10px;
`;
export const ContactsListButton = styled.button`
  display: flex;
  margin-left: auto;
  border: none;
  outline: none;
  background-color: transparent;
  &:hover,
  &:focus {
    color: #d85841;
  }
`;
