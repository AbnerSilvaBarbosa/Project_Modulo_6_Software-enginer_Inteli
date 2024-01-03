import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import { styles } from "../feedshop/style";
import { ShopBuy } from "../../components/shopCard/shopBuy";
import { ShopNews } from "../../components/shopCard/shopNews";


export function Shop() {
    return (
        <SafeAreaView style={styles.pageBase}>
            <ScrollView>
                <View style={{height: 150, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10}}>
                    <Image source={require('../../assets/coins.png')} />
                    <Text style={{color: '#31A2E3', fontSize: 22}}>1000</Text>
                </View>
                <View style={{height: 300, alignItems: "center"}}>
                    <ShopNews />
                </View>
                <View style={{height: 300, marginTop:20}}>
                    <ScrollView horizontal={true} style={{flexDirection: 'row', gap:30}}> 
                        <ShopBuy />
                        <ShopBuy />
                        <ShopBuy />
                        <ShopBuy />
                        <ShopBuy />
                        <ShopBuy />
                        <ShopBuy />
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

