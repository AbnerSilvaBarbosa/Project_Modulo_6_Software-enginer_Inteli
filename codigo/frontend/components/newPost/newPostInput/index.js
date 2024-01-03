import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, TextInput } from 'react-native';
import styles from './style';


export function NewPostInput({ setInput, input }) {
    return (
        <View style={styles.inputSize}>
            <TextInput
                editable
                numberOfLines={15}

                value={input}
                onChangeText={setInput}
                style={{
                    padding: 15,
                    color: '#fff',
                    fontSize: 14


                }} placeholder='What are you thinking about today?' placeholderTextColor="gray" />
        </View>
    )
}