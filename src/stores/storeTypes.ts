export interface ISwapiResponse {
  swapiList: BodyRequest;
  setSwapiList: (swapiList: BodyRequest) => void;
}

export interface BodyRequest {
  requested: boolean;
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
}

export interface Result {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}
