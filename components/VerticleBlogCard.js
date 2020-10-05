import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  TouchableOpacityBase,
} from "react-native";
import { colors } from "../constants/theme";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import QuickSandRegular from "../constants/QuickSandRegular";
import QuickSandSemiBold from "../constants/QuickSandSemiBold";

const VerticleBlogCard = ({
  imageURL,
  writerImageURL,
  title,
  time,
  writer,
  content,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Details", {
          imageURL,
          writerImageURL,
          title,
          time,
          writer,
          content,
        })
      }
    >
      <View>
        <ImageBackground
          source={{ uri: imageURL.toString() }}
          style={styles.container}
          imageStyle={{ borderRadius: 15 }}
        >
          <View style={styles.blur}>
            <View style={{ marginLeft: 15, marginBottom: 2 }}>
              <QuickSandSemiBold style={styles.textTitle}>
                {title}
              </QuickSandSemiBold>
              <View
                style={{
                  borderBottomColor: colors.tertiary,
                  borderBottomWidth: 1,
                  width: 100,
                  marginVertical: 10,
                  borderRadius: 10,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{ uri: writerImageURL.toString() }}
                  style={styles.imageWriter}
                />
                <QuickSandRegular style={styles.textWriter}>
                  {writer}
                </QuickSandRegular>
                <QuickSandRegular style={styles.textDate}>
                  <Entypo name="time-slot" size={9} color={colors.secondary} />{" "}
                  {time}
                </QuickSandRegular>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default VerticleBlogCard;

const styles = StyleSheet.create({
  container: {
    height: 340,
    width: 280,
    borderRadius: 10,
    elevation: 10,
    margin: 6,
  },
  blur: {
    flex: 1,
    borderRadius: 15,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0, 0.6 )",
  },
  textTitle: {
    color: colors.white,
    fontSize: 25,
  },
  textWriter: {
    color: colors.white,
    fontSize: 14,
  },
  textDate: {
    right: 0,
    color: colors.white,
    marginLeft: "auto",
    padding: 10,
    fontSize: 12,
  },
  imageWriter: {
    padding: 10,
    margin: 5,
    height: 38,
    width: 38,
    alignItems: "center",
    borderRadius: 25,
  },
});
