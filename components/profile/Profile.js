import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { colors } from '../../constants/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import data from '../../constants/doctor';
import QuickSandBold from '../../constants/QuickSandBold';
import QuickSandRegular from '../../constants/QuickSandRegular';
import QuickSandMedium from '../../constants/QuickSandMedium';

const Profile = props => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.appointment}>
        <Image
          source={{
            uri: item.img
          }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 80
          }}
        />
        <View style={{ padding: 6, alignSelf: 'flex-start' }}>
          <QuickSandBold style={{ fontSize: 15 }}>{item.name}</QuickSandBold>
          <QuickSandMedium style={{ fontSize: 12 }}>
            {item.specialisation}
          </QuickSandMedium>
          <QuickSandMedium style={{ fontSize: 12 }}>
            13-Oct-20 | 4:00 PM
          </QuickSandMedium>
        </View>

        <View
          style={{
            alignSelf: 'flex-end',
            flexDirection: 'row'
          }}
        >
          <View style={{ padding: 5 }}>
            <Entypo name='mail' size={20} color={colors.tertiary} />
          </View>
          <View style={{ padding: 5 }}>
            <MaterialIcons name='call' size={20} color={colors.tertiary} />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImage}>
          <Image
            style={{ width: 120, height: 120, borderRadius: 120 }}
            source={require('../../assets/woman.png')}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            right: 0,
            alignSelf: 'center',
            padding: 10,
            margin: 10,
            backgroundColor: 'white',
            borderRadius: 100
          }}
        >
          <MaterialIcons name='edit' size={24} color='black' />
        </View>
      </View>

      <View style={styles.info}>
        <QuickSandBold style={{ fontSize: 22 }}>Emily Parker</QuickSandBold>
        <QuickSandRegular>emil.parker@gmail.com</QuickSandRegular>
        <QuickSandRegular>+91-9309002911</QuickSandRegular>
        <View style={styles.healthDetails}>
          <View style={styles.healthCard}>
            <Image
              source={require('../../assets/profile/weight.png')}
              style={{ width: 70, height: 70 }}
            />
            <QuickSandRegular>56 kg</QuickSandRegular>
          </View>
          <View style={styles.healthCard}>
            <Image
              source={require('../../assets/profile/blood_group.png')}
              style={{ width: 70, height: 70 }}
            />
            <QuickSandRegular>O +ve</QuickSandRegular>
          </View>
          <View style={styles.healthCard}>
            <Image
              source={require('../../assets/profile/height.png')}
              style={{ width: 70, height: 70 }}
            />
            <QuickSandRegular>5 ft</QuickSandRegular>
          </View>
        </View>
      </View>
      <View style={styles.appoinmentsContainer}>
        <QuickSandBold style={{ fontSize: 17, paddingBottom: 10 }}>
          Scheduled Appointments
        </QuickSandBold>
        <View
          style={{
            padding: 5,
            width: Dimensions.get('window').width,
            flexDirection: 'row'
          }}
        >
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            style={{ flex: 1 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={styles.exploreStories}>
        <TouchableOpacity>
          <QuickSandRegular style={styles.exploreStoriesText}>
            Explore stories
          </QuickSandRegular>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    width: '100%',
    height: 130,
    backgroundColor: colors.tertiary,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative'
  },
  profileImage: {
    padding: 5,
    width: 130,
    backgroundColor: 'white',
    alignItems: 'center',
    margin: 'auto',
    borderRadius: 120,
    top: 40
  },
  info: {
    width: Dimensions.get('window').width,
    top: 60,
    alignItems: 'center'
  },
  healthDetails: {
    width: Dimensions.get('window').width,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  healthCard: {
    alignItems: 'center'
  },
  appoinmentsContainer: {
    top: 60,
    padding: 10
  },
  appointment: {
    width: 300,
    height: 100,
    backgroundColor: 'whitesmoke',
    marginLeft: 10,
    borderRadius: 10,
    borderLeftColor: colors.tertiary,
    borderLeftWidth: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between'
  },
  exploreStories: {
    top: 60,
    justifyContent: 'flex-end',
    width: Dimensions.get('window').width,
    alignItems: 'flex-end',
    padding: 20
  },
  exploreStoriesText: {
    fontSize: 13,
    color: colors.tertiary,
    textDecorationLine: 'underline'
  }
});
