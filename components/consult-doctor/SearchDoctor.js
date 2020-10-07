import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Constants from 'expo-constants';
import { TextInput } from 'react-native';
import { Feather, AntDesign, Fontisto } from '@expo/vector-icons';
import { colors } from '../../constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import data from '../../constants/doctor';
import QuickSandBold from '../../constants/QuickSandBold';
import QuickSandRegular from '../../constants/QuickSandRegular';
import QuickSandMedium from '../../constants/QuickSandMedium';

const Category = () => {
  return (
    <View style={styles.categoryContainer}>
      <QuickSandBold style={styles.categoryTitle}>Category</QuickSandBold>
      <View style={styles.categoryCardsContainer}>
        <View style={styles.categoryCard}>
          <View style={styles.categoryImage}>
            <AntDesign name='heart' size={24} color={colors.red} />
          </View>
          <QuickSandMedium style={styles.categoryText}>
            Medical oncologist
          </QuickSandMedium>
        </View>
        <View style={styles.categoryCard}>
          <View style={styles.categoryImage}>
            <Fontisto name='doctor' size={24} color={colors.gray} />
          </View>
          <QuickSandMedium style={styles.categoryText}>
            Surgical oncologist
          </QuickSandMedium>
        </View>
        <View style={styles.categoryCard}>
          <View style={styles.categoryImage}>
            <AntDesign name='heart' size={24} color={colors.red} />
          </View>
          <QuickSandMedium style={styles.categoryText}>
            Breast surgeon
          </QuickSandMedium>
        </View>
        <View style={styles.categoryCard}>
          <View style={styles.categoryImage}>
            <AntDesign name='heart' size={24} color={colors.red} />
          </View>
          <QuickSandMedium style={styles.categoryText}>
            Plastic surgeon
          </QuickSandMedium>
        </View>
      </View>
    </View>
  );
};

const Header = () => {
  return (
    <LinearGradient style={styles.header} colors={[colors.white, colors.gray2]}>
      <QuickSandBold style={styles.headerText}>
        Find your desired specialist
      </QuickSandBold>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder={'Search for doctor'}
          style={styles.searchInput}
        />
        <View style={styles.searchIcon}>
          <Feather name='search' size={24} color='white' />
        </View>
      </View>
    </LinearGradient>
  );
};

const TopDoctorCarousel = props => {
  const doctorCard = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.doctorCard}
        onPress={() =>
          props.navigation.navigate('DoctorProfile', { data: item })
        }
      >
        <View>
          <Image
            source={{
              uri: item.img
            }}
            style={{
              width: 80,
              height: 80,
              borderRadius: 15,
              alignSelf: 'flex-end'
            }}
          />
        </View>
        <View style={{ paddingTop: 10 }}>
          <QuickSandBold style={styles.doctorDetails}>
            {item.name}
          </QuickSandBold>
          <QuickSandMedium style={{ ...styles.doctorDetails, fontSize: 12 }}>
            {item.specialisation}{' '}
          </QuickSandMedium>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <LinearGradient
      style={styles.topDoctorsContainer}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[colors.secondary, colors.white]}
    >
      <QuickSandBold style={styles.topDoctorText}>Top Doctors</QuickSandBold>
      <FlatList
        data={data}
        renderItem={doctorCard}
        keyExtractor={item => item.id}
        horizontal={true}
        style={{ flex: 1 }}
        showsHorizontalScrollIndicator={false}
      />
    </LinearGradient>
  );
};

const SearchDoctor = props => {
  return (
    <View style={styles.container}>
      <Header />
      <Category />
      <TopDoctorCarousel {...props} />
    </View>
  );
};

export default SearchDoctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.gray2,
    paddingBottom: 25,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  headerText: {
    fontSize: 26,
    letterSpacing: 1,
    marginTop: Constants.statusBarHeight,
    color: colors.black
  },
  searchContainer: {
    padding: 5,
    height: 50,
    width: 330,
    backgroundColor: 'white',
    borderRadius: 50,
    flexDirection: 'row',
    marginTop: 20
  },
  searchInput: {
    flex: 1,
    paddingLeft: 10
  },
  searchIcon: {
    backgroundColor: colors.tertiary,
    marginRight: 0,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    color: 'white'
  },
  categoryContainer: {
    padding: 20,
    paddingTop: 10
  },
  categoryTitle: {
    fontSize: 17
  },
  categoryCardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  categoryCard: {
    flexDirection: 'column',
    padding: 5,
    alignItems: 'center',
    width: 70,
    height: 70
  },
  categoryImage: {
    padding: 10,
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoryText: {
    padding: 10,
    width: 100,
    textAlign: 'center',
    fontSize: 12
  },
  topDoctorsContainer: {
    marginTop: 30,
    marginLeft: 20,
    borderTopLeftRadius: 30,
    padding: 0,
    position: 'relative',
    flex: 1,
    width: '100%',
    backgroundColor: 'red',
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden'
  },
  topDoctorText: {
    transform: [{ rotate: '-90deg' }],
    fontSize: 17
  },
  doctorCard: {
    width: 150,
    height: 150,
    borderRadius: 20,
    backgroundColor: colors.white,
    opacity: 0.8,
    marginRight: 20,
    padding: 15
  },
  doctorDetails: {
    fontSize: 12
  }
});
