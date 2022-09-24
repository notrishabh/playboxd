import axios from "axios";
import { IGameList } from "../Model/IGameList";
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


export const getGameList = async (genreId ?:number) =>
  await api.get<IGameList>(`/games`, { params: { key: key, genres: genreId, page_size: 100 } });

export const getGenreList = async () =>
  await api.get<IGenreList>(`/genres`, { params: { key: key } });

export const getPlatformsList = async () =>
  await api.get<IPlatformsList>(`/platforms`, {
    params: { key: key, page: 1, page_size: 20 },
  });

export const getGenreById = async (id: number) =>
  await api.get<IGenre>(`/genres/${id}`, { params: { key: key } });

const apis = {
  getGameList,
  getGenreList,
  getPlatformsList,
  getGenreById,
};

export default apis;
