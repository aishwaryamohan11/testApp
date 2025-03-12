import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import logo from "../../assets/notesslogo.png";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NavBar = () => {
  const navigation = useNavigation();
  const MoveToFav = () => {
    navigation.navigate("Favorites");
  };
  const MoveToHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.left}>
          <TouchableOpacity onPress={MoveToHome} activeOpacity={1}>
            <Image
              source={logo}
              alt="logo"
              style={styles.logo}
              onPress={MoveToHome}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.right}>
          <View style={styles.icon}>
            {" "}
            <MaterialIcons
              name="favorite"
              size={30}
              color="white"
              onPress={MoveToFav}
            />{" "}
          </View>
          {/* <View style={styles.icon}>
            {" "}
            <MaterialIcons name="search" size={30} color="white" />{" "}
          </View> */}
        </View>
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    paddingBottom: 16,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  left: {
    // backgroundColor: "aqua",
  },
  logo: {
    height: 80,
    width: 250,
  },
  right: {
    backgroundColor: "black",

    flexDirection: "row",

    gap: 20,
    marginTop: 20,
  },
});
