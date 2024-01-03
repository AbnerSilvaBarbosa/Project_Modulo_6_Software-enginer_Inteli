import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, } from 'react-native';
import styles from './style'

export function UiTag(){
    return(
        <View style={styles.tagBase}>
            <Image style={styles.iconSize} source={require('../../../assets/Icons/uiicon.png')}/>
            <Text style={styles.nameSize}>UI design</Text>
        </View>
    )
}