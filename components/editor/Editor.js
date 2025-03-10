import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function Editor() {
  const navigation = useNavigation();

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  // Save inputs to AsyncStorage
  const saveToStorage = async () => {
    if (input1.trim() === "" || input2.trim() === "") {
      Alert.alert("Error", "Both fields are required!");
      return;
    }

    try {
      const existingData = await AsyncStorage.getItem("savedInputs");

      let storedArray = existingData ? JSON.parse(existingData) : [];

      if (!Array.isArray(storedArray)) {
        storedArray = [];
      }

      const newEntry = { input1, input2 };
      storedArray.push(newEntry);

      await AsyncStorage.setItem("savedInputs", JSON.stringify(storedArray));

      navigation.navigate("Home");

      setInput1("");
      setInput2("");
    } catch (error) {
      console.error("Error saving data", error);
    }
  };

  return (
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
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
});
