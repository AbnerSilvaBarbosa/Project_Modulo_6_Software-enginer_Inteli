import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ranking from "./Rank";
import { FeedPost } from "./feedposts";
import CreateProject from "./CreateProject";
import { Profile } from "./pofile";
import { View, Text } from "react-native";
import { Search } from "./Search";
import { Shop } from "./feedshop";
import { Home } from "./Home";
import { NewComer } from "./newcomer";
import { Thread } from "./thread";
import { NewPost } from "./newPost";

import { Entypo, Feather, Ionicons } from "@expo/vector-icons"
import { ButtonNav } from "../components/buttonNav";

const Tab = createBottomTabNavigator();

export function Tabs() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarStyle: { backgroundColor: "black", paddingBottom: 5, paddingTop: 5 },
            tabBarActiveTintColor: "#3069AE",
            tabBarInactiveTintColor: "gray"
        })}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false, tabBarIcon: ({ size, color }) => (
                        <Entypo name="home" size={size} color={color} />
                    )
                }}
            />


            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    headerShown: false, tabBarIcon: ({ size, color }) => (
                        <Feather name="search" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="+"
                component={NewPost}
                options={{
                    tabBarLabel: "",
                    tabBarStyle: { display: "none" },
                    headerShown: false, tabBarIcon: ({ size, color }) => (
                        <ButtonNav size={size} color={"white"} />
                    )

                }} />

            <Tab.Screen
                name="Rank"
                component={Ranking}
                options={{
                    headerShown: false, tabBarIcon: ({ size, color }) => (
                        <Entypo name="trophy" size={size} color={color} />
                    )
                }} />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false, tabBarIcon: ({ size, color }) => (
                        <Ionicons name="person-circle" size={size} color={color} />
                    )
                }} />
        </Tab.Navigator>
    )
}