import { StyleSheet, Text, View, Button, Image } from 'react-native';

import { PostTop } from './postTop';
import { PostMid } from './postMid';
import { PostBotton } from './postBotton';

import { ModalCompliance } from '../modalReport';


export function FeedCard({ datas, stateModalCompliance, setstateModalCompliance }) {

    return (
        <View style={{ backgroundColor: "black" }}>
            <ModalCompliance modalVisible={stateModalCompliance} setModalVisible={setstateModalCompliance} />
            <PostTop state={stateModalCompliance} setState={setstateModalCompliance} timer={datas.time} />
            <PostMid article={datas.article} imageURL={datas.image} />
            <PostBotton likes={datas.qntLikes} idArray={datas.idUserLike} idPost={datas.idPost} />
        </View>
    )
}