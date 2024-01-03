import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, RefreshControl } from 'react-native';
import styles from './style'

import { PostTop } from '../../components/cardfeed/postTop';
import { ReplyComment } from '../../components/replyComment';
import { ReplyInput } from '../../components/replyInput';
import { useState, useCallback} from 'react';


export function Thread(){

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return(
        <View>
            <SafeAreaView style={{backgroundColor:'#000'}}>
                <ScrollView>
                    <PostTop />
                    <ReplyComment />
                    <PostTop />
                    <ReplyComment />
                    <ReplyInput />
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}