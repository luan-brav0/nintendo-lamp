import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Main from './source/pages/Main';
import React, { useState } from 'react';

import { NativeWindStyleSheet } from "nativewind";

// Nativewind fix for web css
NativeWindStyleSheet.setOutput({
    default: "native",
});

const App: React.FC = () => {
    const [paired ,setPaired] = useState<boolean>(true);
    const [logged ,setLogged] = useState<boolean>(true);

    return (
        <View className='bg-slate-950 flex-1 justify-center items-center'>
            <Main logged={logged} paired={paired}/>
            <StatusBar style="auto" />
        </View>
    );
};

export default App;
