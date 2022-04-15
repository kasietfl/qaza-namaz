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
const CalendarComponent = () => {
    const navigation = useNavigation();

    return (
        <View style={{ padding: 20 }}>
            <Calendar
                style={{
                    height: '100%',
                    backgroundColor: 'transparent',
                }}
                theme={theme}
                minDate={'2021-02-05'}
                enableSwipeMonths
                dayComponent={(e) => {
                    return (
                        <TouchableOpacity
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
                            onPress={() => navigation.navigate('NamazList')}
                        >
                            <ProgressCircle
                                percent={60}
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
