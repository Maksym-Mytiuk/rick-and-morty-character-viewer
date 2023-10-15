import { Character as ICharacter } from '@/interfaces/character';

import Text from '@/components/common/Text';
import Button from '@/components/common/Button/Button';
import { CharacterWrapper, CharacterCaption, CharacterHoverCaption } from './Character.styled';

type Props = {
  character: ICharacter;
  openModal: (id: number) => void;
};

export default function Character({ character, openModal }: Props) {
  return (
    <CharacterWrapper onClick={() => openModal(character.id)}>
      <img width={300} height={300} src={character.image} alt={character.name} />
      <CharacterCaption>
        <Text tag="h3">{character.name}</Text>
        <Text>
          <Text tag="span">Species: </Text>
          {character.species}
        </Text>
        <Text>
          <Text tag="span">Status: </Text>
          {character.status}
        </Text>
      </CharacterCaption>
      <CharacterHoverCaption className="hover-caption">
        <Button>More details</Button>
      </CharacterHoverCaption>
    </CharacterWrapper>
  );
}
