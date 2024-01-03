import { View, Text, StyleSheet } from "react-native";

import { Entypo } from "@expo/vector-icons"

export function ButtonNav({ size, color }) {
    return (
        <View style={styles.container}>
            <Entypo size={size} color={color} name="plus" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#31A2E3",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30
    }
})