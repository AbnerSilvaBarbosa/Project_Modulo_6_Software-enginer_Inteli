import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style'

export function NewUserButton(){
    return(
        <View>
            <LinearGradient colors={['#3EACDB', '#4164E1']}
                style={{
                    width: 240,
                    height: 56,
                    borderRadius: 30,
                    padding: 5,

                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center"

                }} >
                <Text style={{ color: "white", fontSize: 20 }}>Explore</Text>
            </LinearGradient>
        </View>
    )
}