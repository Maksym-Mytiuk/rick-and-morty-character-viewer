import { useSearchParams } from 'react-router-dom';

import { useFetchEpisodesQuery } from '../RickAndMorty/rickAndMortyApiSlice';

import { EpisodeDTO } from '@/interfaces/episode';

import Episode from '@/components/Episode';
import Pagination from '@/components/Pagination';
import Text from '@/components/common/Text';
import { EpisodesWrapper } from './Episodes.styled';

export default function Episodes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activePageNumber = Number(searchParams.get('page')) || 1;

  const { data = {} as EpisodeDTO, isFetching } = useFetchEpisodesQuery({ activePageNumber });

  function onPageChange({ selected }: { selected: number }) {
    setSearchParams({ page: (selected + 1).toString() });
    window.scrollTo({ top: 0 });
  }

  if (isFetching) {
    return <p>isFetching</p>;
  } else {
    return (
      <>
        <Text tag="h1">Episodes</Text>
        {data?.results && (
          <>
            <EpisodesWrapper>
              {data.results.map((episode) => (
                <Episode key={episode.id} episode={episode} />
              ))}
            </EpisodesWrapper>
            <Pagination pageCount={data.info.pages} onPageChange={onPageChange} forcePage={activePageNumber - 1} />
          </>
        )}
      </>
    );
  }
}
