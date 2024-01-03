import React from "react"
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "./style.js";

export function ShopBuy(){
    return(
        <LinearGradient 
        style={{height: 300, width: 200, borderRadius: 10, gap: 15, marginLeft: 5, marginRight: 5,}} 
        colors={['#0D2C3D','#31A2E3']} 
        start={{x:0,y:0}}
        end={{x:1,y:1}}>
            <View style={{width: '100%', alignItems: "center", marginBottom: 20, marginTop: 10}}>
                <Image style={{width: 150, height: 150}} source={require('../../../assets/borderBuy.png')} />
            </View>
            <View style={{width: '100%', alignItems: "center"}}>
                <Text style={{color: '#fff', fontSize: 20,}}>Fade border</Text>
            </View>
            <View style={{width: '100%', justifyContent: "center", flexDirection:'row', gap: 10, alignItems:'center'}}>
                <Image style={{width: 32, height: 32}} source={require('../../../assets/coins.png')} />
                <Text style={{color: '#fff', fontSize: 18}}>50</Text>
            </View>      
        </LinearGradient>
    )
}