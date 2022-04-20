import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Keyboard
} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import format from 'date-fns/format';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Btn from '../components/Button';

export default function Intro({ navigation, input, input2 }) {
    function nextPage() {
        return navigation.navigate('Years');
    }
    const [nickname, setNickname] = useState();

    useEffect(() => {
        const firstLoad = async () => {
          try {
            const savedNickname = await AsyncStorage.getItem("@nickname");
            setNickname(savedNickname);
          } catch (err) {
            console.log(err);
          }
        };
        firstLoad();
    }, []);

    const saveNickname = async () => {
        try {
          await AsyncStorage.setItem("@nickname", nickname);
        } catch (err) {
          console.log(err);
        }
        Keyboard.dismiss();

    
        
      };
      
    return (
        <View style={styles.introWrapper}>
            <View style = {{alignItems: 'center', }}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: 'https://us.123rf.com/450wm/bsd555/bsd5551802/bsd555180200596/95339271-praying-muslim-man-glyph-icon-worship-islamic-culture-silhouette-symbol-negative-space-vector-isolat.jpg?ver=6',
                    }}
                />
            </View>
           
            {/* <Text style={styles.title}>Qaza namaz</Text> */}
            {nickname ? (
                <Text style={styles.title}>Assalamu Aleykum {nickname}!</Text>
                ) : (
                <Text style={styles.heading}>Create your nickname</Text>
                )}
           <View style={styles.nickname}> 
           <View style={styles.inputs}>
                <TextInput
                    placeholder='Введите свое имя'
                    style={styles.input}
                    value={nickname}
                    onChangeText={(value) => {
                     setNickname(value);
                    }}
                />
                </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={saveNickname} style = {styles.buttonContainer} >
                    <Text style = {{color: '#fff'}}>Save</Text>
                    </TouchableOpacity>
             </View>
           </View>

                <View style={styles.dateBtns}>
                    <TouchableOpacity onPress={input.showDatepicker}>
                        <View style={styles.date}>
                            <Text style={styles.dateText}>
                                {format(input.date, 'dd-MM-yyyy')}
                            </Text>
                            {input.show && (
                                <DateTimePicker
                                    testID='dateTimePicker1'
                                    value={input.date}
                                    mode={input.mode}
                                    display='default'
                                    onChange={input.onChange}
                                />
                            )}
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={input2.showDatepicker}>
                        <View style={styles.date}>
                            <Text style={styles.dateText}>
                                {format(input2.date, 'dd-MM-yyyy')}
                            </Text>
                            {input2.show && (
                                <DateTimePicker
                                    testID='dateTimePicker2'
                                    value={input2.date}
                                    mode={input2.mode}
                                    display='default'
                                    locale='ru'
                                    onChange={input2.onChange}
                                />
                            )}
                        </View>
                    </TouchableOpacity>
            </View>
            <Btn text='Вперёд' onPress={nextPage} />
        </View>
    );
}

const styles = StyleSheet.create({
    introWrapper: {
        margin: 20,
        paddingTop: 100,
        height: '100%',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    inputs: {
        width: '60%',
    },
    input: {
        padding: 15,
        backgroundColor: '#fff',
        fontSize: 18,
        borderRadius: 10,
    },
    dateBtns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    date: {
        backgroundColor: '#83bcff',
        borderRadius: 10,
        padding: 22,
        width: 172,
    },
    dateText: {
        color: '#fff',
        fontSize: 18,
    },
    buttonContainer: {
        width: '30%',
        borderRadius: 10,
        backgroundColor: '#83bcff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
      },
      nickname: {
          marginTop: 100,
          flexDirection: 'row',
          justifyContent: 'space-between'
      },
      tinyLogo: {
          width: 90,
          height: 90,
         
         
      }

});
