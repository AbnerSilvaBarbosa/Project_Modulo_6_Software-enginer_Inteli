import { StyleSheet, Text, View, Button, Image } from 'react-native';

import styles from './style'

export function RankingProfileInfo() {
    return (
        <View style={styles.profileRankBase}>
            <Image source={require('../../../assets/rankT.png')} />
            <Text style={styles.profileRankTxt}>6°</Text>
        </View>
    )
}