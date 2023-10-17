import { useSearchParams } from 'react-router-dom';
import useFetch from '@/hooks/useFetch';

import { API_URL } from '@/utils/api';
import { LocationDTO } from '@/interfaces/location';

import Location from '@/components/location/Location';
import Pagination from '@/components/pagination/Pagination';
import Text from '@/components/common/Text';

import { LocationsWrapper } from './Locations.styled';

interface LocationData {
  loading: boolean;
  error: boolean;
  data: LocationDTO;
}

export default function Locations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activePageNumber = Number(searchParams.get('page')) || 1;
  const { loading, data } = useFetch(`${API_URL.LOCATION}/?page=${activePageNumber}`) as unknown as LocationData;

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
