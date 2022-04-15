import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Years({ year }) {
    const navigation = useNavigation();
    return (
        <View style={styles.year}>
            <TouchableOpacity onPress={() => navigation.navigate('Month')}>
                <Text style={styles.yearText}>{year}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    year: {
        marginVertical: 2.5,
    },
    yearText: {
        backgroundColor: '#3359b4',
        padding: 22,
        borderRadius: 15,
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
