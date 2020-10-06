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
          <Text style={styles.doctorName}>{data.name}</Text>
          <Text style={styles.category}>{data.specialisation}</Text>
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
        <Text style={styles.bioText}>{data.bio}</Text>
      </View>
    </LinearGradient>
  );
};

const Availabilty = () => {
  return (
    <View style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 10 }}>
      <Text style={styles.availableMonth}>October 2020</Text>
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
          <Text style={{ fontSize: 12 }}>Sat</Text>
          <Text style={{ fontSize: 22 }}>08</Text>
        </View>
        <View style={styles.dateCardSelected}>
          <Text style={{ fontSize: 12, color: colors.white }}>Sun</Text>
          <Text
            style={{
              fontSize: 22,
              color: colors.white
            }}
          >
            09
          </Text>
        </View>
        <View style={styles.dateCard}>
          <Text style={{ fontSize: 12 }}>Mon</Text>
          <Text style={{ fontSize: 22 }}>10</Text>
        </View>
        <View style={styles.dateCard}>
          <Text style={{ fontSize: 12 }}>Tue</Text>
          <Text style={{ fontSize: 22 }}>11</Text>
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
          <Text style={{ color: 'black', fontSize: 13 }}>03:00 pm</Text>
        </View>
        <View style={styles.time}>
          <Text style={{ color: 'black', fontSize: 13 }}>03:00 pm</Text>
        </View>
        <View style={styles.time}>
          <Text style={{ color: 'black', fontSize: 13 }}>03:00 pm</Text>
        </View>
        <View style={styles.time}>
          <Text style={{ color: 'black', fontSize: 13 }}>03:00 pm</Text>
        </View>
        <View style={styles.time}>
          <Text style={{ color: 'black', fontSize: 13 }}>03:00 pm</Text>
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
        <Text
          style={{
            color: 'white',
            fontSize: 15
          }}
        >
          Book an Appointment
        </Text>
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
