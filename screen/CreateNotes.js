import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CreateNotes = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");

  const saveInput = async () => {
    if (!title.trim() || !notes.trim()) {
      Alert.alert("Error", "Both fields are required!");
      return;
    }

    try {
      const newNote = {
        id: Date.now(), // Unique ID
        title,
        notes,
        favorite: false, // Default is not favorite
      };

      const existingNotes = await AsyncStorage.getItem("savedNotes");
      const updatedNotes = existingNotes ? JSON.parse(existingNotes) : [];

      updatedNotes.push(newNote);
      await AsyncStorage.setItem("savedNotes", JSON.stringify(updatedNotes));

      setTitle("");
      setNotes("");

      navigation.goBack();
    } catch (error) {
      console.error("Error saving note", error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Enter Title" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Enter Notes" value={notes} onChangeText={setNotes} multiline />
      <Button title="Save Note" onPress={saveInput} />
    </View>
  );
};

export default CreateNotes;
