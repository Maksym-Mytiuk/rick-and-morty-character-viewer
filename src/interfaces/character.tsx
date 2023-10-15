export interface CharacterDTO {
  info: CharacterInfo;
  results: Character[];
}

export interface CharacterInfo {
  count: number;
  next: number;
  pages: number;
  prev: boolean | null;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
