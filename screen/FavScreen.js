import React, { useEffect, useState } from "react";
import NavBar from "../components/navBar/NavBar";
import { View, StyleSheet, FlatList, Alert } from "react-native";
import Card from "../components/card/Card";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
// import Toast from "react-native-toast-message";
// import { useToast } from "react-native-toast-notifications";
const FavScreen = () => {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState([]);
  // const toast = useToast();
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", fetchFavorites);
    return unsubscribe;
  }, [navigation]);

  const fetchFavorites = async () => {
    try {
      const savedNotes = await AsyncStorage.getItem("savedNotes");
      if (savedNotes) {
        const allNotes = JSON.parse(savedNotes);
        const favNotes = allNotes.filter((note) => note.favorite);
        setFavorites(favNotes);
      }
    } catch (error) {
      console.error("Error loading favorites", error);
    }
  };

  const toggleFavorite = async (id) => {
    try {
      const savedNotes = await AsyncStorage.getItem("savedNotes");
      if (savedNotes) {
        let allNotes = JSON.parse(savedNotes);
        allNotes = allNotes.map((note) =>
          note.id === id ? { ...note, favorite: !note.favorite } : note
        );

        await AsyncStorage.setItem("savedNotes", JSON.stringify(allNotes));
        fetchFavorites(); // Refresh favorites after update
      }
    } catch (error) {
      console.error("Error updating favorite", error);
    }
  };

  const deleteItem = async (id) => {
    try {
      Alert.alert("Delete Note", "Are you sure you want to delete this note?", [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: async () => {
            const savedNotes = await AsyncStorage.getItem("savedNotes");
            if (savedNotes) {
              let allNotes = JSON.parse(savedNotes);
              allNotes = allNotes.filter((note) => note.id !== id);

              await AsyncStorage.setItem(
                "savedNotes",
                JSON.stringify(allNotes)
              );
              fetchFavorites(); // Refresh favorites after deletion
            }
          },
        },
      ]);
    } catch (error) {
      console.error("Error deleting item", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.top}>
          <NavBar />
        </View>
        <View style={styles.bottom}>
          <FlatList
            data={favorites}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Card
                item={item}
                index={item.id}
                toggleFavorite={toggleFavorite}
                deleteItem={deleteItem}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default FavScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "black",
  },
  wrapper: {
    height: "100%",
  },

  bottom: {
    alignItems: "center",
    justifyContent: "center",
  },
});
