import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, RefreshControl } from 'react-native';
import styles from './style'

import { FeedCard } from '../../components/cardfeed';
import { BlackSpace } from '../../components/BlackSpace';
import { ModalCompliance } from '../../components/modalReport';

import { useState, useCallback } from 'react';

// props: infos the feed
export function FeedPost({ posts, setUpdate, updateValue }) {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.align}>
            <SafeAreaView>
                <ScrollView>
                    
                    {posts.map((items) => (


                        <FeedCard
                            key={items.idPost}
                            datas={items} 
                            setstateModalCompliance={setModalVisible}
                            stateModalCompliance={modalVisible}/>

                    ))}


                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

