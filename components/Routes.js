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
    const [year, setYear] = React.useState();
    const [month, setMonth] = React.useState();
    const [day, setDay] = React.useState();
    const [length, setLength] = React.useState();
    const setDayFunc = (day1) => {
        day1 <10 ? setDay(`0${day1}`) : setDay(day1)
    };


    const setYearFunc = (year) => {
        setYear(year);
    };
    const setMonthFunc = (month) => {
        setMonth(month);
    }
    const setCompletedNamaz = (len) => {
        setLength(len)
    }

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
                        <Years {...props} input={input} input2={input2} setYear = {setYearFunc} />
                    )}
                </Stack.Screen>
                <Stack.Screen name='Month'>
                    {(props) => <Month {...props} year={`${year}-год`} setMonth = {setMonthFunc}/>}
                </Stack.Screen>
                <Stack.Screen name='Calendar'>
                    { (props) => <Calendar {...props} year={year} month={month} setDay = {setDayFunc} len = {length}/>}
                </Stack.Screen>
                <Stack.Screen name='NamazList'>
                    {(props) => <NamazList {...props} date ={`${day}.${month}.${year}`} setCompletedNamaz = {setCompletedNamaz} />}
                </Stack.Screen> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}
