import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';

//Navigators
import BottomNavigator from './navigators/BottomNavigator'
import DrawerNavigator from './navigators/DrawerNavigator'
import Annonces from './screens/Annonces';
import Services from './screens/Services';
import Notifications from './screens/Notifications';
const Drawer = createDrawerNavigator();
//Screens
export default function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  return (
    <PaperProvider theme={theme}>
    
    <NavigationContainer theme={theme}>
      
        <Drawer.Navigator DrawerNavigator={props => <DrawerNavigator {...props} />}>
          <Drawer.Screen name="A" component={BottomNavigator} />
          <Drawer.Screen name="Annonces" component={Annonces} />
          <Drawer.Screen name="Services" component={Services} />
          <Drawer.Screen name="Notifications" component={Notifications} />
        </Drawer.Navigator>
      
    </NavigationContainer>
   
    </PaperProvider>
   
  );
}

