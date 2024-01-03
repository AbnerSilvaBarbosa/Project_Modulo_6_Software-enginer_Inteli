import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem("User", jsonValue)
    } catch (error) {
        console.log(error)
    }
}