import React from "react";
import { Text, View, ViewProps } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Nativewind fix for web css
NativeWindStyleSheet.setOutput({
  default: "native",
});

function handleMain(paired: boolean, logged: boolean) {
  if (!logged) {
    if (!paired) {
      return <Text>Main</Text>;
    } else {
      return <Text>not paired</Text>;
    }
  } else {
    return <Text>not logged</Text>;
  }
}

const Tab = createBottomTabNavigator();

interface MainProps extends ViewProps {
  logged: boolean;
  paired: boolean;
}
const Main: React.FC<MainProps> = (mainProps) => {
  return (
    <NavigationContainer>
      <View className={`flex-1 justify-center items-center`}>
        {handleMain(mainProps.paired, mainProps.logged)}
      </View>
    </NavigationContainer>
  );
};

export default Main;
