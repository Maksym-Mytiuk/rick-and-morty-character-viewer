import styled from 'styled-components';

export const CharacterWrapper = styled.figure`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 410px;
  max-width: 300px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 7px;
  overflow: hidden;
  transform: scale(1);
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transform: scale(1.05);

    .hover-caption {
      transform: translateY(-110px);
    }
  }
`;

export const CharacterCaption = styled.figcaption`
  padding: 10px 25px;
`;

export const CharacterHoverCaption = styled.div`
  position: absolute;
  top: 100%;
  height: calc(410px - 300px);
  width: 100%;
  display: grid;
  place-content: center;
  background: #fff;
  transform: translateY(0);
  transition: transform 0.2s;
  cursor: pointer;
`;
