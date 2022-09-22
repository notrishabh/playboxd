import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Result } from "../../Model/IGenreList";

const ListElement:React.FC<{data: Result}> = ({data}) => {
  const styles = StyleSheet.create({
    container: {
      marginRight: 20,
    },
    heading: {
      color: "white",
      fontSize: 12
    },
    tinyLogo: {
      width: 75,
      height: 100,
    },
  });
  return (
    <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: data.image_background,
          }}
        />
        <Text style={styles.heading}>{data.name}</Text>
    </View>
  );
};
export default ListElement;
