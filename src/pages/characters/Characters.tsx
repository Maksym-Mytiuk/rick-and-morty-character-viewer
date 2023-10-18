import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetch from '@/hooks/useFetch';

import { API_URL } from '@/utils/api';
import { CharacterDTO } from '@/interfaces/character';

import Character from '@/components/character/Character';
import Pagination from '@/components/pagination/Pagination';
import CharacterModal from '@/components/character/CharacterModal';
import Text from '@/components/common/Text';
import SearchInput from '@/components/common/SearchInput/SearchInput';
import Button from '@/components/common/Button/Button';

import { CharactersWrapper, InputWrapper } from './Characters.styled';

interface CharacterData {
  loading: boolean;
  error: boolean;
  data: CharacterDTO;
}

export default function Characters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramPage = Number(searchParams.get('page')) || 1;
  const paramName = searchParams.get('name') || '';

  const [searchValue, setSearchValue] = useState(paramName);
  const [activeCharacterId, setActiveCharacterId] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { loading, data } = useFetch(`${API_URL.CHARACTER}/?page=${paramPage}&name=${paramName}`) as unknown as CharacterData;

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
    setIsModalOpen(false);
    setActiveCharacterId(0);
  }

  const selectedCharacter = data?.results?.find((character) => character.id === activeCharacterId);

  if (loading) {
    return <p>Loading</p>;
  } else {
    return (
      <>
        <Text tag="h1">Characters</Text>
        {data?.results && (
          <>
            <InputWrapper>
              <SearchInput onChange={(value) => setSearchValue(value)} onEnter={findByName} value={searchValue} />
              <Button onClick={findByName}>Search</Button>
            </InputWrapper>

            <CharactersWrapper>
              {data.results.map((character) => (
                <Character key={character.id} character={character} openModal={openModal} />
              ))}
            </CharactersWrapper>
            {isModalOpen && selectedCharacter && <CharacterModal isOpen={isModalOpen} onClose={closeModal} character={selectedCharacter} />}
            <Pagination pageCount={data.info.pages} onPageChange={onPageChange} forcePage={paramPage - 1} />
          </>
        )}
      </>
    );
  }
}
