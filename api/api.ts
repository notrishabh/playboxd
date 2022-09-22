import axios from "axios";
import { IGenreList } from "../Model/IGenreList";
import { IPlatformsList } from "../Model/IPlatformsList";

const key = "30e3a4e4b6044ebc8df2e4b6542587b6";
const api = axios.create({
  baseURL: "https://api.rawg.io/api/",
});

export const getGameList = () => api.get(`/games`, { params: { key: key } });
export const getGenreList = () => api.get<IGenreList>(`/genres`, { params: { key: key } });
export const getPlatformsList = () => api.get<IPlatformsList>(`/platforms`, { params: { key: key, page: 1, page_size: 20 } });

const apis = {
  getGameList,
  getGenreList,
  getPlatformsList
};

export default apis;
