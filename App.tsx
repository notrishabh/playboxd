import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Browse from "./screens/browse"

export default function App() {
  return (
    <View style={styles.container}>
      <Browse />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "black"
  },
});
