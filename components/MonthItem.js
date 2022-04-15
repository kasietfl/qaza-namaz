import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MonthItem = ({ month }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('Calendar')}
        >
            <Text style={styles.text}>{month}</Text>
        </TouchableOpacity>
    );
};

export default MonthItem;

const styles = StyleSheet.create({
    container: {
        width: '32%',
        height: '17%',
        backgroundColor: '#3359b4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 4,
        borderRadius: 10,
    },
    text: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '700',
    },
});
