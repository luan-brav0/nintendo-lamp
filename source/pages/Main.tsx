import React, { FC } from "react";
import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import Profile from "./screens/Profile";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { colors } from "../components/colors";
// Nativewind fix for web css
NativeWindStyleSheet.setOutput({
  default: "native",
});

// Material icon name type
type MIcon = keyof typeof MaterialIcons.glyphMap;
let iconName: MIcon;

const Tab = createBottomTabNavigator();

const Main: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ size, color }) => {
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Settings") {
              iconName = "settings";
            } else if (route.name === "Profile") {
              iconName = "person";
            } else {
              console.error("Bad Tab Icon.");
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.white.toString(),
          tabBarInactiveTintColor: colors.dimRed.toString(),
          tabBarStyle: { backgroundColor: colors.red },
          tabBarShowLabel: false,
          // headerShown: false
          headerStyle: { backgroundColor: colors.red },
          headerTitleContainerStyle: { alignSelf: "center" },
          headerTitleStyle: { color: colors.white },
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
