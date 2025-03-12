import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import NavBar from "../components/navBar/NavBar";
import Card from "../components/card/Card";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ShowCreateNotes = () => {
  const navigation = useNavigation();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", fetchNotes);
    return unsubscribe;
  }, [navigation]);

  const fetchNotes = async () => {
    try {
      const savedNotes = await AsyncStorage.getItem("savedNotes");
      if (savedNotes) {
        setNotes(JSON.parse(savedNotes));
      }
    } catch (error) {
      console.error("Error loading notes", error);
    }
  };

  const toggleFavorite = async (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, favorite: !note.favorite } : note
    );
    setNotes(updatedNotes);
    await AsyncStorage.setItem("savedNotes", JSON.stringify(updatedNotes));
  };
  const deleteItem = async (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    await AsyncStorage.setItem("savedNotes", JSON.stringify(updatedNotes));
  };

  const handleGoToAdd = () => {
    navigation?.navigate("CreateNotes");
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.wrapperTop}>
          <View style={styles.top}>
            <NavBar />
          </View>
          <View style={styles.bottom}>
            <FlatList
              data={notes}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View>
                  <Card
                    deleteItem={deleteItem}
                    item={item}
                    index={item?.id}
                    toggleFavorite={toggleFavorite}
                  />
                </View>
              )}
            />
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
    backgroundColor: "black",
  },
  wrapper: {},
  wrapperTop: {
    position: "relative",
  },
  top: {},
  bottom: {
    paddingBottom: 20,
    height: 640,
    alignItems: "center",
  },

  wrapperBottom: {
    position: "absolute",
    right: 15,
    top: 580,
  },
  icon: {
    borderRadius: 50,
    color: "black",
    padding: 15,
    backgroundColor: "white",
  },
  FlatList: {},
});
