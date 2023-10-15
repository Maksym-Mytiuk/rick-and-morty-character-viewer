import { Character as ICharacter } from "@/interfaces/character";

import Text from "@/components/common/Text";
import { CharacterWrapper, CharacterCaption } from "./Character.styled";

type Props = {
  character: ICharacter;
};

export default function Character({ character }: Props) {
  return (
    <CharacterWrapper>
      <img
        width={300}
        height={300}
        src={character.image}
        alt={character.name}
      />
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
    </CharacterWrapper>
  );
}
