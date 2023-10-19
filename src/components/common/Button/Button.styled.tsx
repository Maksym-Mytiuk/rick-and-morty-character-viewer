import styled from 'styled-components';

export const Button = styled.button`
  width: 140px;
  height: 45px;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #06b0c9;
  background-color: #fff;
  border: 1px solid #06b0c9;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    border: 1px solid transparent;
    background-color: #06b0c9;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
  }
`;
