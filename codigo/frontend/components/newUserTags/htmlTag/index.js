import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, } from 'react-native';
import styles from './style'

export function HtmlTag(){
    return(
        <View style={styles.tagBase}>
            <Image style={styles.iconSize} source={require('../../../assets/Icons/htmlicon.png')}/>
            <Text style={styles.nameSize}>HTML</Text>
        </View>
    )
}