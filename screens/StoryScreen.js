import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import VerticleBlogCard from "../components/VerticleBlogCard";
import HorizontalBlogCard from "../components/HorizontalBlogCard";
import { Searchbar } from "react-native-paper";
import {
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Entypo from "react-native-vector-icons/Entypo";
import { colors } from "../constants/theme";
import { articles } from "../constants/articles";
import { useNavigation } from "@react-navigation/native";
import QuickSandBold from "../constants/QuickSandBold";
import QuickSandRegular from "../constants/QuickSandRegular";

const StoryScreen = () => {
  const navigation = useNavigation();
  const [article, setarticle] = useState("");
  const lapsList = articles.map((item) => {
    return (
      <HorizontalBlogCard
        key={item.index}
        imageURL={item.imageURL}
        writerImageURL={item.writerImageURL}
        title={item.title}
        time={item.time}
        writer={item.writer}
        content={item.content}
      />
    );
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Searchbar
            placeholder="Search"
            iconColor={colors.secondary}
            style={{
              marginHorizontal: 10,
              marginTop: 10,
              borderRadius: 10,
              width: 300,
            }}
            inputStyle={{ fontSize: 14 }}
            onChangeText={setarticle}
            value={article}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Add")}>
            <Entypo name="pencil" size={35} color={colors.secondary} />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'flex-start'}}>
          <QuickSandBold style={styles.text}>Popular Stories</QuickSandBold>
          <QuickSandRegular style={[styles.text,{color: colors.secondary, fontSize: 40}]}>
            |
          </QuickSandRegular>
        </View>
        <View style={{ flexDirection: "row" }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={articles}
            keyExtractor={(item) => item.index.toString()}
            renderItem={({ item }) => {
              return (
                <VerticleBlogCard
                  imageURL={item.imageURL}
                  writerImageURL={item.writerImageURL}
                  title={item.title}
                  time={item.time}
                  writer={item.writer}
                  content={item.content}
                />
              );
            }}
          />
        </View>
        <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'flex-start'}}>
          <QuickSandBold style={styles.text}>Recent Stories</QuickSandBold>
          <QuickSandRegular style={[styles.text,{color: colors.secondary, fontSize: 40}]}>
            |
          </QuickSandRegular>
        </View>
        <View>{lapsList}</View>
      </View>
    </ScrollView>
  );
};

export default StoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 30,
    marginBottom: 60,
    },
  text: {
    fontSize: 27,
    marginLeft: 12,
    marginTop: 30,
    // fontWeight: 'bold'
  },
  textDate: {
    color: colors.primary,
  },
});
