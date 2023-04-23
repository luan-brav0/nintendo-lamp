import React from 'react';
import { Text } from 'react-native';

function handleMain (paired: boolean, logged: boolean) {
    if (!logged) {
        if (!paired) {
            return <Text>Main</Text>;
        }
        else {
            return <Text>not paired</Text>;
        };
    }

    else {
        return <Text>not logged</Text>;
    };
};

interface MainProps {
    logged: boolean,
    paired: boolean,
}

const Main: React.FC<MainProps> = (mainProps) => {
    return (
        <>
            {handleMain(mainProps.paired, mainProps.logged)}
        </>
    );
}

export default Main;
