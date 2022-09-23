import { useQuery } from "react-query";
import apis from "../api/api";
import { IGenre } from "../Model/IGenre";

const fetchGenreDetails = async (id:number) => {
  const { data } = await apis.getGenreById(id);
  return data;
};

const useGenreDetails = (id:number) => useQuery<IGenre>("genreDetails", () => fetchGenreDetails(id));
export default useGenreDetails;
