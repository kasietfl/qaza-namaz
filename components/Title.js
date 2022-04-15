import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = ({ title }) => {
    return <Text style={styles.title}>{title}</Text>;
};

export default Title;
const styles = StyleSheet.create({
    title: {
        paddingVertical: 20,
        fontSize: 25,
        textAlign: 'center',
        color: '#3359b4',
        fontWeight: '700',
    },
});
