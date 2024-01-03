import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, } from 'react-native';
import styles from './style'

export function ScrumTag(){
    return(
        <View style={styles.tagBase}>
            <Image style={styles.iconSize} source={require('../../../assets/Icons/scrumicon.png')}/>
            <Text style={styles.nameSize}>SCRUM</Text>
        </View>
    )
}