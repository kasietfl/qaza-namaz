import {
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';
import React from 'react';
import SelectMultiple from 'react-native-select-multiple';
import { useNavigation } from '@react-navigation/native';
import Title from '../components/Title';

const DATA = [
    {
        value: '1',
        label: 'Фаджр',
    },
    {
        value: '2',
        label: 'Зухр',
    },
    {
        value: '3',
        label: 'Аср',
    },
    {
        value: '4',
        label: 'Магриб',
    },
    {
        value: '5',
        label: 'Иша',
    },
    {
        value: '6',
        label: 'Витр',
    },
];

const NamazList = ({ date, setCompletedNamaz }) => {
    const [completedNamazes, setCompletedNamazes] = React.useState([]);

    const onCompletedChange = (selected) => {
        setCompletedNamazes(selected);
    };
    const navigation = useNavigation();

    return (
        <View style={styles.main}>
            <Title title={date} />
            <SelectMultiple
                items={DATA}
                selectedItems={completedNamazes}
                onSelectionsChange={onCompletedChange}
            />
            <TouchableOpacity
                style={{
                    marginBottom: 20,
                    backgroundColor: '#3359b4',
                    padding: 20,
                    borderRadius: 10,
                }}
                activeOpacity={0.9}
                onPress={() => {
                    setCompletedNamaz([date, completedNamazes.length]);
                    navigation.navigate('Calendar');
                }}
            >
                <Text
                    style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}
                >
                    Сохранить
                </Text>
            </TouchableOpacity>
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
