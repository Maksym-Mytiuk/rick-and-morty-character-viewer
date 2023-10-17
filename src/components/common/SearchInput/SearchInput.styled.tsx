import styled from 'styled-components';

export const SearchInput = styled.input`
  height: 45px;
  width: 100%;
  padding: 0 10px;
  font-size: 22px;
  border: 1px solid #06b0c9;
  border-radius: 24px;

  &:hover {
    border: 1px solid #048194;
  }

  &:focus {
    outline: 1px solid #06b0c9;
  }
`;
