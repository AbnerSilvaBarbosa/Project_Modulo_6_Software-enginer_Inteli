import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, Pressable, } from 'react-native';
import styles from './style'
import { useNavigation } from "@react-navigation/native";

import { NewUserButton } from '../../components/newUserButton';
import { BlackSpace } from '../../components/BlackSpace';
import { CssTag } from '../../components/newUserTags/cssTag';
import { HtmlTag } from '../../components/newUserTags/htmlTag';
import { JsTag } from '../../components/newUserTags/jsTag';
import { ProgTag } from '../../components/newUserTags/progTag';
import { ScrumTag } from '../../components/newUserTags/scrumTag';
import { UiTag } from '../../components/newUserTags/uiTag';
import { UxTag } from '../../components/newUserTags/uxTag';
import style from './style';

export function NewComer(){

    const navigation = useNavigation()

    return(
        <View style={styles.base}>
            <SafeAreaView>
                <ScrollView>
                    <View style={{marginBottom: 20,}}>
                        <View style={styles.align}>
                            <Text style={styles.tittle}>Are you new here?</Text>
                        </View>
                        <View style={styles.align}>
                            <Text style={styles.tittle}>Select which contents you want to explore in <Text style={styles.tinam}>TINAM APP</Text></Text>
                        </View>
                        <BlackSpace />
                        <BlackSpace />
                        <View>
                            <Text style={styles.count}>0/10</Text>
                        </View>
                    </View>
                    <View style={{gap: 20, marginBottom: 50,}}>
                        <View style={styles.tagAlign}>
                            <HtmlTag />
                            <CssTag />
                            <JsTag />
                        </View>
                        <View style={styles.tagAlign}>
                            <UiTag />
                            <UxTag />
                        </View>
                        <View style={styles.tagAlign}>
                            <ProgTag />
                            <ScrumTag />
                            <JsTag />
                        </View>
                        <View style={styles.tagAlign}>
                            <HtmlTag />
                            <CssTag />
                        </View>
                        <View style={styles.tagAlign}>
                            <ProgTag />
                            <ScrumTag />
                            <JsTag />
                        </View>
                        <View style={styles.tagAlign}>
                            <HtmlTag />
                            <CssTag />
                        </View>
                        <View style={styles.tagAlign}>
                            <HtmlTag />
                            <CssTag />
                            <JsTag />
                        </View>
                        <View style={styles.tagAlign}>
                            <UiTag />
                            <UxTag />
                        </View>
                    </View>
                    <View>
                        <Pressable onPress={() => [
                            navigation.navigate('Start')
                        ]}>
                            <NewUserButton />
                        </Pressable>
                    </View>   
                </ScrollView>
            </SafeAreaView>
        </View>
    )

    
}