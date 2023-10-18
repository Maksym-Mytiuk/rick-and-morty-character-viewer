import styled from 'styled-components';

export const CloseButton = styled.div`
  cursor: pointer;

  &::before {
    content: 'x';
    position: absolute;
    top: 5px;
    right: 20px;
    font-size: 44px;
    color: #ccc;
    transition: color 0.2s;
  }

  &:hover {
    &::before {
      color: #000;
    }
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
`;

export const CharacterDetails = styled.div`
  max-width: 470px;
  padding: 0 25px;
  p {
    font-size: 22px;
    line-height: 1.25;
  }
`;

export const EpisodeItem = styled.span`
  display: inline-block;
`;
