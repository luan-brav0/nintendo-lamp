import React, { FC, useState } from "react";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Main from "./source/pages/Main";

const handleMain: FC<{ paired: boolean; logged: boolean }> = ({
  paired,
  logged,
}) => {
  if (logged) {
    if (paired) {
      return <Main logged={logged} paired={paired} />;
    } else {
      return <Text>not paired</Text>;
    }
  } else {
    return <Text>not logged</Text>;
  }
};

const App: FC = () => {
  const [paired, setPaired] = useState<boolean>(true);
  const [logged, setLogged] = useState<boolean>(true);

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      {handleMain({ paired, logged })}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;
