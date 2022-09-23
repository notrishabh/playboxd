import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import useGenreList from "../../hooks/GenreList";
import s from "../../styles/style";
import ListElement from "./ListElement";

type props = {
  heading: string;
  data?: any;
  isLoading?: boolean;
  isSuccess?: boolean;
};

const StripList: React.FC<{ props: props }> = ({ props }) => {
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      marginTop: 20,
    },
    heading: {
      marginBottom: 10,
      fontSize: 10,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={[s.heading, styles.heading]}>{props.heading}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {props.isLoading && <Text style={styles.heading}>Loading...</Text>}
        {props.isSuccess &&
          props.data?.results.map((d: any) => (
            <ListElement data={d} key={d.id} />
          ))}
      </ScrollView>
    </View>
  );
};
export default StripList;
