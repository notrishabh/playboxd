import { useQuery } from "react-query";
import apis from "../api/api";
import { IGameList } from "../Model/IGameList";

const fetchGameList = async (genreid ?: number) => {
  const { data } = await apis.getGameList(genreid);
  return data;
};

const useGameList = (genreId ?: number) => useQuery<IGameList>("games", () => fetchGameList(genreId));
export default useGameList;
