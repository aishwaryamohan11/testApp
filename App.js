import "setimmediate";
import { StyleSheet, Text, View } from "react-native";
import EmptyNotes from "./screen/EmptyNotes";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BackGroundBase from "./screen/BackGroundBase";
import TypeInput from "./screen/TypeInput";
import { ToastProvider } from "react-native-toast-notifications";
import showCreateNotes from "./screen/ShowCreateNotes";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ToastProvider  placement="top">
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={showCreateNotes} />
          <Stack.Screen name="Input" component={TypeInput} />
        </Stack.Navigator>
      </NavigationContainer>
    </ToastProvider>
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
