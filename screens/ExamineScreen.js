import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Constant from 'expo-constants';
import { colors } from '../constants/theme';
import Carousel from 'react-native-snap-carousel';

const ExamineScreen = () => {
  const [index, setIndex] = useState(0);
  const entries = [
    {
      step: 1,
      image: require('../assets/self-examination/step1.png'),
      text:
        ' With your arms relaxed by your side, look for changes in shape an color or of the nipple has changed direction.'
    },
    {
      step: 1,
      image: require('../assets/self-examination/step2.png'),
      text:
        'Place your hands on your hips and press firmly. Bend forwards and backwards looking for any changes'
    },
    {
      step: 1,
      image: require('../assets/self-examination/step3.png'),
      text:
        'Standing and with one hand behind your head explore your entire breast, starting with the armpit and finishing with nipple'
    },
    {
      step: 1,
      image: require('../assets/self-examination/step4.png'),
      text:
        'With the tips of the fingers together, feel your breast up and downwards. Also in round movements, starting from the outer part and pull inward toward the nipple.'
    },
    {
      step: 1,
      image: require('../assets/self-examination/step5.png'),
      text:
        'Lying with a cushion under your back, repeat all previous movements.'
    },
    {
      step: 1,
      image: require('../assets/self-examination/step6.png'),
      text:
        'Place your thumb and forefinger on the tissue around the nipple and press. Look for any abnormal discharge.'
    }
  ];
  renderI = ({ item, index }) => {
    return (
      <View style={styles.selfExamCard}>
        <Image
          style={{ width: 150, height: 150, borderRadius: 120 }}
          source={item.image}
        />
        <View style={{ padding: 10 }}>
          <Text style={styles.cardText}>{item.text}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Breast Self Examination</Text>
      </View>
      <View style={styles.selfExamContainer}>
        <Carousel
          data={entries}
          renderItem={renderI}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={300}
          onSnapToItem={index => setIndex(index)}
        />
      </View>
      <View style={styles.stepContainer}>
        <View style={styles.stepText}>
          <Text style={{ color: colors.tertiary }}>{index + 1}</Text>
        </View>
      </View>
    </View>
  );
};

export default ExamineScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  header: {
    padding: 15
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: colors.black,
    marginTop: Constant.statusBarHeight
  },
  selfExamContainer: {
    paddingTop: 30,
    paddingBottom: 30
  },
  selfExamCard: {
    width: '100%',
    height: 350,
    backgroundColor: colors.gray2,
    borderRadius: 15,
    overflow: 'visible',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-around'
  },
  image: {
    width: 150,
    height: 150,
    backgroundColor: colors.tertiary,
    borderRadius: 120
  },
  cardText: {
    textAlign: 'justify',
    fontSize: 15,
    color: colors.black
  },
  stepContainer: {
    padding: 10,
    alignItems: 'center'
  },
  stepText: {
    width: 40,
    height: 40,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: 'center',
    borderColor: colors.tertiary,
    borderWidth: 2,
    elevation: 4
  }
});
