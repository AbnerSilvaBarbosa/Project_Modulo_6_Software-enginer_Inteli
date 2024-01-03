import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, TextInput, } from 'react-native';
import styles from './style'

export function ReplyInput(){
    return(
        <View style={styles.replyInputBase}>
            <View style={{width: '20%'}}>
                <Image style={styles.replyImg} source={require('../../assets/replyimg.png')} />
            </View>
            <View style={{width: '50%'}}>
                <TextInput style={styles.inputStyle} placeholder="Your comment !" placeholderTextColor="gray"/>
            </View>
        </View>
    )
}