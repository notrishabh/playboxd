import { useQuery } from "react-query";
import apis from "../api/api";
import { IGenreList } from "../Model/IGenreList";

const fetchGenreList = async () => {
  const { data } = await apis.getGenreList();
  return data;
};

const useGenreList = () => useQuery<IGenreList>("genre", fetchGenreList);
export default useGenreList;
