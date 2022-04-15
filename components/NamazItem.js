import { View, StyleSheet, Text } from 'react-native';
import CheckBox from 'expo-checkbox';

import React, { useState } from 'react';

const NamazItem = ({ title }) => {
    const [isSelected, checkBoxChanged] = useState();
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{title}</Text>
            <CheckBox
                style={styles.checkbox}
                value={isSelected}
                onValueChange={checkBoxChanged}
            />
        </View>
    );
};
export default NamazItem;

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#3359b4',
        padding: 25,
        marginVertical: 8,
        borderRadius: 15,
    },
    checkbox: {
        width: 25,
        height: 25,
        backgroundColor: '#fff',
        borderWidth: 0,
    },
    text: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '700',
    },
});
