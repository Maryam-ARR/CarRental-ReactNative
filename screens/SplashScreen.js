import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/car_logo.jpg')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
            animation="fadeInUpBig"
        >
            <Text style={[styles.title1, {
                 color: '#307A50'
            }]}>Bienvenue,</Text>
            <Text style={[styles.title, {
                color: colors.text
            }]}>Pour une experience optimisee,</Text>
             <Text style={[styles.title, {
                color: colors.text
            }]}>Veuillez vous connecter.</Text>
            <Text style={styles.text}></Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.button}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/car_rental.png')}
            style={styles.logo1}
            resizeMode="contain"
            />
            <TouchableOpacity  style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        backgroundColor:'#40a56c',
                        marginTop: 10
                    }]}
            onPress={()=>navigation.navigate('Compte')}>
               
                    <Text style={styles.textSign}>Agence</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={30}
                    />
                
            </TouchableOpacity>
            </View>
            <View><Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            
            style={styles.logo2}
            resizeMode="center"
            /></View>
            <View style={styles.button1}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/client.png')}
            style={styles.logo1}
            resizeMode="center"
            />
            <TouchableOpacity  style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        backgroundColor:'#40a56c',
                        marginTop: 10
                    }]}
            onPress={()=>navigation.navigate('signIn')}>
               
                    <Text style={styles.textSign}>Client</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={30}
                    />
                
            </TouchableOpacity>
            </View>
            </View>
        </Animatable.View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#40a56c'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 60,
      paddingHorizontal: 30
  },
  logo: {
      width: 200,
      backgroundColor:'#40a56c',
      borderRadius: 150,
      height: 200
  },
  logo1: {
    width: 150,
    borderRadius: 40,
    height: 80
},
logo2: {
    width: 60,
    borderRadius: 40,
    height: 80
},
  title: {
      color: '#05375a',
      fontSize:30,
      fontWeight: 'bold'
  },
  title1: {
    color: '#307A50',
    fontSize:35,
    fontWeight: 'bold'
},

  text: {
      color: 'grey',
      marginTop:0
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 0
  },
  button1: {
    alignItems: 'flex-start',
    marginTop: 0
},
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontSize:20,
      fontWeight: 'bold'
  }
});

