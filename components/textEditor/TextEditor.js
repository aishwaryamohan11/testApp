import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useToast } from "react-native-toast-notifications";

const TextEditor = ({ navigation }) => {
  const [input1, setInput1] = useState([]);
  const [input2, setInput2] = useState([]);

  // Save inputs to AsyncStorage
  const saveToStorage = async () => {
    if (input1.trim() === "" || input2.trim() === "") {
      Alert.alert("Error", "Both fields are required!");
      return;
    }

    try {
      // Get existing stored data
      const existingData = await AsyncStorage.getItem("savedInputs");
      let storedArray = existingData ? JSON.parse(existingData) : [];

      // Add new input
      const newEntry = { input1, input2 };
      storedArray.push(newEntry);

      // Save updated data
      await AsyncStorage.setItem("savedInputs", JSON.stringify(storedArray));

      // Navigate to ScreenB
      navigation.navigate("createNotes");

      // Clear input fields
      setInput1("");
      setInput2("");
    } catch (error) {
      console.error("Error saving data", error);
    }
  };
  return (
    // <View style={styles.container}>
    //   <View style={styles.wrapper}>
    //     <View style={styles.top}>
    //       <Text style={styles.title}>Title:</Text>
    //       <TextInput
    //         placeholderTextColor={"white"}
    //         placeholder="Enter first text"
    //         value={input1}
    //         onChangeText={setInput1}
    //         style={styles.textEditor}
    //       />
    //     </View>
    //     <View style={styles.middle}>
    //       <Text style={styles.title}>Notes:</Text>

    //       {/* <TextInput
    //         style={styles.textEditor}
    //         multiline
    //         placeholder="Type your notes here..."
    //         value={input2}
    //         onChangeText={setInput2}
    //         placeholderTextColor={"white"}
    //       /> */}
    //       <TextInput
    //         placeholderTextColor={"white"}
    //         placeholder="Enter second text"
    //         value={input2}
    //         onChangeText={setInput2}
    //         style={styles.textEditor}
    //       />
    //     </View>
    //     <View style={styles.bottom}>
    //       {/* <Text>
    //         <TouchableOpacity style={styles.button} onPress={saveToStorage}>
    //           <Text style={styles.buttonText}>Save</Text>
    //         </TouchableOpacity>
    //       </Text>{" "} */}
    //       <Button title="Save & Go to Screen B" onPress={saveToStorage} />
    //     </View>
    //   </View>
    // </View>
    <View style={styles.container}>
      <TextInput
        placeholder="Enter first text"
        value={input1}
        onChangeText={setInput1}
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
      />

      <TextInput
        placeholder="Enter second text"
        value={input2}
        onChangeText={setInput2}
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
      />

      <Button title="Save & Go to Screen B" onPress={saveToStorage} />
    </View>
  );
};

export default TextEditor;
const styles = StyleSheet.create({
  container: {
    margin: 40,
    backgroundColor: "red",
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
