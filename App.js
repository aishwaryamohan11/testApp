import "setimmediate";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TypeInput from "./screen/TypeInput";
import { ToastProvider } from "react-native-toast-notifications";
import showCreateNotes from "./screen/ShowCreateNotes";
import FavScreen from "./screen/FavScreen";
import CreateNotes from "./screen/CreateNotes";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ToastProvider placement="top">
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={showCreateNotes}
            options={{ title: "Notes" }}
          />
          <Stack.Screen
            name="CreateNotes"
            component={TypeInput}
            options={{ title: "Add Note" }}
          />
          <Stack.Screen name="Favorites" component={FavScreen} />
          {/* <Stack.Screen
            name="CreateNotes"
            component={CreateNotes}
            options={{ title: "Add Note" }}
          /> */}
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
