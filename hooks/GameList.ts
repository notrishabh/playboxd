import { useQuery } from "react-query";
import apis from "../api/api";

const fetchGameList = async (genreid ?: number) => {
  const { data } = await apis.getGameList(genreid);
  return data;
};

const useGameList = (genreId ?: number) => useQuery("games", () => fetchGameList(genreId));
export default useGameList;
