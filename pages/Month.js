import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from '../components/Title';
import MonthItem from '../components/MonthItem';

const Month = ({ year, setMonth }) => {
    const monthItems = [
        {name: 'Январь', id: '01'},
        {name: 'Февраль', id: '02'},
        {name: 'Март', id: '03'},
        {name: 'Апрель', id: '04'},
        {name: 'Май', id: '05'},
        {name: 'Июнь', id: '06'},
        {name: 'Июль', id: '07'},
        {name: 'Август', id: '08'},
        {name: 'Сентябрь', id: '09'},
        {name: 'Октябрь', id: '10'},
        {name: 'Ноябрь', id: '11'},
        {name: 'Декабрь', id: '12'},
    ];
    return (
        <View style={styles.main}>
            <Title title={year} />
            <View style={styles.wrapper}>
                {monthItems.map((i) => (
                    <MonthItem key={i.id} month={i} setMonth = {setMonth}/>
                ))}
            </View>
        </View>
    );
};

export default Month;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 20,
    },
    main: {
        height: '100%',
    },
});
