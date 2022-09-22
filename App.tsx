import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Browse from "./screens/browse";

const queryClient = new QueryClient();

export default function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <View style={styles.container}>
          <Browse />
          <StatusBar style="auto" />
        </View>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "black",
  },
});
