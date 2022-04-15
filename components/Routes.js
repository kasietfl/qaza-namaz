import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';

import Intro from '../pages/Intro';
import Years from '../pages/Years';
import Month from '../pages/Month';
import Calendar from '../pages/Calendar';
import NamazList from '../pages/NamazList';

function useInput() {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    const showDatepicker = () => {
        showMode('date');
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    return {
        date,
        showDatepicker,
        show,
        mode,
        onChange,
    };
}

const Stack = createNativeStackNavigator();

export default function Routes() {
    const input = useInput(new Date());
    const input2 = useInput(new Date());

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Intro'>
                <Stack.Screen name='Intro'>
                    {(props) => (
                        <Intro {...props} input={input} input2={input2} />
                    )}
                </Stack.Screen>
                <Stack.Screen name='Years'>
                    {(props) => (
                        <Years {...props} input={input} input2={input2} />
                    )}
                </Stack.Screen>
                <Stack.Screen name='Month'>
                    {(props) => <Month {...props} year={'2010'} />}
                </Stack.Screen>
                <Stack.Screen name='Calendar' component={Calendar} />
                <Stack.Screen name='NamazList' component={NamazList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
