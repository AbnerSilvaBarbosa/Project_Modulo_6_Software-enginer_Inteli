import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import styles from './style'
import {useState} from 'react'

export function SelecPosts(){

    const {selected, setSelected} = useState("");

    const data = [
        {key: 'RP', value: 'Relevant posts'},
        {key: 'FY', value: 'For you'},
    ];

    return(
        <View style={styles.selectionPostsBase}>
            <SelectList 
                setSelected={setSelected}
                data={data}
                search={false}
                inputStyles={{color: '#fff'}}
                
            />
        </View>
    )
}