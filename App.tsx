import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Browse from "./screens/browse";
import GameScreen from "./screens/game";
import List from "./screens/list";

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export default function App() {
  const headerStyle = {
    backgroundColor: "#445566",
  };
  const headerTitleStyle = {
    color: "white",
    fontWeight: "bold"
  };
  const headerTintColor = "white";
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Browse"
            screenOptions={{
              headerStyle: headerStyle,
              headerTitleStyle: headerTitleStyle,
              headerTintColor: headerTintColor,
              headerShadowVisible: false
            }}
          >
            <Stack.Screen
              name="Browse"
              component={Browse}
              options={{
                title: "Browse",
              }}
            />
            <Stack.Screen
              name="List"
              component={List}
              options={{
                title: "List",
              }}
            />
            <Stack.Screen
              name="GameScreen"
              component={GameScreen}
              options={{
                title: "Game",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.Fragment>
  );
}
