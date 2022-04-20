import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Title from '../components/Title';
import Year from '../components/Year';

export default function Years({ input, input2, setYear }) {
    const dateFrom = input.date.getFullYear();
    const dateTo = input2.date.getFullYear();
    const dateArr = [];
    for (let i = dateFrom; i <= dateTo; i++) {
        dateArr.push(i);
    }
    return (
        <ScrollView>
            <View style={styles.yearsWrapper}>
                <Title title = {`${dateFrom} - ${dateTo}`}/>
                {dateArr.map((i, index) => (
                    <Year key={index} year={i} setYear={setYear} />
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    yearsWrapper: {
        margin: 20,
    },
});
