import styled from 'styled-components';

export const FilterWrap = styled.div`
  display: flex;
  margin-right: auto;
  flex-direction: column;
  padding: 12px 12px 0 12px;
  margin: auto;
  max-width: 450px;
  gap: 5px;
`;

export const FilterLabel = styled.label`
  margin-top: 10px;
  font-weight: 700;
`;
export const FilterInput = styled.input`
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
