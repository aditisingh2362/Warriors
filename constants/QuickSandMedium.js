import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "@use-expo/font";

const QuickSandMedium = (props) => {
  const [loaded] = useFonts({
    "Quicksand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
  });
  if (!loaded) {
    return <Text>{props.children}</Text>;
  }
  return (
    <View>
      <Text style={[styles.defaultStyle, props.style]}>{props.children}</Text>
    </View>
  );
};

export default QuickSandMedium;

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: "Quicksand-Medium",
  },
});
