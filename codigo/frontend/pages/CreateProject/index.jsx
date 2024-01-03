import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View, text, Image, Button, Pressable, ScrollView } from 'react-native';
import { styles } from './style';



export function CreateProject() {

    const [state, setState] = useState(false)



    return (
        <SafeAreaView style={styles.body}>
            <ScrollView>
                <Text style={styles.text}>Create Project</Text>
                <View style={{ marginLeft: 4.5 }}>
                    <View>
                        <Text style={styles.text2}>  Project Name <Text style={{ color: "red" }}>*</Text></Text>

                        <TextInput
                            style={styles.input}
                            color="white"
                            value={text}
                        />
                    </View>

                    <View>
                        <Text style={styles.text2}>  Description</Text>
                        <TextInput
                            style={styles.input}
                            color="white"
                            value={text}
                        />
                    </View>

                    <View style={styles.container}>
                        <View>
                            <Text style={styles.textStartProject}>Start Project</Text>

                            <TextInput
                                style={styles.input1}
                                color="white"
                                keyboardType="numeric"
                            />
                        </View>

                        <View style={styles.containerChild}>
                            <Text style={styles.text6}>Duration Project</Text>
                            <TextInput
                                style={styles.input1}
                                color="white"
                                keyboardType="numeric"
                            />
                        </View>
                    </View>


                    <View>
                        <Text style={styles.text2}> Status</Text>
                        <TextInput
                            style={styles.input}
                            color="white"
                            value={text}
                        />
                    </View>

                    <Text style={styles.text5}>Jobs</Text>


                    <View style={{ flexDirection: 'row', alignItems: 'center', width: 380, display: "flex", justifyContent: "space-between", borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 5, marginBotton: 5 }}>

                        <Text style={styles.text1}>Front-end</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', display: "flex", gap: 14, padding: 7 }}>
                            <Pressable style={styles.button}>
                                <Text style={{ fontSize: 25, color: 'white', alignSelf: "center" }}>-</Text>
                            </Pressable>

                            <Text style={{ color: "white", fontSize: 25 }}>0</Text>

                            <Pressable style={styles.button}>
                                <Text style={{ fontSize: 25, color: 'white', alignSelf: "center" }}>+</Text>
                            </Pressable>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', width: 380, display: "flex", justifyContent: "space-between", borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 5, marginBotton: 5 }}>

                        <Text style={styles.text1}>Back-end</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', display: "flex", gap: 14, padding: 7 }}>
                            <Pressable style={styles.button}>
                                <Text style={{ fontSize: 25, color: 'white', alignSelf: "center" }}>-</Text>
                            </Pressable>

                            <Text style={{ color: "white", fontSize: 25 }}>0</Text>

                            <Pressable style={styles.button}>
                                <Text style={{ fontSize: 25, color: 'white', alignSelf: "center" }}>+</Text>
                            </Pressable>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', width: 380, display: "flex", justifyContent: "space-between", borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 5, marginBotton: 5 }}>

                        <Text style={styles.text1}>UX Design</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', display: "flex", gap: 14, padding: 7 }}>
                            <Pressable style={styles.button}>
                                <Text style={{ fontSize: 25, color: 'white', alignSelf: "center" }}>-</Text>
                            </Pressable>

                            <Text style={{ color: "white", fontSize: 25 }}>0</Text>

                            <Pressable style={styles.button}>
                                <Text style={{ fontSize: 25, color: 'white', alignSelf: "center" }}>+</Text>
                            </Pressable>
                        </View>

                    </View>


                    <View style={{ flexDirection: 'row', alignItems: 'center', width: 380, display: "flex", justifyContent: "space-between", borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 5, marginBotton: 5 }}>

                        <Text style={styles.text1}>UI Design</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', display: "flex", gap: 14, padding: 7 }}>
                            <Pressable style={styles.button}>
                                <Text style={{ fontSize: 25, color: 'white', alignSelf: "center" }}>-</Text>
                            </Pressable>

                            <Text style={{ color: "white", fontSize: 25 }}>0</Text>

                            <Pressable style={styles.button}>
                                <Text style={{ fontSize: 25, color: 'white', alignSelf: "center" }}>+</Text>
                            </Pressable>
                        </View>

                    </View>


                    <View style={{ flexDirection: 'row', alignItems: 'center', width: 380, display: "flex", justifyContent: "space-between", borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 5, marginBotton: 5 }}>

                        <Text style={styles.text1}>QA</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', display: "flex", gap: 14, padding: 7 }}>
                            <Pressable style={styles.button}>
                                <Text style={{ fontSize: 25, color: 'white', alignSelf: "center" }}>-</Text>
                            </Pressable>

                            <Text style={{ color: "white", fontSize: 25 }}>0</Text>

                            <Pressable style={styles.button}>
                                <Text style={{ fontSize: 25, color: 'white', alignSelf: "center" }}>+</Text>
                            </Pressable>
                        </View>

                    </View>

                    <Text style={styles.text3}>Select tags for your projects</Text>
                    <Text style={styles.text4}>This tag can help the AI for calculated the match with other people.</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', display: "flex" }}>


                    <View style={{ marginTop: 20, marginLeft: 20, marginBottom: 100 }}>

                        {!state &&
                            <Pressable style={{ borderWidth: 2, borderColor: "white", borderRadius: 20, height: 33, width: 76, alignItems: "center", justifyContent: "center" }} onPress={() => {
                                setState(!state)
                            }}>
                                <Text style={{ color: "white", textAlign: "center" }}>JAVA</Text>
                            </Pressable>
                        }

                        {state &&
                            <Pressable style={{ borderWidth: 2, borderColor: "white", borderRadius: 20, height: 33, width: 76, alignItems: "center", justifyContent: "center", backgroundColor: "white" }} onPress={() => {
                                setState(!state)
                            }}>
                                <Text style={{ color: "black" }}>JAVA</Text>
                            </Pressable>
                        }

                    </View>

                    <View style={{ marginTop: 20, marginLeft: 20, marginBottom: 100 }}>

                        {!state &&
                            <Pressable style={{ borderWidth: 2, borderColor: "white", borderRadius: 20, height: 33, width: 76, alignItems: "center", justifyContent: "center" }} onPress={() => {
                                setState(!state)
                            }}>
                                <Text style={{ color: "white", textAlign: "center" }}>JAVA</Text>
                            </Pressable>
                        }

                        {state &&
                            <Pressable style={{ borderWidth: 2, borderColor: "white", borderRadius: 20, height: 33, width: 76, alignItems: "center", justifyContent: "center", backgroundColor: "white" }} onPress={() => {
                                setState(!state)
                            }}>
                                <Text style={{ color: "black" }}>JAVA</Text>
                            </Pressable>
                        }

                    </View>
                    <View style={{ marginTop: 20, marginLeft: 20, marginBottom: 100 }}>

                        {!state &&
                            <Pressable style={{ borderWidth: 2, borderColor: "white", borderRadius: 20, height: 33, width: 76, alignItems: "center", justifyContent: "center" }} onPress={() => {
                                setState(!state)
                            }}>
                                <Text style={{ color: "white", textAlign: "center" }}>JAVA</Text>
                            </Pressable>
                        }

                        {state &&
                            <Pressable style={{ borderWidth: 2, borderColor: "white", borderRadius: 20, height: 33, width: 76, alignItems: "center", justifyContent: "center", backgroundColor: "white" }} onPress={() => {
                                setState(!state)
                            }}>
                                <Text style={{ color: "black" }}>JAVA</Text>
                            </Pressable>
                        }

                    </View>
                    <View style={{ marginTop: 20, marginLeft: 20, marginBottom: 100 }}>

                        {!state &&
                            <Pressable style={{ borderWidth: 2, borderColor: "white", borderRadius: 20, height: 33, width: 76, alignItems: "center", justifyContent: "center" }} onPress={() => {
                                setState(!state)
                            }}>
                                <Text style={{ color: "white", textAlign: "center" }}>JAVA</Text>
                            </Pressable>
                        }

                        {state &&
                            <Pressable style={{ borderWidth: 2, borderColor: "white", borderRadius: 20, height: 33, width: 76, alignItems: "center", justifyContent: "center", backgroundColor: "white" }} onPress={() => {
                                setState(!state)
                            }}>
                                <Text style={{ color: "black" }}>JAVA</Text>
                            </Pressable>
                        }

                    </View>
                </View>


            </ScrollView>
        </SafeAreaView>

    );
};

export default CreateProject;