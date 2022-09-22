import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Topbar from "../../components/topbar";
import useGenreList from "../../hooks/GenreList";
import usePlatformsList from "../../hooks/PlatformsList";
import StripList from "./StripList";

const Browse = () => {
  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    heading: {
      color: "white",
    },
  });
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
    <View style={styles.container}>
      <Topbar heading="Browse" />
      <View>
        <StripList props={browseByGenre} />
        <StripList props={browseByPlatform} />
      </View>
    </View>
  );
};

export default Browse;
