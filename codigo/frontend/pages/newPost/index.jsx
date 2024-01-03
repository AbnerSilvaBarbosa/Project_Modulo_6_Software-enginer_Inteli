import { SafeAreaView, Text, TextInput, View, text, Image, Button, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ImgNewPost } from '../../components/newPost/newPostBot';
import { NewPostInput } from '../../components/newPost/newPostInput';
import { NewPostTop } from '../../components/newPost/newPostTop';
import { useContext, useState } from 'react';
import { Context } from '../../context/context';

export function NewPost() {
    const context = useContext(Context)
    const [input, setInput] = useState("")
    const navigation = useNavigation()

    const { account, setAccount } = context

    return (
        <View style={{ width: '100%', backgroundColor: '#000' }} >
            <SafeAreaView>
                <View style={{ marginTop: 20, marginLeft: 20, }}>
                    <Pressable onPress={() => {
                        navigation.goBack()
                    }} >
                        <Text style={{ fontSize: 20, color: "#31A2E3" }}>Voltar</Text>
                    </Pressable>
                </View>

                <View style={{ padding: 15 }}>
                    <NewPostTop />
                    <NewPostInput input={input} setInput={setInput} />
                    <ImgNewPost account={account} inputText={input} setInputText={setInput} />
                </View>
            </SafeAreaView>
        </View>
    )
}