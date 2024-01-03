import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    cardBackground: {
        // backgroundColor: '#31A2E3',
        // width: 350,
        // height: 270,
        // borderRadius: 17,
        // marginTop:80,
    },
    foto:{
        marginTop: 50,        
        alignSelf:"center",
        height:100,
        width:100,
        resizeMode:"contain",
    },
    text1:{
        justifyContent:"flex-end",
        alignItems:"center"


        
    },
    text2:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop: 30,
        gap:10,
        color:"#31A2E3"
    },

    coin:{
        width:32,
        height:32,
    },

    background:{
        color:'#31A2E3',

    },

    textcolor:{
        color:"white",
        fontSize:20,
    },

    textcolor2:{
        color:"#CDCDCD",
        fontSize:13,

    },

})