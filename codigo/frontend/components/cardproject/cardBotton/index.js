import { StyleSheet, Text, View, Button, Image } from 'react-native';

import styles from './style'

export function CardBot() {
    return (
        <View style={styles.cardBotBase}>
            <View style={styles.cardBotOrder}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.cardBotImg} source={require('../../../assets/profilePic.png')} />
                    <Image style={styles.cardBotImg2} source={require('../../../assets/profilePic.png')} />
                    <Image style={styles.cardBotImg2} source={require('../../../assets/profilePic.png')} />
                </View>
                <View style={styles.applicantsAlign}>
                    <Text style={styles.applicantsLetter}>20 Applicants</Text>
                    <Image style={styles.cardBotArrow} source={require('../../../assets/bluearrow.png')} />
                </View>
            </View>
        </View>
    )
}