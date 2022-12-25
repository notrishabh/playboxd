import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Game } from "../../Model/IGameList";

const OneGame: React.FC<{ data: Game }> = ({ data }) => {
  const navigation = useNavigation();
  const size = Dimensions.get("window").width / 4;
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
      width: size - 0.25 * size,
      height: size,
    },
  });
  const navigateToGame = () => {
    console.log("onegame", data);
    navigation.navigate("GameScreen", {
      id: data.id,
    });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={navigateToGame}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: data.background_image,
        }}
      />
    </TouchableOpacity>
  );
};
export default OneGame;
