import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../constants/theme";
import { ProgressBar } from "react-native-paper";
import Entypo from "react-native-vector-icons/Entypo";
import QuickSandBold from "../constants/QuickSandBold";
import QuickSandRegular from "../constants/QuickSandRegular";
import QuickSandLight from "../constants/QuickSandLight";
import QuickSandSemiBold from "../constants/QuickSandSemiBold";

const LifestyleCard = (props) => {
  return (
    <View style={[styles.container, { backgroundColor: props.bgcolor }]}>
      <View style={{ marginVertical: 10, marginLeft: 5 }}>
        <Entypo name={props.icon} size={20} color={colors.tertiary} />
      </View>
      <View style={{ marginVertical: 10, marginLeft: 5 }}>
        <QuickSandBold style={{ fontSize: 18 }}>{props.cardName}</QuickSandBold>
      </View>
      <View style={{ marginVertical: 10, marginLeft: 5 }}>
        <QuickSandSemiBold>
          {props.numerator} / {props.denominator}{" "}
        </QuickSandSemiBold>
        <QuickSandRegular>{props.unit}</QuickSandRegular>
      </View>
      <View style={{ margin: 10, paddingBottom: 10 }}>
        <ProgressBar
          progress={0.2}
          color={colors.tertiary}
          style={{ borderRadius: 4, height: 8 }}
        />
      </View>
      <View
        style={{
          marginVertical: 10,
          marginLeft: 5,
          position: "absolute",
          bottom: 0,
        }}
      >
        <QuickSandLight style={{ fontSize: 15, color: colors.black }}>
          {props.text}
        </QuickSandLight>
      </View>
    </View>
  );
};

export default LifestyleCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 10,
    borderRadius: 10,
    margin: 6,
    paddingLeft: 3,
  },
});
