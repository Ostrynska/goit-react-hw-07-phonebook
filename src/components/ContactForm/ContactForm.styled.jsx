import styled from 'styled-components';

export const ContactsForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin: auto;
  max-width: 450px;
  gap: 10px;
`;
export const ContactsLabel = styled.label`
  font-weight: 700;
`;
export const ContactsInput = styled.input`
  display: block;
  padding: 3px 0 3px 10px;
  width: 440px;
  height: 40px;
  border: 1px solid #21212133;
  border-radius: 4px;
  line-height: 1.17;
  letter-spacing: 0.01em;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    outline: none;
    border-color: #d85841;
  }
`;
export const ContactsButton = styled.button`
  padding: 10px 55px;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-weight: 700;
  line-height: 1.87;
  letter-spacing: 0.06em;
  color: #fff;
  background-color: #d85841;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #1c4931;
  }
`;

export const ErrorMessages = styled.p`
  font-weight: 700;
  font-size: 12px;
  color: #d85841;
`;
