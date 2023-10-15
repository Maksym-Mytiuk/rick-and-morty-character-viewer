import { useEffect, useState } from "react";

import { CharacterDTO } from "@/interfaces/character";

import Character from "@/components/character/Character";
import Pagination from "@/components/pagination/Pagination";
import { PageContainer, LogoWrapper } from "./Characters.styled";
import logo from "@/assets/images/logo.png";

const url = "https://rickandmortyapi.com/api/character";

export default function Characters() {
  const [activePageNumber, setActivePageNumber] = useState(1);
  const [data, setData] = useState({} as CharacterDTO);

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

  if (!data?.results) {
    return <p>Loading</p>;
  } else {
    return (
      <>
        <a href="#">
          <LogoWrapper>
            <img src={logo} alt="logo" width="100%" />
          </LogoWrapper>
        </a>
        <PageContainer>
          {data.results.map((character) => (
            <Character key={character.id} character={character} />
          ))}
        </PageContainer>
        <Pagination pageCount={data.info.pages} onPageChange={onPageChange} />
      </>
    );
  }
}
