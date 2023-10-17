import { Episode as IEpisode } from '@/interfaces/episode';

import Text from '@/components/common/Text';
import Card from '@/components/common/Card/Card';

type Props = {
  episode: IEpisode;
};

export default function Episode({ episode }: Props) {
  return (
    <Card id={episode.id} title={episode.name} handleClick={() => alert('More details soon...')}>
      <Text>
        <Text tag="span">Episode: </Text>
        {episode.episode}
      </Text>
      <Text>
        <Text tag="span">Released: </Text>
        {episode.air_date}
      </Text>
    </Card>
  );
}
