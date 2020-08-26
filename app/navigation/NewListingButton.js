import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NewListingButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={40}
          color={colors.white}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 35,
    bottom: 25,
    borderColor: colors.white,
    borderWidth: 10,
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NewListingButton;
