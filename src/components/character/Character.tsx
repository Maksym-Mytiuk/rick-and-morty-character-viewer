import { Character as ICharacter } from '@/interfaces/character';

import Text from '@/components/common/Text';
import Card from '@/components/common/Card/Card';

type Props = {
  character: ICharacter;
  openModal: (id: number) => void;
};

export default function Character({ character, openModal }: Props) {
  return (
    <Card id={character.id} image={character.image} title={character.name} handleClick={openModal}>
      <Text>
        <Text tag="span">Species: </Text>
        {character.species}
      </Text>
      <Text>
        <Text tag="span">Status: </Text>
        {character.status}
      </Text>
    </Card>
  );
}
