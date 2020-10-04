import React, { useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  Animated,
} from 'react-native';
import { colors } from '../constants/theme';
import Entypo from 'react-native-vector-icons/Entypo';
const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 35;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

function ScrollableHeader({ route }) {
    const {imageURL, writerImageURL, title, time, writer, content}=route.params;
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });
  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const titleScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0.9],
    extrapolate: 'clamp',
  });
  const titleTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, -8],
    extrapolate: 'clamp',
  });


  return (
    <SafeAreaView style={styles.saveArea}>
      <Animated.ScrollView
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT , borderRadius: 40}}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', padding: 10}}>
            <Image
                source={{uri: writerImageURL.toString()}}
                style={styles.imageWriter}
            />
            <Text style={styles.textWriter}>{writer}</Text>
            <Text style={styles.textDate} >
                <Entypo name="dot-single" style={{fontWeight: 'bold'}} color={colors.gray}/> {time}
            </Text>
        </View>
       
        <Text style={styles.heading}>{title}</Text>
        <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 5,
                width: 80,
                marginVertical: 10,
                borderRadius: 10,
                marginLeft: 10
            }}
        />
        <Text style={styles.text}>{content}</Text>
      </Animated.ScrollView>
      <Animated.View
        style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}>
        <Animated.Image
          style={[
            styles.headerBackground,
            {
              opacity: imageOpacity,
              transform: [{ translateY: imageTranslateY }],
            },
          ]}
          source={{uri: imageURL}}
        />
      </Animated.View>
      <Animated.View
        style={[
          styles.topBar,
          {
            transform: [{ scale: titleScale }, { translateY: titleTranslateY }],
          },
        ]}>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    text:{
        padding: 10,
        marginBottom: 20,
        lineHeight: 20,
        textAlign: 'justify'
    },
  saveArea: {
    flex: 1,
    backgroundColor: '#eff3fb',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#402583',
    backgroundColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
    borderRadius: 10,
    marginHorizontal: 12,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.primary,
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
    elevation: 20
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  topBar: {
    marginTop: 40,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  avatar: {
    height: 54,
    width: 54,
    resizeMode: 'contain',
    borderRadius: 54 / 2,
  },
  fullNameText: {
    fontSize: 16,
    marginLeft: 24,
  },
  imageWriter:{
      height: 40,
      width: 40,
      borderRadius: 39,
      marginRight: 5
  },
  textDate:{
      marginLeft: 'auto',
      color: colors.gray
  },
  textWriter:{
  },
  heading:{
      fontWeight: 'bold',
      fontSize: 35,
      marginLeft: 10
  }
});

export default ScrollableHeader;