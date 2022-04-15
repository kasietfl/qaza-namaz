import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Year from '../components/Year';

export default function Years({ input, input2 }) {
    const dateFrom = input.date.getFullYear();
    const dateTo = input2.date.getFullYear();
    const dateArr = [];
    for (let i = dateFrom; i <= dateTo; i++) {
        dateArr.push(i);
    }
    return (
        <ScrollView>
            <View style={styles.yearsWrapper}>
                <Text style={styles.yearsTitle}>
                    {dateFrom}-{dateTo}
                </Text>
                {dateArr.map((i, index) => (
                    <Year key={index} year={i} />
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    yearsWrapper: {
        margin: 20,
        paddingTop: 15,
    },
    yearsTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },
});
