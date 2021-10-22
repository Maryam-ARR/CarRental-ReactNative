import React from 'react';
import { createStackNavigator}from "@react-navigation/stack"
import Annonces from "../screens/Annonces";

const Stack=createStackNavigator()

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Annonces'
            component={Annonces}
            options={{
                headerShown:false
            }}
            />
        </Stack.Navigator>
    )
}
export default function HomeBottomNavigator(){
    return<MyStack/>
}

