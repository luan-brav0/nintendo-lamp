import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { NativeWindStyleSheet } from "nativewind";
NativeWindStyleSheet.setOutput({
    default: "native",
});

export default function App() {
    return (
        <View className='bg-slate-950 flex-1 justify-center items-center'>
            <Text className='text-slate-50 p-6 font-bold'>LUL Starting Expo Template</Text>
            <Image className='w-[400] h-[400]' source={require('./source/assets/maxwell-the-cat.gif')}/>
            <StatusBar style="auto" />
        </View>
    );
}
