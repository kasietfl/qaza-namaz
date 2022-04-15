import { View, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import NamazItem from '../components/NamazItem';
import Title from '../components/Title';

const DATA = [
    {
        id: '1',
        title: 'Фаджр',
    },
    {
        id: '2',
        title: 'Зухр',
    },
    {
        id: '3',
        title: 'Аср',
    },
    {
        id: '4',
        title: 'Магриб',
    },
    {
        id: '5',
        title: 'Иша',
    },
    {
        id: '6',
        title: 'Тахаджуд',
    },
];

const NamazList = () => {
    const renderItem = ({ item }) => <NamazItem title={item.title} />;
    return (
        <View style={styles.main}>
            <Title title='05.01.2010' />
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            {/* <Button text = "Назад"/> */}
        </View>
    );
};

export default NamazList;

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    main: {
        height: '100%',
        padding: 20,
    },
});
