import { SearchInput as SInput } from './SearchInput.styled';

type Props = {
  value: string;
  onEnter: () => void;
  onChange: (value: string) => void;
};

export default function SearchInput({ value, onChange, onEnter }: Props) {
  return (
    <SInput
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onEnter();
        }
      }}
      placeholder="Search..."
    />
  );
}
