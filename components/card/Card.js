import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Card = ({ item,deleteItem,index }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.left}>
          <View style={styles.leftTop}>
            <Text style={styles.title}>Title:{item?.input1}</Text>
          </View>
          <View style={styles.leftBottom}>
            <Text style={styles.notes}>Notes: {item?.input2}</Text>
          </View>
        </View>
        <View style={styles.right}>
          <MaterialIcons
            name="favorite"
            size={40}
            color="black"
            style={styles.icon}
            // onPress={handleGoToAdd}
          />{" "}
          <MaterialIcons
            name="delete"
            size={40}
            color="black"
            style={styles.icon}
            onPress={() => deleteItem(index)}
          />{" "}
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
    width: 340,
    borderRadius: 20,
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
  wrapper: {
    height: 90,
    // padding: 20,
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
  left: {
    rowGap: 20,
  },

  title: {
    fontWeight: 400,
    fontSize: 24,
  },
  notes: {
    fontWeight: 400,
    fontSize: 24,
  },
  right: {
    // flex:1,
  },
  icon: {
    width: 39,
    height: 35,
  },
});
