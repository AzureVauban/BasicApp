import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

// Define the navigation prop type
type RootStackParamList = {
  home: undefined;
};

export default function Index() {
  // Cast navigation as a StackNavigationProp
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  // Automatically navigate to "home"
  useEffect(() => {
    navigation.replace("home");
  }, [navigation]);

  return (
    <View>
      <Text>Redirecting to Home...</Text>
    </View>
  );
}
