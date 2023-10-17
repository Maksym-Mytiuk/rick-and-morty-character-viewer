export interface EpisodeDTO {
  info: EpisodeInfo;
  results: Episode[];
}

export interface EpisodeInfo {
  count: number;
  pages: number;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
