import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CardRanking from '../../components/cardRank';
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from 'react';

import { URL_API } from '../../api';
import { getData } from '../../scripts/getStorageUser';
import { Context } from '../../context/context';



export default function Ranking() {


    const context = useContext(Context)

    const [rank, setRank] = useState([])
    const [lastIndex, setLastIndex] = useState(0)
    const [time, setTime] = useState(0);

    const { account } = context



    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (timeInSeconds) => {
        const days = Math.floor(timeInSeconds / (3600 * 24));
        const hours = Math.floor((timeInSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;

        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    const oneMonthInSeconds = 30 * 24 * 60 * 60;
    const remainingTime = oneMonthInSeconds - time;




    const getRanking = async () => {

        try {
            const response = await fetch(`${URL_API}/user/Ranking/${account.idUser}`)
            const json = await response.json();

            setLastIndex(json.length - 1)
            setRank(json)

        } catch (error) {
            console.error(error);
        }
    };



    const navigation = useNavigation()


    useEffect(() => {
        getRanking()
    }, [])



    return (

        <ScrollView>
            <View style={styles.container}>

                {/* <View style={{ backgroundColor: "#1282D6", width: 200, height: 200, position: "absolute", borderRadius: 100 }}>

                </View> */}


                <View style={styles.heading}>
                    <Text style={styles.headingTitle}>Season ends in :</Text>
                    <Text style={styles.headingText}>{formatTime(remainingTime)}</Text>
                </View>
                <View style={styles.shopNew}>
                    <View style={styles.text1}>
                        <Text onPress={() => navigation.navigate("Shop")} style={styles.shop}>Shop</Text>
                        <Text style={styles.new}>new</Text>
                    </View>
                    {rank.map((item, index) => (
                        index != (lastIndex - 1) ?
                            (<CardRanking key={index} item={item} />)
                            :
                            (<View style={{}}>
                                <CardRanking item={item} />
                                <View style={styles.barraDeitada}></View>
                            </View>)
                    ))}
                </View>
                <StatusBar style="auto" />
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        paddingTop: 48,
        justifyContent: 'center',

    },
    heading: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    headingTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "bold",
    },
    headingText: {
        color: '#4289D9',
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
    },
    shopNew: {
        display: "flex",
        width: "80%",
        flexDirection: "column",
        marginHorizontal: 8,
        justifyContent: "center",
    },
    barraDeitada: {
        backgroundColor: "#fff",
        width: 330,
        height: 1,
        marginTop: 90,

    },
    text1: {
        display: "flex",
        flexDirection: "row",
    },
    shop: {
        color: '#fff',
        marginTop: 48,
        fontSize: 20,
    },
    new: {
        color: '#fff',
        marginLeft: 15,
        backgroundColor: '#A534DB',
        borderRadius: 45,
        padding: 10,
        marginTop: 44,
        fontSize: 13,

    },

});