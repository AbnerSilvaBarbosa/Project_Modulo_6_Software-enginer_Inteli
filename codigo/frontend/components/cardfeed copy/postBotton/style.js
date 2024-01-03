import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default styles = StyleSheet.create({
    botPostBg: {
        backgroundColor: '#000',
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20

    },
    botPostInfo: {
        color: '#83BAEC',
        fontSize: 16,
        marginLeft: 7,
        marginRight: 30,

    },
    botPostRow: {
        flexDirection: 'row',
        alignItems: "center"
    },
    likeIcon: {
        width: 15,
        height: 15,
    }
});