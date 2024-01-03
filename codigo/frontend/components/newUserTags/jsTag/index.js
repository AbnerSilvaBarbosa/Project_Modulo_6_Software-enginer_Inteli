import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, } from 'react-native';
import styles from './style'

export function JsTag(){
    return(
        <View style={styles.tagBase}>
            <Image style={styles.iconSize} source={require('../../../assets/Icons/jsicon.png')}/>
            <Text style={styles.nameSize}>JavaScript</Text>
        </View>
    )
}