import styled from 'styled-components';

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: row;

  a {
    display: block;
    padding: 30px;
    color: #000;
    border-right: 1px solid #f4f4f4;
    font-size: 24px;
    text-decoration: none;

    &.active {
      color: #06b0c9;
    }

    &:hover {
      background-color: #f4f4f4;
    }
  }
`;
