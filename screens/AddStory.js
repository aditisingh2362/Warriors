import React, { useRef, useState } from "react";
import { StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import {
  actions,
  defaultActions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import Entypo from 'react-native-vector-icons/Entypo';
import { colors } from "../constants/theme";
import QuickSandBold from "../constants/QuickSandBold";

const AddStory = () => {
  const strikethrough = require("../assets/strikethrough.png"); //icon for strikethrough
  const video = require("../assets/video.png"); //icon for Addvideo
  const RichText = useRef(); //reference to the RichEditor component
  const [article, setArticle] = useState("");
  

  function onPressAddImage() {
    // you can easily add images from your gallery
    RichText.current?.insertImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png"
    );
  }

  function insertVideo() {
    // you can easily add videos from your gallery
    RichText.current?.insertVideo(
      "https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4"
    );
  }

  return (
    <ScrollView style={styles.container}>
      <QuickSandBold style={{fontSize: 21, marginVertical: 10, textAlign: 'center'}}>Share your Story</QuickSandBold>
      <RichEditor
        disabled={false}
        containerStyle={styles.editor}
        ref={RichText}
        style={styles.rich}
        placeholder={"Start Writing Here!"}
        onChange={(text) => setArticle(text)}
      />
      <RichToolbar
        style={[styles.richBar]}
        editor={RichText}
        disabled={false}
        iconTint={"purple"}
        selectedIconTint={"pink"}
        disabledIconTint={"purple"}
        onPressAddImage={onPressAddImage}
        iconSize={40}
        actions={[
          "insertVideo",
          ...defaultActions,
          actions.setStrikethrough,
          actions.heading1,
        ]}
        // map icons for self made actions
        iconMap={{
          [actions.heading1]: ({ tintColor }) => (
            <Text style={[styles.tib, { color: tintColor }]}>H1</Text>
          ),
          [actions.setStrikethrough]: strikethrough,
          ["insertVideo"]: video,
        }}
        insertVideo={insertVideo}
      />
      <TouchableOpacity style={{alignItems:'center', marginLeft: 70,width: 200,marginVertical: 10,borderWidth: 1, borderColor: "purple", borderRadius: 10, marginBottom: 10,backgroundColor: 'white', marginBottom: 30}} onPress={()=>console.log("")}>
        <QuickSandBold style={[styles.text]}>
            <Entypo name="check" size= {16} color="purple"/>  Publish Article
        </QuickSandBold>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddStory;

const styles = StyleSheet.create({
  /********************************/
  /* styles for html tags */
  a: {
    fontWeight: "bold",
    color: "purple",
  },
  div: {
    fontFamily: "monospace",
  },
  p: {
    fontSize: 30,
  },
  /*******************************/
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#F5FCFF",
  },
  editor: {
    backgroundColor: "black",
    borderColor: "pink",
    borderWidth: 0.8,
  },
  rich: {
    minHeight: 450,
    flex: 1,
  },
  richBar: {
    height: 50,
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 15,
    margin: 10,
    color: colors.black
  },
  tib: {
    textAlign: "center",
    color: "#515156",
  },
});
