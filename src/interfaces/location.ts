export interface LocationDTO {
  info: LocationInfo;
  results: Location[];
}

export interface LocationInfo {
  count: number;
  pages: number;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}
