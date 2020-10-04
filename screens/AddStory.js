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

const AddStory = () => {
  const strikethrough = require("../assets/strikethrough.png"); //icon for strikethrough
  const video = require("../assets/video.png"); //icon for Addvideo
  const RichText = useRef(); //reference to the RichEditor component
  const [article, setArticle] = useState("");

  // this function will be called when the editor has been initialized
  function editorInitializedCallback() {
    // RichText.current?.registerToolbar(function (items) {
    //   // items contain all the actions that are currently active
    //   console.log(
    //     "Toolbar click, selected items (insert end callback):",
    //     items
    //   );
    // });
  }

  // Callback after height change
  function handleHeightChange(height) {
    // console.log("editor height change:", height);
  }

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
      
      <RichEditor
        disabled={false}
        containerStyle={styles.editor}
        ref={RichText}
        style={styles.rich}
        placeholder={"Title"}
        onChange={(text) => setArticle(text)}
        editorInitializedCallback={editorInitializedCallback}
        onHeightChange={handleHeightChange}
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
      <TouchableOpacity style={{alignItems:'center', borderWidth: 1, borderColor: "purple", borderRadius: 10, marginBottom: 10}} onPress={()=>console.log("")}>
        <Text style={[styles.text]}>
            <Entypo name="check" size= {16} color="purple"/>  Publish Article
        </Text>
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
    borderWidth: 2,
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
    fontWeight: "bold",
    fontSize: 15,
    margin: 10,
    color: colors.secondary
  },
  tib: {
    textAlign: "center",
    color: "#515156",
  },
});
