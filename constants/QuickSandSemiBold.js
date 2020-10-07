import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "@use-expo/font";

const QuickSandSemiBold = (props) => {
  const [loaded] = useFonts({
    "Quicksand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
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

export default QuickSandSemiBold;

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: "Quicksand-SemiBold",
  },
});
