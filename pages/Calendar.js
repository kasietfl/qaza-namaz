import React from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgressCircle from 'react-native-progress-circle';

LocaleConfig.locales['ru'] = {
    monthNames: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ],
    monthNamesShort: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ],
    today: 'Сегодня',
    dayNames: [
        'Понидельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье',
    ],
    dayNamesShort: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
};
LocaleConfig.defaultLocale = 'ru';

theme = {
    'stylesheet.calendar.header': {
        header: {
            backgroundColor: '#3359b4',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 15,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
        },
        monthText: {
            color: '#fff',
            fontWeight: '700',
            fontSize: 16,
        },
    },
};
const CalendarComponent = ({ year, month, setDay, len }) => {
    const navigation = useNavigation();
    let compDay = len ? len[0].split('.') : [];
    console.log('a: ', compDay);

    return (
        <View style={{ padding: 20 }}>
            <Calendar
                style={{
                    height: '100%',
                    backgroundColor: 'transparent',
                }}
                theme={theme}
                current={`${year}-${month}-01`}
                minDate={'2021-02-05'}
                enableSwipeMonths
                hideExtraDays
                dayComponent={(e) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={{
                                padding: 20,
                                width: 45,
                                height: 45,
                                borderColor: '#f9c2ff',
                                borderRadius: 50,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderWidth: 3,
                            }}
                            onPress={() => {
                                navigation.navigate('NamazList');
                                setDay(e.date.day);
                                console.log('b: ', compDay);
                            }}
                        >
                            <ProgressCircle
                                percent={
                                    compDay[0] == e.date.day &&
                                    compDay[1] == month &&
                                    compDay[2] == year
                                        ? (len[1] * 100) / 6
                                        : 0
                                }
                                radius={23}
                                borderWidth={6}
                                color='#97D2FB'
                                shadowColor='#D3D3D3'
                                bgColor='#fff'
                            >
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: '#83BCFF',
                                        fontWeight: '700',
                                        fontSize: 18,
                                    }}
                                >
                                    {e.date.day}
                                </Text>
                            </ProgressCircle>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

export default CalendarComponent;
