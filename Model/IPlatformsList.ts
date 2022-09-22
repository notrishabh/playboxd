export interface IPlatformsList {
 count:    number;
 next:     string;
 previous: null;
 results:  Result[];
}

export interface Result {
 games:            Game[];
 games_count:      number;
 id:               number;
 image:            null;
 image_background: string;
 name:             string;
 slug:             string;
 year_end:         null;
 year_start:       number | null;
}

export interface Game {
 added: number;
 id:    number;
 name:  string;
 slug:  string;
}
