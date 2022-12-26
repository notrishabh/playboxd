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
    banner: {
      alignSelf: "stretch",
      height: 200,
    },
    mainInfo: {
      display: "flex",
      flexDirection: "row",
      margin: 10,
    },
    info: {
      marginRight: 10,
      flex: 2,
    },
    thumbnail: {
      width: 100,
      height: 150,
    },
    dateLine: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
    },
    publishedBy: {
      marginTop: 2,
      fontWeight: "bold",
    },
    descriptionContainer: {
      margin: 10,
    },
  });

  return (
    <View style={s.mainContainer}>
      {isLoading && <Text style={s.heading}>Loading...</Text>}
      {isSuccess && (
        <View style={s.container}>
          <Image
            style={styles.banner}
            source={{
              uri: data.background_image_additional
                ? data.background_image_additional
                : data.background_image,
            }}
          />
          <View style={styles.mainInfo}>
            <View style={styles.info}>
              <Text style={s.bigheading}>{data.name}</Text>
              <Text style={s.subTextGrey}>
                {data.released} &#x2022; PUBLISHED BY
              </Text>
              <Text style={[s.subTextGrey, styles.publishedBy]}>
                {data.publishers ? data.publishers[0].name : "Unknown"}
              </Text>
            </View>
            <View>
              <Image
                style={styles.thumbnail}
                source={{
                  uri: data.background_image,
                }}
              />
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text numberOfLines={3} style={s.subTextGrey}>
              {data.description_raw}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};
export default GameScreen;
