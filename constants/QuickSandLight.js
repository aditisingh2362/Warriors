import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "@use-expo/font";

const QuickSandLight = (props) => {
  const [loaded] = useFonts({
    "Quicksand-Light": require("../assets/fonts/Quicksand-Light.ttf"),
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

export default QuickSandLight;

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: "Quicksand-Light",
  },
});
