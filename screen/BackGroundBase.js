import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavBar from "../components/navBar/NavBar";
import EmptyComponent from "../components/emptyComponent/EmptyComponent";

const BackGroundBase = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.top}>
          <NavBar />
        </View>
        <View style={styles.bottom}>
          <EmptyComponent />
        </View>
      </View>
    </View>
  );
};

export default BackGroundBase;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "black",
  },
  wrapper: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  top: {},
  bottom: {},
});
