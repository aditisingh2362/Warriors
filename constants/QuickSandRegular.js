import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "@use-expo/font";

const QuickSandRegular = (props) => {
  const [loaded] = useFonts({
    "Quicksand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
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

export default QuickSandRegular;

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: "Quicksand-Regular",
  },
});
