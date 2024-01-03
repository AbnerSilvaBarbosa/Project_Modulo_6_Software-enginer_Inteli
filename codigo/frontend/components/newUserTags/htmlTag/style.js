import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, } from 'react-native';

export default styles = StyleSheet.create({
  tagBase: {
    height: 30,
    width: 100, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderWidth: 2,
    borderColor: '#f1662a',
    borderRadius: 10,
  },

  iconSize: {
    width: 20,
    height: 20,
  },

  nameSize: {
    fontSize: 10,
    color: '#fff',
  },
});