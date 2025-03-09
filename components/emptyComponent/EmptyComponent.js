import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const EmptyComponent = () => {
  const navigation = useNavigation();

  const handleGoToAdd = () => {
    navigation.navigate("Input");
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.top}>
          <Text
            style={{ fontFamily: "cursive", fontSize: 48, fontWeight: 400 }}
          >
            Empty notes
          </Text>
          <Text
            style={{ fontFamily: "cursive", fontSize: 48, fontWeight: 400 }}
          >
            Make a notes
          </Text>
        </View>
        <View style={styles.bottom}>
          <View style={styles.iconContainer}>
            <View style={styles.iconWrapper}>
              {" "}
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
      </View>
    </View>
  );
};

export default EmptyComponent;

const styles = StyleSheet.create({
  container: {
    color: "rgba(0, 0, 0, 1)",
    height: 440,
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderTopLeftRadius: 67,
    borderTopRightRadius: 67,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    padding: 50,
  },
  top: {
    display: "flex",

    rowGap: 43,
    justifyContent: "center",
    alignItems: "center",
  },
  //   title: {
  //     fontWeight: 400,
  //     fontSize: 48,
  //   },
  bottom: {
    display: "flex",

    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  iconWrapper: {},

  icon: {
    borderRadius: 50,
    color: "white",
    padding: 15,
    backgroundColor: "black",
  },
});
