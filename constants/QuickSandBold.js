import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "@use-expo/font";

const QuickSandBold = (props) => {
  const [loaded] = useFonts({
    "Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
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

export default QuickSandBold;

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: "Quicksand-Bold",
  },
});
