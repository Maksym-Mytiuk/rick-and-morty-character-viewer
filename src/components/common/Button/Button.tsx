import { ReactNode } from 'react';
import { Button as Btn } from './Button.styled';

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export default function Button({ children, onClick }: Props) {
  return <Btn onClick={onClick}>{children}</Btn>;
}
