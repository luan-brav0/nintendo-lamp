import { StatusBar } from "expo-status-bar";
import Main from "./source/pages/Main";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const App: React.FC = () => {
  const [paired, setPaired] = useState<boolean>(false);
  const [logged, setLogged] = useState<boolean>(false);

  return (
    <SafeAreaView className={`flex-1 justify-center items-center`}>
      <Main logged={logged} paired={paired} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;
