import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, } from 'react-native';
import styles from './style'

export function ReplyComment(){
    return(
        <View style={styles.replyCommentBase}>
            <View style={{width: '20%', alignItems: 'flex-end'}}>
                <View style={styles.threadLine}>
                </View>
            </View>
            <View style={{width: '75%', justifyContent: 'center', padding: 1}}>
                <Text style={styles.textStyle}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
                </Text>
            </View>
        </View>
    )
}