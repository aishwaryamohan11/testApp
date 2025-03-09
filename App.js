import "setimmediate";
import { StyleSheet, Text, View } from "react-native";
import EmptyNotes from "./screen/EmptyNotes";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BackGroundBase from "./screen/BackGroundBase";
import TypeInput from "./screen/TypeInput";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={BackGroundBase} />
        <Stack.Screen name="Input" component={TypeInput} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
