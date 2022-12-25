import { useRoute } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import useGameList from "../../hooks/GameList";
import useGenreDetails from "../../hooks/GenreDetails";
import s from "../../styles/style";
import OneGame from "./OneGame";

const List = () => {
  const route = useRoute();
  const styles = StyleSheet.create({
    banner: {
      height: 125,
      width: "100%",
    },
  });
  const { id } = route.params;
  const { data, isLoading, isSuccess } = useGenreDetails(id);
  const {
    data: gameList,
    isLoading: gameLoading,
    isSuccess: gameSuccess,
  } = useGameList(id);
  return (
    <View style={s.mainContainer}>
      {isLoading && <Text style={s.heading}>Loading...</Text>}
      {isSuccess && (
        <View>
          <View>
            <Image
              style={styles.banner}
              source={{
                uri: data.image_background,
              }}
            />
          </View>
          <View style={s.container}>
            <Text style={s.text}>{data.name} Games</Text>
          </View>
        </View>
      )}
      {gameLoading && <Text style={s.heading}>Loading...</Text>}
      {gameSuccess && (
        <View>
          <FlatList
            data={gameList.results}
            renderItem={({ item }) => <OneGame data={item} />}
            getItemLayout={(data, index) => ({
              length: 100,
              offset: 100 * index,
              index,
            })}
            numColumns={4}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      )}
    </View>
  );
};
export default List;
