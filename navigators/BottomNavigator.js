import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';



import Annonces from '../screens/Annonces';
import Notifications from '../screens/Notifications';
import Compte from '../screens/Compte';
import Services from '../screens/Services';

const CompteStack = createStackNavigator();
const NotificationsStack = createStackNavigator();
const ServicesStack = createStackNavigator();
const ComptesStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => (
    <Tab.Navigator
      initialRouteName="Annonces"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Annonces"
        component={Annonces1}
        options={{
          tabBarLabel: 'Annonces',
          tabBarColor: '#307A50',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-car" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services1}
        options={{
          tabBarLabel: 'Services',
          tabBarColor: '#328154',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-settings" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications1}
        options={{
          tabBarLabel: 'Notifications',
          tabBarColor: '#399360',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Compte"
        component={Compte}
        options={{
          tabBarLabel: 'Compte',
          tabBarColor: '#40a56c',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      
    </Tab.Navigator>
);

export default BottomNavigator;

const Annonces1 = ({navigation}) => (
<CompteStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#307A50',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <CompteStack.Screen name="Annonces" component={Annonces} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#307A50" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</CompteStack.Navigator>
);

const Notifications1 = ({navigation}) => (
<NotificationsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#399360',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <NotificationsStack.Screen name="Notifications" component={Notifications} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#399360" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</NotificationsStack.Navigator>
);
const Services1 = ({navigation}) => (
    <ServicesStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#328154',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <NotificationsStack.Screen name="Services" component={Services} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#328154" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </ServicesStack.Navigator>
);
const Compte1 = ({navigation}) => (
    <CompteStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#40a56c',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <CompteStack.Screen name="Compte" component={Compte} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#40a56c" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </CompteStack.Navigator>
);
