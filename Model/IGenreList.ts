export interface IGenreList {
 count:    number;
 next:     null;
 previous: null;
 results:  Result[];
}

export interface Result {
 games:            Game[];
 games_count:      number;
 id:               number;
 image_background: string;
 name:             string;
 slug:             string;
}

export interface Game {
 added: number;
 id:    number;
 name:  string;
 slug:  string;
}
