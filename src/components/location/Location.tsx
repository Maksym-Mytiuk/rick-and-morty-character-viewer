import { Location as ILocation } from '@/interfaces/location';

import Text from '@/components/common/Text';
import Card from '@/components/common/Card/Card';

type Props = {
  location: ILocation;
};

export default function Location({ location }: Props) {
  return (
    <Card id={location.id} title={location.name} handleClick={() => alert('More details soon...')}>
      <Text>
        <Text tag="span">Type: </Text>
        {location.type}
      </Text>
      <Text>
        <Text tag="span">Dimension: </Text>
        {location.dimension}
      </Text>
    </Card>
  );
}
