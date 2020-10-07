import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,
  Platform
} from 'react-native';
import Constant from 'expo-constants';

import { colors } from '../../constants/theme';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import QuickSandBold from '../../constants/QuickSandBold';
import QuickSandRegular from '../../constants/QuickSandRegular';
import QuickSandMedium from '../../constants/QuickSandMedium';

const openDial = no => {
  if (Platform.OS === 'android') {
    Linking.openURL(`tel:${no}`);
  } else {
    Linking.openURL(`telprompt:${no}`);
  }
};

const DoctorDetails = ({ data }) => {
  return (
    <LinearGradient
      style={styles.doctorDetails}
      colors={[colors.white, colors.tertiary]}
    >
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Image
            source={{
              uri: data.img
            }}
            style={{ width: 120, height: 120, borderRadius: 15 }}
          />
        </View>
        <View style={{ padding: 10 }}>
          <QuickSandBold style={styles.doctorName}>{data.name}</QuickSandBold>
          <QuickSandMedium style={styles.category}>
            {data.specialisation}
          </QuickSandMedium>
          <View style={{ paddingTop: 15, flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.call}
              onPress={() => openDial(data.contact_no)}
            >
              <MaterialIcons name='call' size={20} color={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.call}
              onPress={() => {
                Linking.openURL(`mailto:${data.email}`);
              }}
            >
              <Entypo name='mail' size={20} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bio}>
        <QuickSandMedium style={styles.bioText}>{data.bio}</QuickSandMedium>
      </View>
    </LinearGradient>
  );
};

const Availabilty = () => {
  return (
    <View style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 10 }}>
      <QuickSandBold style={styles.availableMonth}>October 2020</QuickSandBold>
      <View
        style={{
          paddingTop: 10,
          paddingBottom: 10,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}
      >
        <View style={styles.dateCard}>
          <QuickSandMedium style={{ fontSize: 12 }}>Sat</QuickSandMedium>
          <QuickSandBold style={{ fontSize: 22 }}>08</QuickSandBold>
        </View>
        <View style={styles.dateCardSelected}>
          <QuickSandMedium style={{ fontSize: 12, color: colors.white }}>
            Sun
          </QuickSandMedium>
          <QuickSandBold
            style={{
              fontSize: 22,
              color: colors.white
            }}
          >
            09
          </QuickSandBold>
        </View>
        <View style={styles.dateCard}>
          <QuickSandMedium style={{ fontSize: 12 }}>Mon</QuickSandMedium>
          <QuickSandBold style={{ fontSize: 22 }}>10</QuickSandBold>
        </View>
        <View style={styles.dateCard}>
          <QuickSandMedium style={{ fontSize: 12 }}>Tue</QuickSandMedium>
          <QuickSandBold style={{ fontSize: 22 }}>11</QuickSandBold>
        </View>
      </View>
      <View
        style={{
          paddingTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap'
        }}
      >
        <View style={styles.time}>
          <QuickSandMedium style={{ color: 'black', fontSize: 13 }}>
            03:00 pm
          </QuickSandMedium>
        </View>
        <View style={styles.time}>
          <QuickSandMedium style={{ color: 'black', fontSize: 13 }}>
            03:00 pm
          </QuickSandMedium>
        </View>
        <View style={styles.time}>
          <QuickSandMedium style={{ color: 'black', fontSize: 13 }}>
            03:00 pm
          </QuickSandMedium>
        </View>
        <View style={styles.time}>
          <QuickSandMedium style={{ color: 'black', fontSize: 13 }}>
            03:00 pm
          </QuickSandMedium>
        </View>
        <View style={styles.time}>
          <QuickSandMedium style={{ color: 'black', fontSize: 13 }}>
            03:00 pm
          </QuickSandMedium>
        </View>
      </View>
    </View>
  );
};

const DoctorProfile = ({ route }) => {
  return (
    <View style={styles.container}>
      <DoctorDetails data={route.params.data} />
      <Availabilty />
      <View style={styles.bookAppointment}>
        <QuickSandBold
          style={{
            color: 'white',
            fontSize: 15
          }}
        >
          Book an Appointment
        </QuickSandBold>
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  doctorDetails: {
    width: '100%',
    padding: 20,
    marginBottom: 10,
    backgroundColor: 'white',
    elevation: 7,
    paddingTop: Constant.statusBarHeight + 10,
    borderBottomLeftRadius: 120
  },
  doctorName: {
    fontSize: 25
  },
  call: {
    width: 35,
    height: 35,
    backgroundColor: colors.tertiary,
    borderRadius: 40,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bio: {
    paddingLeft: 44
  },
  bioText: {
    fontSize: 12,
    color: 'white'
  },
  availableMonth: {
    fontSize: 18,
    marginLeft: 10
  },
  dateCard: {
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
    borderRadius: 15,
    elevation: 6
  },
  dateCardSelected: {
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.tertiary,
    borderRadius: 15,
    elevation: 6
  },
  time: {
    width: 90,
    height: 35,
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    marginTop: 10
  },
  bookAppointment: {
    backgroundColor: colors.tertiary,
    width: '80%',
    margin: 'auto',
    padding: 15,
    borderRadius: 60,
    alignItems: 'center',
    marginTop: 40
  }
});
