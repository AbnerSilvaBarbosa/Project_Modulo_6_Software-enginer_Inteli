import { StyleSheet, Text, View, Button, Image } from 'react-native';

import styles from './style'

import { Tags } from '../../tags';

export function CardTop() {
    return (
        <View style={styles.cardTopBase}>
            <View style={styles.cardTopFirst}>
                <Text style={styles.cardTittle}>Desenvolvimento Web</Text>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    <Image source={require('../../../assets/nocp.png')} />
                    <Image source={require('../../../assets/save.png')} />
                </View>
            </View>
            <View style={styles.cardTopSecond}>
                <Image source={require('../../../assets/user.png')} />
                <Text style={styles.infoLetter}>leader name</Text>
                <Image source={require('../../../assets/clock.png')} />
                <Text style={styles.infoLetter}>04/05/2023</Text>
                <Image source={require('../../../assets/lock.png')} />
                <Text style={styles.statusLetter}>Open</Text>
            </View>
            <View style={styles.cardTopThird}>
                <Text style={styles.descriptionLetter}>This an text of example, this is how am drescription of a post will look like on the feed of projects</Text>
            </View>
            <View style={styles.cardTopFourth}>
                <Tags />
                <Tags />
                <Tags />
            </View>
        </View>
    )
}