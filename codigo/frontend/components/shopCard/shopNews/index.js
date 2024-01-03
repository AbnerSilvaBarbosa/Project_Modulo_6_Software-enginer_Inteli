import React from "react"
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "./style.js";

export function ShopNews(){
    return(
        <LinearGradient 
        style={{height: 300, width: 400, borderRadius: 10,}} 
        colors={['#0D2C3D','#31A2E3']} 
        start={{x:0,y:0}}
        end={{x:1,y:1}}>
            <View style={{height: '20%'}}>

            </View>
            <View style={{height: '50%', justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{width: 140, height: 140}} source={require('../../../assets/borderBuy.png')} />
            </View>
            <View style={{height: '30%', flexDirection: 'row'}}>
                <View style={{width: '50%', alignItems: 'center', justifyContent:'center'}}>
                    <Text style={{color: '#fff', fontSize: 20}}>Fade border</Text>
                </View>
                <View style={{width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent:'center', gap: 10}}>
                    <Image source={require('../../../assets/coins.png')} style={{width: 35, height: 35}} />
                    <Text style={{color: '#fff', fontSize: 20}}>50</Text>
                </View>
            </View>
        </LinearGradient>
    )
}