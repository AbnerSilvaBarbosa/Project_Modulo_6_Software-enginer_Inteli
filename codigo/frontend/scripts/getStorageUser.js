import AsyncStorage from "@react-native-async-storage/async-storage"

export const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem("User")
        return jsonValue
    } catch (error) {
        console.log(error)
    }
}