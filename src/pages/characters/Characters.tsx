import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetch from '@/hooks/useFetch';

import { API_URL } from '@/utils/api';
import { Character as ICharacter, CharacterDTO } from '@/interfaces/character';

import Character from '@/components/character/Character';
import Pagination from '@/components/pagination/Pagination';
import CharacterModal from '@/components/character/CharacterModal';
import Text from '@/components/common/Text';

import { CharactersWrapper } from './Characters.styled';

interface CharacterData {
  loading: boolean;
  error: boolean;
  data: CharacterDTO;
}

export default function Characters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activePageNumber = Number(searchParams.get('page')) || 1;
  const { loading, data } = useFetch(`${API_URL.CHARACTER}/?page=${activePageNumber}`) as unknown as CharacterData;

  const [activeCharacter, setActiveCharacter] = useState({} as ICharacter);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function onPageChange({ selected }: { selected: number }) {
    setSearchParams({ page: (selected + 1).toString() });
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

  if (loading) {
    return <p>Loading</p>;
  } else {
    return (
      <>
        <Text tag="h1">Characters</Text>
        {data?.results && (
          <>
            <CharactersWrapper>
              {data.results.map((character) => (
                <Character key={character.id} character={character} openModal={openModal} />
              ))}
            </CharactersWrapper>
            {isModalOpen && <CharacterModal isOpen={isModalOpen} onClose={closeModal} character={activeCharacter} />}
            <Pagination pageCount={data.info.pages} onPageChange={onPageChange} forcePage={activePageNumber - 1} />
          </>
        )}
      </>
    );
  }
}
