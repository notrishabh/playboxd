import axios from "axios";
import { IGame } from "../Model/IGame";
import { IGenre } from "../Model/IGenre";
import { IGenreList } from "../Model/IGenreList";
import { IPlatformsList } from "../Model/IPlatformsList";

const key = "30e3a4e4b6044ebc8df2e4b6542587b6";
const api = axios.create({
  baseURL: "https://api.rawg.io/api/",
});

type gameListParams = {
  genreId?: number
}


export const getGameList = (genreId ?:number) =>
  api.get(`/games`, { params: { key: key, genres: genreId } });
export const getGenreList = () =>
  api.get<IGenreList>(`/genres`, { params: { key: key } });
export const getPlatformsList = () =>
  api.get<IPlatformsList>(`/platforms`, {
    params: { key: key, page: 1, page_size: 20 },
  });
export const getGenreById = (id: number) =>
  api.get<IGenre>(`/genres/${id}`, { params: { key: key } });

const apis = {
  getGameList,
  getGenreList,
  getPlatformsList,
  getGenreById,
};

export default apis;
