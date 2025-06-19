import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";

const MyColors = {
  primaryColor: "#18181b",
  secondaryColor: "#3f3f46",
  accentColor: "#e4e4e7",
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  samplebutton: {
    backgroundColor: MyColors.secondaryColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    height: 30,
    width: 400,
  },
  buttonText: {
    color: MyColors.accentColor,
    textAlign: "center",
    fontSize: 16,
    fontWeight: 500,
  },
});

export default function Index() {
  // hide header
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  let num_presses = 0;
  const handlePress = (buttonname: string = "A") => {
    num_presses += 1;
    console.log("You pressed button", buttonname, "!");
    console.log("You have pressed buttons", num_presses, "times!");
  };
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1,
          backgroundColor: MyColors.primaryColor,
        }}
      >
        <TouchableOpacity
          style={[
            styles.samplebutton,
            { backgroundColor: MyColors.secondaryColor },
            { width: 250, height: 45 },
            { marginVertical: 5 },
          ]}
          onPress={() => {
            handlePress("A");
          }}
        >
          <Text style={styles.buttonText}>BUTTON A</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.samplebutton,
            { backgroundColor: MyColors.secondaryColor },
            { width: 250, height: 45 },
            { marginVertical: 5 },
          ]}
          onPress={() => {
            handlePress("B");
          }}
        >
          <Text style={styles.buttonText}>BUTTON B</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.samplebutton,
            { backgroundColor: MyColors.secondaryColor },
            { width: 250, height: 45 },
            { marginVertical: 5 },
          ]}
          onPress={() => {
            handlePress("C");
          }}
        >
          <Text style={styles.buttonText}>BUTTON C</Text>
        </TouchableOpacity>
        <Text style={
          styles.buttonText
        }>Click on some of these buttons to see something cool happen!</Text>
      </View>
    </View>
  );
}
