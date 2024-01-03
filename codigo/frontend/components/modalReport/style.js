import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

export default styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      height: 500,
      width: '95%',
      margin: 20,
      backgroundColor: '#192028',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      width: 130,
      borderRadius: 15,
      padding: 10,
      elevation: 2,
      backgroundColor: '#E4424D',
    },
    closeTextStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    warnText: {
      marginBottom: 15,
      textAlign: 'center',
      color: '#E4424D',
      fontSize: 22,
    },
    inputStyle: {
      borderRadius: 20,
      width: 300,
      height: 150,
      borderWidth: 1,
      borderColor: 'gray'
    },
    checkbox: {
      alignSelf: 'center',
    },
});