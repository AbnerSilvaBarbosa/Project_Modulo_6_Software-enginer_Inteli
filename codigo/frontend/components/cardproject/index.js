import { StyleSheet, Text, View, Button, Image } from 'react-native';

import { CardTop } from './cardTop';
import { CardBot } from './cardBotton';

export function CardProject(){
    return (
        <View>
            <CardTop />
            <CardBot />
        </View>
    )
}