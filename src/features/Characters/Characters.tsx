import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useFetchCharactersQuery } from '../RickAndMorty/rickAndMortyApiSlice';

import { CharacterDTO } from '@/interfaces/character';

import Character, { CharacterModal } from '@/components/Character';
import Pagination from '@/components/Pagination';
import Text from '@/components/common/Text';
import SearchInput from '@/components/common/SearchInput';
import Button from '@/components/common/Button';
import { CharactersWrapper, SearchWrapper } from './Characters.styled';

export default function Characters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activePageNumber = Number(searchParams.get('page')) || 1;
  const searchName = searchParams.get('name') || '';

  const [searchValue, setSearchValue] = useState(searchName);
  const [activeCharacterId, setActiveCharacterId] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data = {} as CharacterDTO, isFetching } = useFetchCharactersQuery({ activePageNumber, searchName });

  function onPageChange({ selected }: { selected: number }) {
    updateSearchParams({ page: `${selected + 1}` });
  }

  function findByName() {
    updateSearchParams({ name: searchValue });
  }

  function updateSearchParams(param: Record<string, string>) {
    setSearchParams({ page: param.page || '', name: searchValue });
    window.scrollTo({ top: 0 });
  }

  function openModal(id: number) {
    setActiveCharacterId(id);
    setIsModalOpen(true);
  }

  function closeModal() {
    setActiveCharacterId(0);
    setIsModalOpen(false);
  }

  const selectedCharacter = data?.results?.find((character) => character.id === activeCharacterId);

  if (isFetching) {
    return <p>Loading</p>;
  } else {
    return (
      <>
        <Text tag="h1">Characters</Text>

        <SearchWrapper>
          <SearchInput onChange={(value) => setSearchValue(value)} onEnter={findByName} value={searchValue} />
          <Button onClick={findByName}>Search</Button>
        </SearchWrapper>

        {data?.results && (
          <>
            <CharactersWrapper>
              {data.results.map((character) => (
                <Character key={character.id} character={character} openModal={openModal} />
              ))}
            </CharactersWrapper>
            <Pagination pageCount={data.info.pages} onPageChange={onPageChange} forcePage={activePageNumber - 1} />

            {isModalOpen && selectedCharacter && <CharacterModal isOpen={isModalOpen} onClose={closeModal} character={selectedCharacter} />}
          </>
        )}
      </>
    );
  }
}
