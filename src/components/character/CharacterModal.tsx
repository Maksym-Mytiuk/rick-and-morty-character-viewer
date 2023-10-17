import React from 'react';
import ReactModal from 'react-modal';

import { Character } from '@/interfaces/character';

import Text from '@/components/common/Text';
import { CloseButton, ModalWrapper, CharacterDetails, EpisodeLink } from './CharacterModal.styled';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  character: Character;
};

export default function CharacterModal({ isOpen, onClose, character }: Props) {
  return (
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnEsc={true}
      preventScroll={true}
      ariaHideApp={false}
      onRequestClose={onClose}
      style={{
        overlay: {},
        content: {
          width: '1000px',
          height: '500px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <CloseButton onClick={onClose} />
      <ModalWrapper>
        <div className="col">
          <img src={character.image} alt={character.name} width={'450px'} />
        </div>
        <CharacterDetails>
          <Text>Name: {character.name}</Text>
          <Text>Gender: {character.gender}</Text>
          <Text>Status: {character.status}</Text>
          <Text>Species: {character.species}</Text>
          <Text>Gender: {character.gender}</Text>
          <Text>
            Origin: <a href={character.origin.url}>{character.origin.name}</a>
          </Text>
          <Text>
            Location: <a href={character.location.url}>{character.location.name}</a>
          </Text>
          <Text>
            Episodes:{' '}
            {character.episode.map((item) => {
              const episodeGroup = item.split('/');
              const episodeName = episodeGroup[episodeGroup.length - 1];
              return (
                <React.Fragment key={episodeName}>
                  <EpisodeLink href={item}>{episodeName}</EpisodeLink>
                  ,&nbsp;
                </React.Fragment>
              );
            })}
          </Text>
        </CharacterDetails>
      </ModalWrapper>
    </ReactModal>
  );
}
