import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import useGenreList from "../../hooks/GenreList";
import ListElement from "./ListElement";

type props = {
  heading: string,
  data?: any,
  isLoading?: boolean,
  isSuccess?: boolean
}

const StripList:React.FC<{props: props}> = ({props}) => {
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      marginTop: 20
    },
    heading: {
      color: "#B8B8B8",
      marginBottom: 10,
      fontSize: 10
    },
  });
  const { data, isLoading, isSuccess } = useGenreList();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{props.heading}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {isLoading && <Text style={styles.heading}>Loading...</Text>}
        {isSuccess && props.data.results.map((d:any) => <ListElement data={d} key={d.id} />)}
      </ScrollView>
    </View>
  );
};
export default StripList;
