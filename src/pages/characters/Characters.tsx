import { useEffect, useState } from 'react';

import { Character as ICharacter, CharacterDTO } from '@/interfaces/character';

import Character from '@/components/character/Character';
import Pagination from '@/components/pagination/Pagination';
import CharacterModal from '@/components/character/CharacterModal';
import Text from '@/components/common/Text';

import { CharactersWrapper } from './Characters.styled';

const url = 'https://rickandmortyapi.com/api/character';

export default function Characters() {
  const [activePageNumber, setActivePageNumber] = useState(1);
  const [data, setData] = useState({} as CharacterDTO);

  const [activeCharacter, setActiveCharacter] = useState({} as ICharacter);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function doFetch() {
      const response = await fetch(`${url}/?page=${activePageNumber}`, {
        signal: controller.signal,
      });
      const data: Awaited<CharacterDTO> = await response.json();
      setData(data);
    }

    doFetch();

    return () => {
      controller.abort();
    };
  }, [activePageNumber]);

  function onPageChange({ selected }: { selected: number }) {
    setActivePageNumber((prev) => (prev = selected + 1));
    window.scrollTo({ top: 0 });
  }

  function openModal(id: number) {
    const character = data.results.find((character) => character.id === id);
    if (character) {
      setActiveCharacter(character);
      setIsModalOpen(true);
    }
  }

  function closeModal() {
    setIsModalOpen(false);
    setActiveCharacter({} as ICharacter);
  }

  if (!data?.results) {
    return <p>Loading</p>;
  } else {
    return (
      <>
        <Text tag="h1">Characters</Text>
        <CharactersWrapper>
          {data.results.map((character) => (
            <Character key={character.id} character={character} openModal={openModal} />
          ))}
        </CharactersWrapper>
        {isModalOpen && <CharacterModal isOpen={isModalOpen} onClose={closeModal} character={activeCharacter} />}
        <Pagination pageCount={data.info.pages} onPageChange={onPageChange} />
      </>
    );
  }
}
