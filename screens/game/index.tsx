import { useRoute } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import useGameDetails from "../../hooks/GameDetails";
import s from "../../styles/style";

const GameScreen = () => {
  const route = useRoute();
  const { id } = route.params;
  const { data, isLoading, isSuccess } = useGameDetails(id);
  if (!isLoading) {
    console.log("game", data);
  }
  const screenWidth = Dimensions.get("window").width;
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 5,
      marginVertical: 3,
      flex: 1,
    },
    heading: {
      color: "white",
      fontSize: 12,
    },
    tinyLogo: {
      width: screenWidth,
      height: 200,
    },
  });

  return (
    <View style={s.mainContainer}>
      {isLoading && <Text style={s.heading}>Loading...</Text>}
      {isSuccess && (
        <View style={s.container}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: data.background_image,
            }}
          />
          <Text style={s.text}>{data.name}</Text>
        </View>
      )}
    </View>
  );
};
export default GameScreen;
