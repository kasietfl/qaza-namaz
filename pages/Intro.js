import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import format from 'date-fns/format';

import Btn from '../components/Button';

export default function Intro({ navigation, input, input2 }) {
    function nextPage() {
        return navigation.navigate('Years');
    }
    return (
        <View style={styles.introWrapper}>
            <Text style={styles.title}>Qaza namaz</Text>
            <View style={styles.inputs}>
                <TextInput
                    placeholder='Введите свое имя'
                    style={styles.input}
                />
                <View style={styles.dateBtns}>
                    <TouchableOpacity onPress={input.showDatepicker}>
                        <View style={styles.date}>
                            <Text style={styles.dateText}>
                                {format(input.date, 'dd-MM-yyyy')}
                            </Text>
                            {input.show && (
                                <DateTimePicker
                                    testID='dateTimePicker1'
                                    value={input.date}
                                    mode={input.mode}
                                    display='default'
                                    onChange={input.onChange}
                                />
                            )}
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={input2.showDatepicker}>
                        <View style={styles.date}>
                            <Text style={styles.dateText}>
                                {format(input2.date, 'dd-MM-yyyy')}
                            </Text>
                            {input2.show && (
                                <DateTimePicker
                                    testID='dateTimePicker2'
                                    value={input2.date}
                                    mode={input2.mode}
                                    display='default'
                                    locale='ru'
                                    onChange={input2.onChange}
                                />
                            )}
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <Btn text='Вперёд' onPress={nextPage} />
        </View>
    );
}

const styles = StyleSheet.create({
    introWrapper: {
        margin: 20,
        paddingTop: 100,
        height: '100%',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    inputs: {
        marginTop: 100,
    },
    input: {
        padding: 15,
        backgroundColor: '#fff',
        fontSize: 18,
        borderRadius: 10,
    },
    dateBtns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    date: {
        backgroundColor: '#83bcff',
        borderRadius: 10,
        padding: 22,
        width: 172,
    },
    dateText: {
        color: '#fff',
        fontSize: 18,
    },
});
