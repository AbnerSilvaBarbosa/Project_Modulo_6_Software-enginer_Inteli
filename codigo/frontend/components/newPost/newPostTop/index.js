import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, TextInput } from 'react-native';
import { URL_API } from '../../../api';
import styles from './style';



export function NewPostTop() {


    return (
        <View style={styles.newPostTopBase}>
            <Image source={require('../../../assets/newpostpic.png')} />
            <View style={styles.newPostStatus}>
                <Text style={{ color: '#31A2E3', alignItems: 'center', alignSelf: 'center', fontSize: 25 }}>Public</Text>
            </View>
        </View>
    )
}