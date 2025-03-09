import React from "react";
import { View, StyleSheet, Text } from "react-native";
import NavBar from "../components/navBar/NavBar";
import Card from "../components/card/Card";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const ShowCreateNotes = () => {
  const router = useRoute();
  const showTitle = router?.params?.passTitle;
  const showNotes = router?.params?.passNotes;
  console.log("showTitle", showTitle);
  console.log("showNotes", showNotes);
  const navigation = useNavigation();

  const handleGoToAdd = () => {
    navigation.navigate("Input");
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.wrapperTop}>
          <View style={styles.top}>
            <NavBar />
          </View>
          <View style={styles.bottom}>
            <Text>
              
              <Card showTitle={showTitle} showNotes={showNotes} />
            </Text>{" "}
          </View>
        </View>
        <View style={styles.wrapperBottom}>
          <MaterialIcons
            name="add"
            size={40}
            color="black"
            style={styles.icon}
            onPress={handleGoToAdd}
          />{" "}
        </View>
      </View>
    </View>
  );
};

export default ShowCreateNotes;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "black",
    flex: 1,
  },
  wrapper: {
    height: "100%",
  },
  bottom: {
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperTop: {
    // backgroundColor: "aqua",
    rowGap: 40,
    flex: 1,
  },
  wrapperBottom: {
    // backgroundColor: "blue",
    flex: 2,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingBottom: 80,
    paddingRight: 30,
  },
  icon: {
    borderRadius: 50,
    color: "black",
    padding: 15,
    backgroundColor: "rgba(217, 217, 217, 1)",
  },
});
