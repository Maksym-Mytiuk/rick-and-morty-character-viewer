import { useSearchParams } from 'react-router-dom';
import useFetch from '@/hooks/useFetch';

import { API_URL } from '@/constants/api';
import { LocationDTO } from '@/interfaces/location';

import Location from '@/components/Location';
import Pagination from '@/components/Pagination';
import Text from '@/components/common/Text';

import { LocationsWrapper } from './Locations.styled';

export default function Locations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activePageNumber = Number(searchParams.get('page')) || 1;
  const { loading, data } = useFetch<LocationDTO>(`${API_URL.LOCATION}/?page=${activePageNumber}`);

  function onPageChange({ selected }: { selected: number }) {
    setSearchParams({ page: (selected + 1).toString() });
    window.scrollTo({ top: 0 });
  }

  if (loading) {
    return <p>Loading</p>;
  } else {
    return (
      <>
        <Text tag="h1">Locations</Text>
        {data?.results && (
          <>
            <LocationsWrapper>
              {data.results.map((location) => (
                <Location key={location.id} location={location} />
              ))}
            </LocationsWrapper>
            <Pagination pageCount={data.info.pages} onPageChange={onPageChange} forcePage={activePageNumber - 1} />
          </>
        )}
      </>
    );
  }
}
