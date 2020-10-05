import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import LifestyleCard from "../components/LifestyleCard";
import { ScrollView } from "react-native-gesture-handler";
import QuickSandBold from "../constants/QuickSandBold";
const LifestyleScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <QuickSandBold style={{marginLeft: 10, fontSize: 30, marginVertical: 20}}>Health Dashboard</QuickSandBold>
      <Grid>
        <Col>
          <Row>
            <LifestyleCard
              cardName="Activity"
              icon="star-outlined"
              numerator="0"
              denominator="10000"
              unit="Steps"
              bgcolor="#fbc5c3"
              text="Get Moving"
            />
          </Row>
          <Row>
            <LifestyleCard
              cardName="Workout"
              icon="battery"
              numerator="0"
              denominator="200"
              unit="Cal burned"
              bgcolor="#e2f0d9"
              text="09:48 PM | 60 mins"
            />
          </Row>
          <Row>
            <LifestyleCard
              cardName="Nutrition"
              icon="bowl"
              numerator="75"
              denominator="100"
              unit="Taken"
              bgcolor="#f4f3f1"
              text="Need more carbs"
            />
          </Row>
        </Col>
        <Col>
          <Row>
            <LifestyleCard
              cardName="Hydration"
              icon="cup"
              numerator="0"
              denominator="3"
              unit="Litres"
              bgcolor="#e9ecf3"
              text=""
            />
          </Row>
          <Row>
            <LifestyleCard
              cardName="Sleep"
              icon="moon"
              numerator="0"
              denominator="9"
              unit="Hours"
              bgcolor="#f4f3f1"
              text=""
            />
          </Row>
          <Row>
            <LifestyleCard
              cardName="Food"
              icon="cake"
              numerator="0"
              denominator="1535"
              unit="Cal"
              bgcolor="#fbc5c3"
              text=""
            />
          </Row>
          <Row>
            <LifestyleCard
              cardName="Pulse"
              icon="drop"
              numerator="0"
              denominator="0"
              unit="BPM"
              bgcolor="#e2f0d9"
              text=""
            />
          </Row>
        </Col>
      </Grid>
    </ScrollView>
  );
};

export default LifestyleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
