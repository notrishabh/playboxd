import { useQuery } from "react-query";
import apis from "../api/api";
import { IGameDetails } from "../Model/IGameDetails";

const fetchGameDetails = async (id : number) => {
  const { data } = await apis.getGameDetails(id);
  return data;
};

const useGameDetails = (id : number) => useQuery<IGameDetails>("games", () => fetchGameDetails(id));
export default useGameDetails;
