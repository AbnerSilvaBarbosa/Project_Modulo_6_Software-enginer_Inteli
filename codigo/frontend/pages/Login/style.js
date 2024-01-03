import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";



export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    hello: {
        fontFamily: "Montserrat-Light",
        color: "white",
        fontSize: 35,
        textAlign: "center",
        marginTop: 50
    },

    inputText: {
        height: 50,
        width: 304,
        borderRadius: 20,
        color: "white",
        borderColor: "white",
        padding: 10,
        paddingHorizontal: 50,

        borderWidth: 2,

        marginBottom: 20,
        marginTop: 20
    },

    imageDell: {
        flex: 1,
        alignSelf: "center",
        width: 120,
        resizeMode: 'contain',
    }


});