import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default styles = StyleSheet.create({
    topPostBase: {
        backgroundColor: '#000',
        width: '100%',
        height: 100,
        flexDirection: 'row',

    },

    topPosAlign: {
        justifyContent: 'center',
            
    },

    topPosAlign2: {
        justifyContent: 'center',

        width:40
        
    },


    topPostPos: {
        flexDirection: 'row',
    },
    topPostColor: {
        marginLeft: 5,
        color: '#fff'
    },
    topPostImg: {
        borderRadius: 8,
        height: 50,
        width: 50,
        marginLeft: 10,
    },
    topPostName: {
        color: `#fff`,
        fontSize: 15,
        marginLeft: 10,
    },
    topPostTime: {
        color: `#808080`,
        fontSize: 11,
        marginLeft: 10,
        
    },
    topPostDots: {
        alignSelf: 'center',
        
    },

});