import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Card = ({ fav, item, index, del, toggleFavorite, deleteItem }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.left}>
          <View style={styles.leftTop}>
            <Text style={styles.title}>Title: {item?.title}</Text>
          </View>
          <View style={styles.leftBottom}>
            <Text style={styles.notes}>Notes: {item?.notes}</Text>
          </View>
        </View>
        <View style={styles.right}>
          <View style={styles.fav}>
            <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
              <Text
                style={{
                  color: item.favorite ? "black" : "rgba(217, 217, 217, 1)",
                }}
              >
                {item.favorite ? (
                  <MaterialIcons name="favorite" size={30} color="black" />
                ) : (
                  <MaterialIcons
                    name="favorite-border"
                    size={30}
                    color="black"
                  />
                )}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.fav}>
            <MaterialIcons
              // style={styles.icon}
              name="delete"
              size={30}
              color="black"
              onPress={() => deleteItem(index)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "rgba(217, 217, 217, 1)",
    // backgroundColor: "white",
    width: 340,
    borderRadius: 20,
    marginTop: 10,
  },
  wrapper: {
    height: "fit-content",
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
  left: {
    rowGap: 20,
  },

  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  notes: {
    fontWeight: "bold",
    fontSize: 20,
  },
  right: {
    flexDirection: "row",
    columnGap: 15,
  },
  icon: {
    boxShadow: "2px 2px 2px 2px rgba(217, 217, 217, 0.55)",
  },
});
