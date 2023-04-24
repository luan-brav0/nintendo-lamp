import React from "react";
import { Text, View } from "react-native";
import RoundedButton from "../../components/RoundedButton";

const Home: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
      <RoundedButton
        content="Home Button"
        mainColor="black"
        secondaryColor="white"
        paddingX={8}
        paddingY={4}
      />
    </View>
  );
};

export default Home;
