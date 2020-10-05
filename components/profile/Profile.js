import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import { colors } from "../../constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Profile = () => {
  const data = [0, 1, 2, 3, 4];
  const renderItem = () => {
    return (
      <View style={styles.appointment}>
        <Image
          source={{
            uri:
              "https://images.unsplash.com/photo-1582971805810-b24306e0afe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 80,
          }}
        />
        <View style={{ padding: 6, alignSelf: "flex-start" }}>
          <Text style={{ fontSize: 15 }}>Dr. Stellar Kane</Text>
          <Text style={{ fontSize: 12 }}>Breast Surgeon</Text>
          <Text style={{ fontSize: 12 }}>13-Oct-20 | 4:00 PM</Text>
        </View>

        <View
          style={{
            alignSelf: "flex-end",
            flexDirection: "row",
          }}
        >
          <View style={{ padding: 5 }}>
            <Entypo name="mail" size={20} color={colors.tertiary} />
          </View>
          <View style={{ padding: 5 }}>
            <MaterialIcons name="call" size={20} color={colors.tertiary} />
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
            source={{
              uri:
                "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            }}
          />
        </View>
        <View
          style={{
            position: "absolute",
            right: 0,
            alignSelf: "center",
            padding: 10,
            margin: 10,
            backgroundColor: "white",
            borderRadius: 100,
          }}
        >
          <MaterialIcons name="edit" size={24} color="black" />
        </View>
      </View>

      <View style={styles.info}>
        <Text style={{ fontSize: 22 }}>Eva Gupta</Text>
        <Text>eva_official@gmail.com</Text>
        <Text>+91-9309002911</Text>
        <View style={styles.healthDetails}>
          <View style={styles.healthCard}>
            <Image
              source={require("../../assets/profile/weight.png")}
              style={{ width: 70, height: 70 }}
            />
            <Text>56 kg</Text>
          </View>
          <View style={styles.healthCard}>
            <Image
              source={require("../../assets/profile/blood_group.png")}
              style={{ width: 70, height: 70 }}
            />
            <Text>O +ve</Text>
          </View>
          <View style={styles.healthCard}>
            <Image
              source={require("../../assets/profile/height.png")}
              style={{ width: 70, height: 70 }}
            />
            <Text>5 ft</Text>
          </View>
        </View>
      </View>
      <View style={styles.appoinmentsContainer}>
        <Text style={{ fontSize: 17 }}>Scheduled Appointments</Text>
        <View
          style={{
            padding: 5,
            width: Dimensions.get("window").width,
            flexDirection: "row",
          }}
        >
          <FlatList
            renderItem={renderItem}
            data={data}
            keyExtractor={(item) => item}
            horizontal={true}
            style={{ flex: 1 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={styles.exploreStories}>
        <Text style={styles.exploreStoriesText}>Explore stories</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    height: 130,
    backgroundColor: colors.tertiary,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
  },
  profileImage: {
    padding: 5,
    width: 130,
    backgroundColor: "white",
    alignItems: "center",
    margin: "auto",
    borderRadius: 120,
    top: 40,
  },
  info: {
    width: Dimensions.get("window").width,
    top: 60,
    alignItems: "center",
  },
  healthDetails: {
    width: Dimensions.get("window").width,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  healthCard: {
    alignItems: "center",
  },
  appoinmentsContainer: {
    top: 60,
    padding: 10,
  },
  appointment: {
    width: 300,
    height: 100,
    backgroundColor: "whitesmoke",
    marginLeft: 10,
    borderRadius: 10,
    borderLeftColor: colors.tertiary,
    borderLeftWidth: 5,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
  },
  exploreStories: {
    top: 60,
    justifyContent: "flex-end",
    width: Dimensions.get("window").width,
    alignItems: "flex-end",
    padding: 20,
  },
  exploreStoriesText: {
    fontSize: 13,
    color: colors.tertiary,
    textDecorationLine: "underline",
  },
});
