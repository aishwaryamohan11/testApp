import React from "react";
import TextEditor from "../components/textEditor/TextEditor";
import { View, StyleSheet } from "react-native";
import NavBar from "../components/navBar/NavBar";

const TypeInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.top}>
          <NavBar />
        </View>
        <View style={styles.bottom}>
          <TextEditor />
        </View>
      </View>
    </View>
  );
};

export default TypeInput;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "black",
  },
  wrapper: {
    height: "100%",
  },
  top: {},
  bottom: {},
});
