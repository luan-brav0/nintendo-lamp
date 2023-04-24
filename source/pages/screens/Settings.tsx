import React, { useState } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import RoundedButton from "../../components/RoundedButton";

interface SettingsProps {
  navigation: NavigationScreenProp<any, any>;
}
const Settings: React.FC<SettingsProps> = ({ navigation }) => {
  return (
    <View className="bg-white flex-1 justify-center items-center">
      <Text className="p-6">Settings!</Text>
      <RoundedButton
        content="Pair your super lampada"
        mainColor="white"
        secondaryColor="red"
        paddingX={8}
        paddingY={4}
        navigation={navigation}
      />
    </View>
  );
};

export default Settings;
