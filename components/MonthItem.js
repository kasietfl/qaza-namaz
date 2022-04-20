import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MonthItem = ({ month, setMonth }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={styles.container}
            onPress={() => {
                navigation.navigate('Calendar')
                setMonth(month.id);
            }}
        >
            <View style = {styles.progress}>      
            </View>
            <Text style={styles.text}>{month.name} </Text>
        </TouchableOpacity>
    );
};

export default MonthItem;

const styles = StyleSheet.create({
    container: {
        width: '32%',
        height: '17%',
        borderColor: '#3359b4',
        marginVertical: 4,
        borderRadius: 10,
        borderWidth: 2,
    },
    progress: {
        zIndex: 1000,
        backgroundColor: '#97D2FB',
        width: '70%',
        borderRadius: 11,
        height: '100%',
        borderRadius: 10,
    },
    text: {
    position: 'absolute',
      zIndex: 10000,
      flex: 1,
      top: '30%',
      left: '22%',
      overflow: 'hidden',
        fontSize: 18,
        color: '#3359b4',
        fontWeight: '700',
    },
});
