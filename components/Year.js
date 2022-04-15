import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Years({ year }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.year}
            onPress={() => navigation.navigate('Month')}
        >
            <View style={styles.progressBar}></View>
            <Text style={styles.yearText}>{year}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    year: {
        marginVertical: 2.5,
        backgroundColor: '#fff',
        borderRadius: 15,
        borderColor: '#3359b4',
        borderWidth: 2,
        height: 80,
    },
    progressBar: {
        zIndex: 1000,
        backgroundColor: '#3359b4',
        width: '30%',
        height: '100%',
        borderRadius: 10,
    },
    yearText: {
        top: '35%',
        left: '45%',
        position: 'absolute',
        zIndex: 1002,
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold',
    },
});
