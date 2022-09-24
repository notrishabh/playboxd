export interface IGameList {
 count:          number;
 next:           string;
 previous:       null;
 results:        Game[];
 user_platforms: boolean;
}

export interface Game {
 added:              number;
 added_by_status:    AddedByStatus;
 background_image:   string;
 clip:               null;
 dominant_color:     Color;
 esrb_rating:        EsrbRating | null;
 genres:             Genre[];
 id:                 number;
 metacritic:         number;
 name:               string;
 parent_platforms:   Platform[];
 platforms:          Platform[];
 playtime:           number;
 rating:             number;
 rating_top:         number;
 ratings:            Rating[];
 ratings_count:      number;
 released:           Date;
 reviews_count:      number;
 reviews_text_count: number;
 saturated_color:    Color;
 score:              null;
 short_screenshots:  ShortScreenshot[];
 slug:               string;
 stores:             Store[];
 suggestions_count:  number;
 tags:               Tag[];
 tba:                boolean;
 updated:            Date;
 user_game:          null;
}

export interface AddedByStatus {
 beaten:  number;
 dropped: number;
 owned:   number;
 playing: number;
 toplay:  number;
 yet:     number;
}

export enum Color {
 The0F0F0F = "0f0f0f",
}

export interface EsrbRating {
 id:      number;
 name:    Name;
 name_en: Name;
 name_ru: NameRu;
 slug:    Slug;
}

export enum Name {
 AdultsOnly = "Adults Only",
 Mature = "Mature",
 Teen = "Teen",
}

export enum NameRu {
 С13Лет = "С 13 лет",
 С17Лет = "С 17 лет",
 ТолькоДляВзрослых = "Только для взрослых",
}

export enum Slug {
 AdultsOnly = "adults-only",
 Mature = "mature",
 Teen = "teen",
}

export interface Genre {
 id:   number;
 name: string;
 slug: string;
}

export interface Platform {
 platform: Genre;
}

export interface Rating {
 count:   number;
 id:      number;
 percent: number;
 title:   Title;
}

export enum Title {
 Exceptional = "exceptional",
 Meh = "meh",
 Recommended = "recommended",
 Skip = "skip",
}

export interface ShortScreenshot {
 id:    number;
 image: string;
}

export interface Store {
 store: Genre;
}

export interface Tag {
 games_count:      number;
 id:               number;
 image_background: string;
 language:         Language;
 name:             string;
 slug:             string;
}

export enum Language {
 Eng = "eng",
 Rus = "rus",
}
