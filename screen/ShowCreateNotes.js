import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import NavBar from "../components/navBar/NavBar";
import Card from "../components/card/Card";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ShowCreateNotes = () => {
  const navigation = useNavigation();

  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    loadStoredValues();
  }, []);

  const loadStoredValues = async () => {
    try {
      const storedValues = await AsyncStorage.getItem("savedInputs");
      if (storedValues) {
        setStoredData(JSON.parse(storedValues));
      }
    } catch (error) {
      console.error("Error loading data", error);
    }
  };

  const deleteItem = async (index) => {
    try {
      let updatedData = [...storedData]; // Copy array
      updatedData.splice(index, 1); // Remove item

      await AsyncStorage.setItem("savedInputs", JSON.stringify(updatedData)); // Save updated list
      setStoredData(updatedData); // Update state
    } catch (error) {
      console.error("Error deleting item", error);
    }
  };
  const handleGoToAdd = () => {
    navigation.navigate("Input");
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
              style={styles.FlatList}
              data={storedData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View>
                  {/* <View style={{ marginTop: 10}}> */}
                  <Card item={item} deleteItem={deleteItem} index={index} />
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
    flex: 1,

    // display: "flex",
    // justifyContent: "center",
  },
  wrapper: {
    height: "100%",
  },
  wrapperTop: {
    // rowGap: 20,
    position: "relative",
  },
  top: {
    flex: 0.15,
    backgroundColor: "aqua",
  },
  bottom: {
    backgroundColor: "red",
    flex: 1,

    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
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
