import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import logo from "../../assets/notesslogo.png";
import { MaterialIcons } from "@expo/vector-icons";

const NavBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.top}>
          <Image source={logo} alt="logo" style={styles.logo} />
        </View>
        <View style={styles.bottom}>
          <View style={styles.icon}>
            {" "}
            <MaterialIcons name="favorite" size={30} color="white" />{" "}
          </View>
          <View style={styles.icon}>
            {" "}
            <MaterialIcons name="search" size={30} color="white" />{" "}
          </View>
        </View>
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    height: "80",
    display: "flex",
 
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    marginHorizontal: 15,
  },
  logo: {
    paddingBottom: 20,
    backgroundColor:"black"
  },
  bottom: {
    backgroundColor:"black",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginTop:20
  },
});
