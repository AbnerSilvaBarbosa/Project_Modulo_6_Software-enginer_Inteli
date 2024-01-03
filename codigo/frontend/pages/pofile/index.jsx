import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import styles from "./style";
import { useState, useEffect, useContext } from "react";

import { RankingProfileInfo } from "../../components/profile/profileRanking";
import { TopProfileInfo } from "../../components/profile/profileTop";
import { Tags } from "../../components/tags";
import { SwapComponentProfile } from "../../components/swapComponentProfile";
import { FeedCard } from "../../components/cardfeed copy";
import { BlackSpace } from "../../components/BlackSpace";
import { Context } from "../../context/context";
import { URL_API } from "../../api";

export function Profile() {
  const [posts, setPosts] = useState([]);
  const context = useContext(Context);
  const [modalVisible, setModalVisible] = useState(false);

  const { account } = context;

  const getPosts = async () => {
    try {
      const response = await fetch(
        `${URL_API}/user/postOwner/${account.idUser}`
      );

      console.log(response)
      const json = await response.json();

      setPosts(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <View style={styles.align}>
      <SafeAreaView>
        <ScrollView>
          <TopProfileInfo name={account.fullName} subName={account.subName} />
          <View style={styles.tagsProfileBase}>
            <Tags />
            <Tags />
            <Tags />
          </View>
          <RankingProfileInfo />

          <View style={styles.align}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                marginTop: 20,
                marginBottom: 2,
                fontSize: 22,
              }}
            >
              My Posts:
            </Text>
            <View
              style={{
                alignSelf: "center",
                backgroundColor: "#1282D6",
                width: 10,
                height: 10,
                borderRadius: 100,
              }}
            ></View>
            <ScrollView>
              {posts.map((items) => (
                <FeedCard
                  key={items.idPost}
                  stateModalCompliance={modalVisible}
                  setstateModalCompliance={setModalVisible}
                  datas={items}
                />
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
