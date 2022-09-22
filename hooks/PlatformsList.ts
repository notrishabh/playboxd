import { useQuery } from "react-query";
import apis from "../api/api";
import { IPlatformsList } from "../Model/IPlatformsList";

const fetchPlatformsList = async () => {
  const { data } = await apis.getPlatformsList();
  return data;
};

const usePlatformsList = () => useQuery<IPlatformsList>("platforms", fetchPlatformsList);
export default usePlatformsList;
