import { useSearchParams } from 'react-router-dom';
import useFetch from '@/hooks/useFetch';

import { API_URL } from '@/utils/api';
import { EpisodeDTO } from '@/interfaces/episode';

import Episode from '@/components/episode/Episode';
import Pagination from '@/components/pagination/Pagination';
import Text from '@/components/common/Text';

import { EpisodesWrapper } from './Episodes.styled';

interface EpisodeData {
  loading: boolean;
  error: boolean;
  data: EpisodeDTO;
}

export default function Episodes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activePageNumber = Number(searchParams.get('page')) || 1;
  const { loading, data } = useFetch(`${API_URL.EPISODE}/?page=${activePageNumber}`) as unknown as EpisodeData;

  function onPageChange({ selected }: { selected: number }) {
    setSearchParams({ page: (selected + 1).toString() });
    window.scrollTo({ top: 0 });
  }

  if (loading) {
    return <p>Loading</p>;
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
