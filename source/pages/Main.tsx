import React from "react";
import { Text, View, ViewProps } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import Profile from "./screens/Profile";
import { Image } from "expo-image";

// Nativewind fix for web css
NativeWindStyleSheet.setOutput({
  default: "native",
});

const Tab = createBottomTabNavigator();

interface MainProps extends ViewProps {
  logged: boolean;
  paired: boolean;
}
const Main: React.FC<MainProps> = (mainProps) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let iconName;

            switch (route.name) {
              case "Home":
                iconName = "HomeIco";
                break;
              case "Settings":
                iconName = "SettingsIco";
                break;
              case "Profile":
                iconName = "ProfileIco";
                break;
            }
            return <Image source={require(`${iconName}.svg`)} />;
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#E98F93",
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Main;
