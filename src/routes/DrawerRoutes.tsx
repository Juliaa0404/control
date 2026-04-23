import React from "react";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList
} from "@react-navigation/drawer"

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity    
} from "react-native"

import {Ionicons} from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import EntidadeScreen from "../screens/EntidadeScreen";
import ContasReceberScreen from "../screens/ContasReceberScreen";
import ContasPagarScreen from "../screens/ContasPagarScreen";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {

    const user = {
        nome: "Guilherme Rufato",
        foto: "https://i.pravatar.cc/100"
    };

return (

    <View style={StyleSheet.container}>

        <DrawerContentScrollView {...props}>

            <View style={StyleSheet.header}>

                <Image
                source={{uri: user.foto}}
                style={StyleSheet.avatar}
                />
            
            <Text styles={StyleSheet.name}>
                {user.nome}
            </Text>

     </View>

     <DrawerItemList {...props} />

        </DrawerContentScrollView>

        <View style={styles.footer}/>

     <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => console.log("Logout")}
        >

        <Ionicons name="log-out-outline" size={22} color="#fff" />

        <Text style={StyleSheet.logoutText}>
    
        Deslogar
        </Text>

     </TouchableOpacity>

        </View>

    </View>
);    
}

export default function DrawerRoutes() {

    return (

        <Drawer.Navigator
         drawerContent={(props) => <CustomDrawerContent {...props}/>}
         screenOptions={{
            headerStyle: {
                backgroundColor: "#1E88E5"
            };
            headerTintColor:"#fff",
            drawerActiveTintColor: "#1E88E5"
         }}
         >

         <Drawer.Screen
         name="Home"
         component={HomeScreen}
         options={{
            drawerIcon: ({color, size}) => (
                <Ionicons name="person-add" size={size} color={color} />
            )
         }}
         />

         <Drawer.Screen
         name="Contas a Receber"
         component={ContasReceberScreen}
         options={{
            drawerIcon: ({color, size}) => (
                <Ionicons name="wallet-outline" size={size} color={color} />
            )
         }}
         />

          <Drawer.Screen
         name="Contas a Pagar"
         component={ContasPagarScreen}
         options={{
            drawerIcon: ({color, size}) => (
                <Ionicons name="cash-outline" size={size} color={color} />
            )
         }}
         />
    )
}