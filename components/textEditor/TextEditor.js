import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { useToast } from "react-native-toast-notifications";
const TextEditor = () => {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  console.log("text", title);
  console.log("setNotes", setNotes);

  const toast = useToast();
  const navigation = useNavigation();
  const handleMove = (passTitle, passNotes) => {
    toast.show("Saved successfully👏");
    navigation?.navigate("createNotes", { passTitle, passNotes });
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.top}>
          <Text style={styles.title}>Title:</Text>
          <TextInput
            placeholder="Type title here.."
            placeholderTextColor={"white"}
            style={styles.textTitle}
            value={title}
            onChangeText={setTitle}
          />
        </View>
        <View style={styles.middle}>
          <Text style={styles.title}>Notes:</Text>

          <TextInput
            style={styles.textEditor}
            multiline
            placeholder="Type your notes here..."
            value={notes}
            onChangeText={setNotes}
            placeholderTextColor={"white"}
          />
        </View>
        <View style={styles.bottom}>
          <Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleMove(title, notes)}
            >
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </Text>{" "}
        </View>
      </View>
    </View>
  );
};

export default TextEditor;
const styles = StyleSheet.create({
  container: {
    margin: 40,
  },
  wrapper: {
    rowGap: 50,
  },
  title: {
    color: "white",
    fontSize: 32,
    fontFamily: "cursive",
  },
  textTitle: {
    color: "white",
    fontFamily: "cursive",
    fontSize: 20,
    letterSpacing: 2,
  },
  textEditor: {
    color: "white",
    fontSize: 20,
    textAlignVertical: "top",
    fontFamily: "cursive",
    letterSpacing: 2,
  },
  bottom: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    width: 229,
    height: 59,
    borderRadius: 25,
    backgroundColor: "rgba(217, 217, 217, 1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "cursive",
  },
});
