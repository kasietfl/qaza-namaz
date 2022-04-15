import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Button(props) {
    return (
        <View style={styles.btn}>
            <TouchableOpacity onPress={() => props.onPress()}>
                <View style={styles.submitBtn}>
                    <Text style={styles.submitText}>{props.text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    submitBtn: {
        backgroundColor: '#83bcff',
        paddingVertical: 20,
        borderRadius: 10,
    },
    submitText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    },
    btn: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingBottom: 40,
    },
});
