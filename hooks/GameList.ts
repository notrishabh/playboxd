import { useQuery } from "react-query";
import apis from "../api/api";

const fetchGameList = async () => {
  const { data } = await apis.getGameList();
  return data;
};

const useGameList = () => useQuery("games", fetchGameList);
export default useGameList;
