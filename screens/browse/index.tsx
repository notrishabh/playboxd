import React from "react";
import { View } from "react-native";
import useGenreList from "../../hooks/GenreList";
import usePlatformsList from "../../hooks/PlatformsList";
import s from '../../styles/style';
import StripList from "./StripList";

const Browse = () => {

  const {
    data: genreList,
    isLoading: genreLoading,
    isSuccess: genreSuccess,
  } = useGenreList();

  const {
    data: pfList,
    isLoading: pfLoading,
    isSuccess: pfSuccess,
  } = usePlatformsList();

  const browseByGenre = {
    heading: "BROWSE BY GENRE",
    data: genreList,
    isLoading: genreLoading,
    isSuccess: genreSuccess,
  };

  const browseByPlatform = {
    heading: "BROWSE BY PLATFORM",
    data: pfList,
    isLoading: pfLoading,
    isSuccess: pfSuccess,
  };

  return (
    <View style={s.mainContainer}>
      <View>
        <StripList props={browseByGenre} />
        <StripList props={browseByPlatform} />
      </View>
    </View>
  );
};

export default Browse;
