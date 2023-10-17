import { ReactNode } from 'react';

import Text from '@/components/common/Text';
import Button from '@/components/common/Button/Button';
import { CardWrapper, CardCaption, CardHoverCaption } from './Card.styled';

type Props = {
  id: number;
  title: string;
  handleClick: (...args: any) => void;
  image?: string;
  children: ReactNode;
};

export default function Card({ children, id, image, title, handleClick }: Props) {
  return (
    <CardWrapper onClick={() => handleClick(id)}>
      {image && <img width={300} height={300} src={image} alt={title} />}
      <CardCaption>
        <Text tag="h3">{title}</Text>
        {children}
      </CardCaption>
      <CardHoverCaption className="hover-caption">
        <Button>More details</Button>
      </CardHoverCaption>
    </CardWrapper>
  );
}
