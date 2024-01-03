import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function CardRanking({ item }) {




    return (
        <View style={styles.num}>
            {/* <View style={styles.text2}> */}
            <View style={styles.barra1}>
                {item.position == 1 && <Text style={styles.first}>{item.position}º</Text>}
                {item.position == 2 && <Text style={styles.second}>{item.position}º</Text>}
                {item.position == 3 && <Text style={styles.third}>{item.position}º</Text>}
                {item.position > 3 && <Text style={styles.normal}>{item.position}º</Text>}
            </View>
            <View style={styles.barra}></View>
            <Image source={require("../../assets/FotoRanking.png")} />
            <View style={styles.name}>
                <Text style={styles.mariana}> {item.name}</Text>
                <Text style={styles.mariana1}>@{item.name}</Text>
            </View>
            <View style={styles.numbPoints}>
                <Text style={styles.numb}>{item.points}</Text>
                <Text style={styles.pontos}>Points</Text>
            </View>
            {/* </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    num: {
        marginTop: 20,
        width: "100%",
        backgroundColor: '#192028',
        display: "flex",
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 8,
        justifyContent: "space-between",
        borderRadius: 10
    },
    text2: {
        color: '#fff',
    },
    first: {
        color: '#FFE600',
        fontSize: 20,
        alignSelf: "center",
        marginLeft: 10
    },
    second: {
        color: '#EBDCCD',
        fontSize: 20,
        alignSelf: "center",
        marginLeft: 10
    },
    third: {
        color: '#FF5C00',
        fontSize: 20,
        alignSelf: "center",
        marginLeft: 10
    },
    normal: {
        color: '#fff',
        fontSize: 20,
        alignSelf: "center",
        marginLeft: 10
    },
    barra1: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    barra: {
        width: 1,
        height: 55,
        backgroundColor: "#fff",

    },
    name: {
        color: '#fff',
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        textAlign: "center"
    },
    mariana: {
        color: '#fff',
    },
    mariana1: {
        color: '#42484F',
    },
    numbPoints: {
        justifyContent: "center",
        alignItems: "center"
    },
    numb: {
        color: '#31A2E3',
    },
    pontos: {
        color: '#42484F',
    },

});