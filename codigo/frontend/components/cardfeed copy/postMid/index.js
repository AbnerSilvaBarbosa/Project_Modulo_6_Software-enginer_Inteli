import { StyleSheet, Text, View, Button, Image } from 'react-native';

import styles from './style'

export function PostMid({ imageURL, article }) {
    return (
        <View style={{ marginBottom: 10 }}>
            <Image style={styles.midPostImg} source={{
                uri: imageURL
            }} />
            <View style={styles.midPostBg}>
                <Text style={styles.midPostDesc}>
                    {article}
                </Text>
                <Text style={styles.midPostHash}>
                    #Technologie
                    #Future
                </Text>
            </View>
        </View>
    )
}