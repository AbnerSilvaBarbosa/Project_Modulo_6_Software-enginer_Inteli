import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, } from 'react-native';

export default styles = StyleSheet.create({
    replyCommentBase: {
        backgroundColor: '#000',
        width: '100%',
        height: 200,
        flexDirection: 'row',
        gap: 10
    },

    threadLine:{
        height: '100%',
        borderWidth: 0.3,
        borderColor: '#FFF',

    },

    textStyle: {
        color: '#fff',
        fontSize: 15,
    }
})