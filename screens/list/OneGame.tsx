import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Result } from "../../Model/IGame";

const OneGame: React.FC<{ data: Result }> = ({ data }) => {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      marginRight: 20,
    },
    heading: {
      color: "white",
      fontSize: 12,
    },
    tinyLogo: {
      width: 75,
      height: 100,
    },
  });
  return (
    <TouchableOpacity
      style={styles.container}
    //   onPress={() => {
    //     navigation.navigate("List", {
    //       id: data.id,
    //     });
    //   }}
    >
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
