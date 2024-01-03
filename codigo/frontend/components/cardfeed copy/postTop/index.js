import { StyleSheet, Text, View, Button, Image, Pressable } from 'react-native';

import styles from './style'
import { ModalCompliance } from '../../modalReport';

export function PostTop({ timer , state, setState}) {
    
    return (
        <View style={styles.topPostBase}>
            <View style={styles.topPosAlign}>
                <Image style={styles.topPostImg} source={require('../../../assets/profileExample.png')} />
            </View>
            <View style={{ flexDirection: 'row', gap: 150 }}>
                <View style={styles.topPosAlign}>
                    <Text style={styles.topPostName}>Trocar backend</Text>
                    <Text style={styles.topPostTime}>{timer}</Text>
                </View>
                <Pressable onPress={() => setState(!state)} style={styles.topPosAlign2}>
                    <Image style={styles.topPostDots} source={require('../../../assets/dots.png')} />
                </Pressable>
            </View>
        </View>
    )
}