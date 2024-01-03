import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default styles = StyleSheet.create({
    topProfileBase: {
        height: 200,
        width: '100%',
        backgroundColor: '#000',
        marginBottom: 14
    },
    profilePicAlign: {
        alignSelf: "center"
    },
    topInfosPos: {
        alignSelf: 'center',
        flexDirection: 'column'
    },
    topProfileName: {
        fontSize: 25,
        color: '#fff',
        alignSelf: 'center',
        marginTop: 5,
        fontWeight: 'bold',
    },
    topProfileCharge: {
        fontSize: 10,
        color: '#31A2E3',
        alignSelf: 'center',
        marginTop: 5,
        fontWeight: 'bold',
    },
    topProfileAt: {
        fontSize: 20,
        color: '#808080',
        alignSelf: 'center',
        marginTop: 5,
        fontWeight: 'bold',
    },
});