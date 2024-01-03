import { SafeAreaView, Text, TextInput, View, text, Image, Button, Pressable, ScrollView, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Tags } from '../../tags';
import * as ImagePicker from 'expo-image-picker'
import styles from './style'
import { Tags2 } from '../../tags2';

import { getData } from '../../../scripts/getStorageUser';
import { URL_API } from '../../../api';
import { useNavigation } from '@react-navigation/native';

export function ImgNewPost({ inputText, setInputText, account }) {

  const navigation = useNavigation()

  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false)

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log(result.assets[0].uri)
    }
  };

  const timeNow = Date.now()

  const createPost = async () => {
    try {
      const response = await fetch(`${URL_API}/user/post`, {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          article: inputText,
          time: new Date(timeNow),

          ups: 0,
          downs: 0,
          idUser: account.idUser,
          image: "https://www.dell.com/community/image/serverpage/image-id/109718iACC23BBD497A29F7?v=v2",
          qntLikes: 0
        })
      })

      // console.log(userinfo._j.idUser)
      // console.log({
      //   article: inputText,
      //   time: new Date(timeNow),
      //   ups: 0,
      //   downs: 0,
      //   idUser: userinfo.idUser,
      //   image: "https://www.gupy.io/hubfs/HR-tech.jpg",
      //   qntLikes: 0
      // })
      // const json = await response.json();

      setInputText("")
      setModalVisible(true)



    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.newPostBotBase}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            backgroundColor: "#31A2E3",
            alignSelf: "center",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            width: 250,
            marginTop: 300,
            height: 250,
            borderRadius: 10,
            padding: 13
          }}>
          <Text style={{ fontSize: 16, color: "white" }}>Post postado com sucesso !!!</Text>
          <Pressable
            style={{ borderRadius: 10, marginTop: 17, backgroundColor: "#fff", width: 100, height: 30, alignItems: "center", justifyContent: "center" }}
            onPress={() => {
              setModalVisible(!modalVisible)
              navigation.navigate("Home")

            }}>
            <Text style={{ color: "black", fontSize: 12 }}>Hide modal</Text>
          </Pressable>
        </View>

      </Modal>

      <View style={{ flexDirection: 'row', marginBottom: 13 }}>
        <Tags2 techText={"JS"} />
      </View>
      <View style={{ marginBottom: 20, marginLeft: 10 }}>
        {image && <Image source={{ uri: image }} style={{ width: 80, height: 80 }} />}
      </View>
      <View style={styles.botLine}></View>
      <View style={{ flexDirection: 'row', gap: 50, justifyContent: 'center', marginTop: 20 }}>
        <Pressable onPress={pickImage}>
          <Image source={require('../../../assets/addimg.png')} />
        </Pressable>
        <View>
          <Image source={require('../../../assets/addtag.png')} />
        </View>
        <View>
          <LinearGradient colors={['#3EACDB', '#4164E1']}
            style={{
              width: 150,
              height: 40,
              borderRadius: 30,
              padding: 5,

              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center"

            }} >
            <Pressable onPress={createPost}>
              <Text style={{ color: "white", fontSize: 20 }}>Publish</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </View>
    </View>

  )
}

